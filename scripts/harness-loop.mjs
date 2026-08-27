#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const stateDir = join(root, ".harness");
const statePath = join(stateDir, "runtime.json");
const stopPath = join(stateDir, "STOP");
const args = new Set(process.argv.slice(2));

if (args.has("--stop")) {
  mkdirSync(stateDir, { recursive: true });
  writeFileSync(stopPath, "User requested stop.\n");
  console.log("Harness stop requested. The current cycle will finish, then the runner exits.");
  process.exit(0);
}

if (args.has("--resume")) rmSync(stopPath, { force: true });
mkdirSync(stateDir, { recursive: true });

const previous = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, "utf8"))
  : { startedAt: new Date().toISOString(), cycles: 0, status: "running" };

const prompt = `You are the continuous improvement runner for the BranCo! '応援' project in this repository.

Run exactly ONE complete harness cycle, then return control to this runner. Do not start a local dev server. Do not stop because human feedback is absent. Do not ask the user to repeat the loop instruction.

Required work in this cycle:
1. Read README.md and src/lib/harness.ts. Treat existing ideas as knowledge only; choose a genuinely independent daily-life scene when branching.
2. Do the minimum fresh public-source research needed for that scene. Record sources and distinguish facts from hypotheses.
3. Create a pre-screen-quality candidate: clear title stating who/what it is; background; tension; redefinition of 応援; concrete first scene; why this form; risks.
4. Perform a harsh review in the same cycle. If the output creates a new burden, obligation, scoring system, or vague metaphor, remove or replace it. Record the diagnosis and delta.
5. Update src/lib/harness.ts and the report/preview so the site shows the improved result, not the rejected initial draft.
6. If a branch has stalled, park it and create the next independent branch. Human feedback waiting is never a stop condition.
7. Run npm run lint, npm run build, and git diff --check. Commit only scoped changes. Before deployment, verify Vercel is yashunx / yashunxs-projects; never touch Propagate. Deploy production only when the code changed and checks pass.

Use Terra for normal cycles. Use Sol only for genuine high-reasoning synthesis, and record why. Keep the work economical, but complete. Never write a final conversational sign-off saying the loop is finished; this is one cycle in an ongoing run.`;

while (!existsSync(stopPath)) {
  const cycle = previous.cycles + 1;
  const state = { ...previous, cycles: cycle, status: "running", lastCycleStartedAt: new Date().toISOString() };
  writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`);
  console.log(`\n=== Harness cycle ${cycle} ===\n`);

  const result = spawnSync("codex", [
    "exec", "--dangerously-bypass-approvals-and-sandbox", "--search", "-m", "gpt-5.6-terra", "-C", root, prompt,
  ], { cwd: root, stdio: "inherit" });

  const completed = { ...state, lastCycleFinishedAt: new Date().toISOString(), lastExitCode: result.status ?? 1 };
  previous.cycles = cycle;
  Object.assign(previous, completed);
  writeFileSync(statePath, `${JSON.stringify(completed, null, 2)}\n`);

  if (result.status !== 0) {
    console.error("Harness cycle failed. State was preserved; fix the failure and resume with npm run harness:loop -- --resume.");
    process.exit(result.status ?? 1);
  }
}

const stopped = { ...previous, status: "stopped", stoppedAt: new Date().toISOString() };
writeFileSync(statePath, `${JSON.stringify(stopped, null, 2)}\n`);
console.log("Harness stopped by user request.");
