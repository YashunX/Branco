import { ArrowUpRight, Check, Clock3, ExternalLink, FileText, Lightbulb, MessageCircle, Quote, Sparkles } from "lucide-react";
import { harness, scoreLabels, type ArchiveObservation, type Branch, type PreScreenBrief, type PrototypePreview, type ReviewQuestion } from "../../lib/harness";

export default function Reports() {
  const branches: Branch[] = harness.branches;
  const active = branches.find((branch) => branch.status === "active") ?? branches[0];
  const latest = active.loops.at(-1)!;
  const candidates = branches.filter((branch) => branch.loops.length > 0).map((branch) => {
    const loop = branch.loops.at(-1)!;
    return { branch, loop, total: Object.values(loop.scores).reduce((sum, score) => sum + score, 0) };
  }).sort((a, b) => b.total - a.total);
  const sources = [...new Map(active.loops.flatMap((loop) => loop.sources).map((source) => [source.url, source])).values()];
  const briefs: PreScreenBrief[] = harness.preScreenBriefs;
  const reviewQuestions: ReviewQuestion[] = harness.reviewQuestions;
  const archiveObservations: ArchiveObservation[] = harness.archiveObservations;
  const prototypePreviews: PrototypePreview[] = harness.prototypePreviews;
  const maxScore = scoreLabels.reduce((sum, score) => sum + score.max, 0);

  return <div className="page-shell report-page">
    <div className="report-top"><div>
      <div className="eyebrow"><span /> LATEST REPORT / LOOP #{latest.id} / {latest.date}</div>
      <h1>{active.title}<br /><em>{active.premise}</em></h1>
      <p>ハーネスの最新ループから自動で組み立てる共有用レポートです。完成を装わず、生成・調査・人の確認状況を同じ画面に残します。</p>
    </div><a href="/harness" className="ghost-button"><FileText size={17} /> 全ループを見る</a></div>

    <section className="report-hero-card"><div className="report-number">{latest.id}</div><div>
      <span className="card-label">CURRENT CONCEPT / {latest.evidence ?? "仮説"}</span>
      <h2>{active.title}<br />{active.premise}</h2><p>{latest.output}</p>
    </div><div className="report-meta"><span>THEME</span><strong>応援</strong><span>STATUS</span><strong>{latest.evidence ?? "仮説"}</strong><span>MODEL</span><strong>{latest.model ?? "Terra"}</strong></div></section>

    <section className="report-grid">
      <article className="paper-card"><div className="paper-icon"><Quote size={19} /></div><span className="card-label">INPUT / THIS LOOP</span><h3>{latest.question}</h3><p>{latest.input.join("　/　")}</p></article>
      <article className="paper-card accent-paper"><div className="paper-icon"><Lightbulb size={19} /></div><span className="card-label">CRITICAL REVIEW</span><h3>いま確かなことと、<br />まだ仮説のことを分ける。</h3><p>{latest.diagnosis}</p></article>
      <article className="paper-card"><div className="paper-icon"><Sparkles size={19} /></div><span className="card-label">NEXT VALIDATION</span><h3>次に確かめること</h3><p>{latest.next}</p></article>
    </section>

    <section className="brief-preview-section"><div className="section-heading"><div><span className="card-label">PRE-SCREEN ONE-PAGE PREVIEW</span><h2>二案を、提出の一枚として比べる</h2></div><FileText size={20} /></div>
      <p className="rubric-intro">説明を読む前に、何を応援し、誰にどんな物が届くかを比較するためのプレビューです。完成案ではなく、人の確認を受けるためのドラフトです。</p>
      <div className="brief-preview-grid">{briefs.map((brief, index) => <article key={brief.id} className={`brief-sheet ${index === 0 ? "lead" : ""}`}>
        <header><span>{brief.role}</span><small>{brief.status}</small></header><div className="brief-title"><span>BRAND CONCEPT</span><h3>{brief.title}</h3><p>{brief.line}</p></div>
        <dl><div><dt>問い</dt><dd>{brief.question}</dd></div><div><dt>インプット</dt><dd>{brief.input}</dd></div><div><dt>コンセプト</dt><dd>{brief.concept}</dd></div><div><dt>アウトプット</dt><dd>{brief.prototype}</dd></div></dl>
        <footer><span>確認したいこと</span><p>{brief.validation}</p></footer>
      </article>)}</div>
    </section>

    <section className="prototype-preview"><div className="section-heading"><div><span className="card-label">PAPER MOCK / NOT FINAL</span><h2>最初の10秒の、物の試作</h2></div><Sparkles size={20} /></div>
      <p>提出用の完成デザインではありません。誰が最初に何を手に取り、どう関係が始まるかを確かめるための紙モックです。</p>
      <div className="prototype-preview-grid">{prototypePreviews.map((item) => <article key={item.id} className={item.id === "entry-flag" ? "entry-flag-mock" : "seat-tag-mock"}><div className="mock-meta"><span>{item.status}</span><h3>{item.title}</h3></div><div className="mock-object"><div className="mock-front">{item.front}</div><div className="mock-inside">{item.inside}</div></div><p>{item.interaction}</p></article>)}</div>
    </section>

    <section className="review-request"><div className="section-heading"><div><span className="card-label">REVIEW REQUEST / WAITING FOR HUMAN INPUT</span><h2>次に、人へ確認したいこと</h2></div><MessageCircle size={20} /></div>
      <p>この回答はまだ取得していません。回答が来たら、誰から・いつ・何と言われたかを次のループの INPUT として記録します。</p>
      <div className="review-question-grid">{reviewQuestions.map((item, index) => <article key={item.question}><span>{String(index + 1).padStart(2, "0")} / {item.candidate}</span><h3>{item.question}</h3><p><b>回答で変えること：</b>{item.whyItMatters}</p></article>)}</div>
    </section>

    <section className="archive-reading"><div className="section-heading"><div><span className="card-label">PUBLIC ARCHIVE / RESEARCH NOTE</span><h2>過去公開資料から読んだこと</h2></div><ExternalLink size={20} /></div>
      <div className="archive-reading-grid">{archiveObservations.map((item) => <article key={item.observation}><h3>{item.observation}</h3><p><b>今回への反映：</b>{item.implication}</p><div>{item.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><ExternalLink size={13} />{source.name}</a>)}</div></article>)}</div>
    </section>

    <section className="candidate-section"><div className="section-heading"><div><span className="card-label">CURRENT PORTFOLIO / ALL GENERATED DIRECTIONS</span><h2>比較に残している候補</h2></div><span className="score-badge">{candidates.length} BRANCHES</span></div>
      <p className="rubric-intro">点数は比較の補助です。人が残したいと思う案は、低得点でもワイルドカードとして保持します。各案の詳細な生成結果はハーネスで追えます。</p>
      <div className="candidate-grid">{candidates.map(({ branch, loop, total }) => <article key={branch.id} className={branch.id === active.id ? "candidate-card selected" : "candidate-card"}><div className="candidate-card-top"><span>{branch.status}</span><b>{total} / {maxScore}</b></div><h3>{branch.title}</h3><p className="candidate-line">{branch.premise}</p><p>{loop.diagnosis}</p><small>Loop #{loop.id} / {loop.evidence ?? "仮説"}</small></article>)}</div>
    </section>

    <section id="trace" className="report-log"><div className="section-heading"><div><span className="card-label">RUN LOG / TRACEABILITY</span><h2>この生成の記録</h2></div><Clock3 size={20} /></div>
      <div className="log-grid"><article><span>GENERATED</span><strong>{latest.date}<br />Loop #{latest.id}</strong><p>{latest.phase}。{latest.model ?? "Terra"} を使用：{latest.modelReason ?? "理由未記録"}</p></article><article><span>INPUTS</span><strong>{latest.input.length} 件の入力<br />{sources.length} 件の参照情報</strong><p>出力だけでなく、前ループの診断と公開情報を入力として残しています。</p></article><article><span>FEEDBACK</span><strong>{latest.evidence ?? "仮説"}</strong><p>現時点では直接の人のフィードバックは未記録です。取得後は次のループの入力として追記します。</p></article></div>
      <div className="feedback-strip"><MessageCircle size={18} /><p><b>今回の辛口レビュー：</b>{latest.diagnosis}</p></div>
    </section>

    <section className="decision-card"><div><span className="card-label">SCORING / NOT THE ANSWER</span><h2>今回の採点</h2></div><ul>{scoreLabels.map(({ key, label, max }) => <li key={key}><Check size={17} />{label}：{latest.scores[key]} / {max}</li>)}</ul></section>
    <section className="sources-section compact-sources"><div><span className="card-label">SOURCES / CHECKED {latest.date}</span><h2>この案が参照した情報</h2></div>{sources.length ? sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span><ExternalLink size={17} /> {source.name}<br /><small>{source.usedFor}</small></span><ArrowUpRight size={17} /></a>) : <p>このループでは新しい公開情報を使わず、前回の診断を検証入力にしています。</p>}</section>
  </div>;
}
