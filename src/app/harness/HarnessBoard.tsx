"use client";

import { useMemo, useState } from "react";
import { ArrowRight, GitBranch, RotateCw, ShieldCheck } from "lucide-react";
import { type Branch, type BranchDecision, scoreLabels } from "../../lib/harness";

type Harness = { updatedAt: string; rule: string; modelPolicy: string; submissionRule: string; branchingRule: string; branchDecisions: BranchDecision[]; branches: Branch[] };

export default function HarnessBoard({ harness }: { harness: Harness }) {
  const [branchId, setBranchId] = useState(harness.branches[0].id);
  const branch = useMemo(() => harness.branches.find((item) => item.id === branchId)!, [branchId, harness.branches]);
  const latest = branch.loops.at(-1);
  const decision = harness.branchDecisions.find((item) => item.branchId === branch.id);
  const loopSummary = useMemo(() => {
    const latestLoops = harness.branches.map((item) => item.loops.at(-1)).filter(Boolean);
    return {
      total: harness.branches.length,
      publicEvidence: latestLoops.filter((loop) => loop?.evidence === "公開情報を確認").length,
      humanCheck: latestLoops.filter((loop) => loop?.evidence !== "検証済み").length,
      iterated: harness.branches.filter((item) => item.loops.length > 1).length,
    };
  }, [harness.branches]);
  const currentReviewQueue = useMemo(() => harness.branches
    .slice()
    .reverse()
    .map((item) => ({ branch: item, loop: item.loops.at(-1) }))
    .filter((item) => item.loop?.evidence !== "検証済み")
    .slice(0, 6), [harness.branches]);

  return (
    <div className="page-shell harness-page">
      <div className="harness-heading">
        <div>
          <div className="eyebrow"><span /> IMPROVEMENT HARNESS / GIT-BACKED</div>
          <h1>案を出すだけでなく、<em>良くしていく。</em></h1>
          <p>この画面は生成結果の展示ではなく、AIが更新する改善状態の共有面です。最終更新：{harness.updatedAt}</p>
        </div>
        <div className="harness-rule"><ShieldCheck size={18} /><span>{harness.rule}<br /><br />{harness.modelPolicy}<br /><br /><b>提出品質の基準：</b>{harness.submissionRule}</span></div>
      </div>

      <section className="harness-overview" aria-label="ハーネスの現在地">
        <article><span>探索中の枝</span><b>{loopSummary.total}</b><small>公開情報から組み立てた生活場面</small></article>
        <article><span>公開情報を確認</span><b>{loopSummary.publicEvidence}</b><small>根拠と仮説を分けて記録済み</small></article>
        <article><span>人の確認待ち</span><b>{loopSummary.humanCheck}</b><small>点数だけで結論にしない候補</small></article>
        <article><span>複数ループ済み</span><b>{loopSummary.iterated}</b><small>初稿から改善履歴を持つ枝</small></article>
      </section>

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
          <div className="loop-index"><b>#{loop.id}</b><span>{loop.phase}</span><small>{loop.model ?? "Terra"}</small><small className="evidence-status">{loop.evidence ?? "仮説"}</small>{index < branch.loops.length - 1 && <i><ArrowRight size={16} /></i>}</div>
          <div className="loop-main"><span className="card-label">QUESTION / {loop.date}</span><h3>{loop.question}</h3><div className="loop-detail"><div><b>INPUT</b><ol className="input-notes">{loop.input.map((item) => <li key={item}>{item}</li>)}</ol></div><div><b>OUTPUT</b><p>{loop.output}</p></div><div><b>DIAGNOSIS</b><p>{loop.diagnosis}</p></div></div></div>
          <div className="score-stack">{scoreLabels.map(({ key, label, max }) => <div key={key}><span>{label}</span><b>{loop.scores[key]}/{max}</b></div>)}</div>
          <footer><b>前回からの差分</b><p>{loop.delta}</p><b>次の一手</b><p>{loop.next}</p>{loop.sources.length > 0 && <><b>参照した情報</b><p className="loop-sources">{loop.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.name} <span>— {source.usedFor}</span></a>)}</p></>}</footer>
        </article>)}
      </section> : <section className="empty-branch"><h2>この枝はまだ走らせていません。</h2><p>次のAI実行で、問い・入力・出力・診断・次の一手を追加します。</p></section>}

      <section className="harness-protocol"><span className="card-label">HOW AN AGENT UPDATES THIS</span><h2>次のループは、前の診断を入力にする。</h2><ol><li>この枝の「次の一手」だけを検証するために、必要最小限の調査をする。</li><li>前回の出力を捨てずに修正し、何が変わったかを明記する。</li><li>点数と人の直感を分けて記録し、伸びなければ別の枝へ切り替える。</li></ol><p>更新元：<code>src/lib/harness.ts</code>。AIコーディング環境を問わず、このデータを更新し、検証後にGitへ残します。</p></section>
      <section className="harness-protocol"><span className="card-label">BRANCHING RULE / THE CORE LOOP</span><h2>伸びない枝を、待機状態にしない。</h2><p>{harness.branchingRule}</p>{decision && <div className="branch-decision"><b>今回の判断：{decision.verdict}</b><p>{decision.reason}</p><p><b>次の発散：</b>{decision.nextPrompt}</p></div>}</section>

      <section className="review-queue"><span className="card-label">INTERNAL MEMO / REVIEW QUEUE</span><h2>いま人に確かめる問い</h2><p>最新枝から優先して表示する内部メモです。回答が来たら、日時・相手・内容を次ループの入力に記録します。</p><div>{currentReviewQueue.map(({ branch: reviewBranch, loop }, index) => <article key={reviewBranch.id}><span>{String(index + 1).padStart(2, "0")} / {reviewBranch.title}</span><h3>{loop?.next}</h3><p><b>この問いが残る理由：</b>{loop?.diagnosis}</p></article>)}</div></section>
    </div>
  );
}
