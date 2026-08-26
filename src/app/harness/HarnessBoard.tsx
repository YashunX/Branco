"use client";

import { useMemo, useState } from "react";
import { ArrowRight, GitBranch, RotateCw, ShieldCheck } from "lucide-react";
import { type Branch, scoreLabels } from "../../lib/harness";

type Harness = { updatedAt: string; rule: string; modelPolicy: string; branches: Branch[] };

export default function HarnessBoard({ harness }: { harness: Harness }) {
  const [branchId, setBranchId] = useState(harness.branches[0].id);
  const branch = useMemo(() => harness.branches.find((item) => item.id === branchId)!, [branchId, harness.branches]);
  const latest = branch.loops.at(-1);

  return (
    <div className="page-shell harness-page">
      <div className="harness-heading">
        <div>
          <div className="eyebrow"><span /> IMPROVEMENT HARNESS / GIT-BACKED</div>
          <h1>案を出すだけでなく、<em>良くしていく。</em></h1>
          <p>この画面は生成結果の展示ではなく、AIが更新する改善状態の共有面です。最終更新：{harness.updatedAt}</p>
        </div>
        <div className="harness-rule"><ShieldCheck size={18} /><span>{harness.rule}<br /><br />{harness.modelPolicy}</span></div>
      </div>

      <section className="branch-section">
        <div className="section-heading"><div><span className="card-label">CONCEPT BRANCHES</span><h2>探索の枝を切り替える</h2></div><GitBranch size={20} /></div>
        <div className="branch-tabs">
          {harness.branches.map((item) => <button key={item.id} onClick={() => setBranchId(item.id)} className={item.id === branchId ? "active" : ""}><small>{item.status}</small>{item.title}</button>)}
        </div>
      </section>

      <section className="active-branch">
        <div><span className="card-label">ACTIVE PREMISE</span><h2>{branch.title}</h2><p>{branch.premise}</p></div>
        <div className="branch-status"><RotateCw size={18} /><b>{latest ? `Loop #${latest.id}まで記録` : "未実行"}</b><span>{branch.status}</span></div>
      </section>

      {branch.loops.length ? <section className="loop-timeline">
        {branch.loops.map((loop, index) => <article className="loop-card" key={loop.id}>
          <div className="loop-index"><b>#{loop.id}</b><span>{loop.phase}</span><small>{loop.model ?? "Terra"}</small>{index < branch.loops.length - 1 && <i><ArrowRight size={16} /></i>}</div>
          <div className="loop-main"><span className="card-label">QUESTION / {loop.date}</span><h3>{loop.question}</h3><div className="loop-detail"><div><b>INPUT</b><p>{loop.input.join(" / ")}</p></div><div><b>OUTPUT</b><p>{loop.output}</p></div><div><b>DIAGNOSIS</b><p>{loop.diagnosis}</p></div></div></div>
          <div className="score-stack">{scoreLabels.map(({ key, label, max }) => <div key={key}><span>{label}</span><b>{loop.scores[key]}/{max}</b></div>)}</div>
          <footer><b>前回からの差分</b><p>{loop.delta}</p><b>次の一手</b><p>{loop.next}</p></footer>
        </article>)}
      </section> : <section className="empty-branch"><h2>この枝はまだ走らせていません。</h2><p>次のAI実行で、問い・入力・出力・診断・次の一手を追加します。</p></section>}

      <section className="harness-protocol"><span className="card-label">HOW AN AGENT UPDATES THIS</span><h2>次のループは、前の診断を入力にする。</h2><ol><li>この枝の「次の一手」だけを検証するために、必要最小限の調査をする。</li><li>前回の出力を捨てずに修正し、何が変わったかを明記する。</li><li>点数と人の直感を分けて記録し、伸びなければ別の枝へ切り替える。</li></ol><p>更新元：<code>src/lib/harness.ts</code>。AIコーディング環境を問わず、このデータを更新し、検証後にGitへ残します。</p></section>
    </div>
  );
}
