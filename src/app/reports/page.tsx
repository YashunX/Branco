import { ArrowUpRight, Clock3, ExternalLink, FileText, MessageCircle, Sparkles } from "lucide-react";
import { harness, type ArchiveObservation, type PreScreenBrief, type PrototypePreview, type ReviewQuestion } from "../../lib/harness";

const storySteps = ["背景", "そこで起きること", "私たちの応援の定義"];

export default function Reports() {
  const briefs: PreScreenBrief[] = harness.preScreenBriefs;
  const prototypes: PrototypePreview[] = harness.prototypePreviews;
  const reviewQuestions: ReviewQuestion[] = harness.reviewQuestions;
  const archiveObservations: ArchiveObservation[] = harness.archiveObservations;

  return <div className="page-shell report-page story-report">
    <header className="story-hero">
      <div className="eyebrow"><span /> BRANCO! PRE-SCREEN / STORY DRAFT / 2026.08.26</div>
      <h1>初めての声援に、<em>正解をつくらない。</em></h1>
      <p>これは過去の候補を引き継がず、白紙から始めた四本のストーリーである。応援したいのに輪へ入れない人、応援される木とその近くで日常を担う人、頼りたいのに頼みを言葉にできない人、そして応援した目標が終わる人。それぞれの最初と終わりの瞬間から考え、一案は辛口評価で保留にした。</p>
      <div className="story-hero-note"><b>いまの仮説</b><span>応援は、声を大きくする前に、誰かや何かとの関係を少しだけ結び直すことから始まるかもしれない。</span></div>
    </header>

    <section className="story-premise">
      <span className="card-label">WHY WE REDEFINED SUPPORT</span>
      <h2>応援は、誰かを動かす前に、<br />関係の偏りをほどくことからも始まる。</h2>
      <p>作法を知る人と知らない人。木陰を受け取る人と落葉を引き受ける人。頼ってよいと言われても頼みを作れない人。叶わなかった目標を説明する人と、応援を置いていく人。私たちは、応援の前と後にある小さな偏りを、個人の気遣いや善意だけで埋めない入口を探している。</p>
    </section>

    <section className="story-candidate-section">
      <div className="section-heading"><div><span className="card-label">ZERO-BASE HYPOTHESES / FIRST DRAFTS</span><h2>四つの応援の物語</h2></div><Sparkles size={20} /></div>
      <p className="story-section-intro">公開情報を出発点にした四案。根拠と仮説を分け、背景から最初の体験までを同じ順番で記す。人の確認が入るまでは、どれも完成案として扱わない。最初の一案は、自己申告と星群の演出を不採用にして保留中である。</p>
      <div className="story-candidates">
        {briefs.map((brief, index) => {
          const prototype = prototypes[index];
          const steps = [brief.background, brief.tension, brief.redefinition];
          return <article className={`story-candidate ${index === 0 ? "primary-story" : index === 1 ? "secondary-story" : "tertiary-story"}`} key={brief.id}>
            <header><span>{brief.role}</span><small>{brief.status}</small></header>
            <div className="story-title"><h3>{brief.title}</h3><p>{brief.line}</p></div>
            <div className="story-flow">{steps.map((step, stepIndex) => <div key={storySteps[stepIndex]}><span>0{stepIndex + 1}</span><section><b>{storySteps[stepIndex]}</b><p>{step}</p></section></div>)}</div>
            <div className="story-scene"><span>最初の10秒</span><p>{brief.presentationScene}</p><div className="story-object"><div>{prototype.front}</div><div>{prototype.inside}</div></div><small>{prototype.interaction}</small></div>
            <div className="story-form-reason"><b>なぜ、この物なのか</b><p>{brief.whyThisForm}</p></div>
            <footer><b>まだ答えられていないこと</b><p>{brief.validation}</p></footer>
          </article>;
        })}
      </div>
    </section>

    <section className="story-memo" aria-labelledby="production-memo-title">
      <div className="section-heading"><div><span className="card-label">PRODUCTION MEMO / AFTER THE STORY</span><h2 id="production-memo-title">制作メモ</h2></div><Clock3 size={20} /></div>
      <p className="story-memo-intro">ここからは提出ストーリーを補う記録。本文の結論と混ぜずに、生成日時・人のフィードバックの有無・次に確認する問いを残す。</p>
      <div className="story-memo-facts">
        <article><span>今回の生成・更新</span><strong>{harness.updatedAt}<br />白紙化後 Loop #010</strong><p>公式が問う「応援の終わり」から四本目を発散した。未達・中止を美談や次のお願いに変えず、次の支援を求めない一度の返事として『未完の便り』を記録している。</p></article>
        <article><span>人からのフィードバック</span><strong>まだ未取得</strong><p>存在しない意見は補わない。先生・メンバーから受け取ったら、日時・相手・要旨・反映内容をここに追記する。</p></article>
        <article><span>このレポートの位置づけ</span><strong>プレ審査用<br />検証前ドラフト</strong><p>完成を装わず、どこが仮説なのかを明示したうえで、提出品質まで磨くための版。</p></article>
      </div>
      <div className="story-memo-questions"><div><span className="card-label">NEXT HUMAN CHECK</span><h3>次に、人の言葉で確かめること</h3></div><MessageCircle size={19} /></div>
      <div className="story-memo-question-grid">{reviewQuestions.map((item, index) => <article key={item.question}><span>{String(index + 1).padStart(2, "0")} / {item.candidate}</span><h3>{item.question}</h3><p><b>回答で変えること：</b>{item.whyItMatters}</p></article>)}</div>
    </section>

    <section className="story-sources"><div className="section-heading"><div><span className="card-label">SOURCES / WHAT WE ACTUALLY READ</span><h2>調査の根拠</h2></div><ExternalLink size={20} /></div>
      <div className="story-source-list"><a href="https://branddesigncontest.com/outline/" target="_blank" rel="noreferrer"><span><b>BranCo! 第15回 開催概要・応募要項</b><small>テーマ「応援」と、応援の始まり・終わりという問い</small></span><ArrowUpRight size={17} /></a><a href="https://branddesigncontest.com/faq/" target="_blank" rel="noreferrer"><span><b>BranCo! FAQ</b><small>インプット・コンセプト・アウトプット・プレゼン・一貫性という評価軸</small></span><ArrowUpRight size={17} /></a>{archiveObservations.flatMap((item) => item.sources).filter((source, index, sources) => sources.findIndex((other) => other.url === source.url) === index).map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span><b>{source.name}</b><small>今回の背景・仮説を考えるために確認した公開情報</small></span><ArrowUpRight size={17} /></a>)}</div>
    </section>

    <a href="/harness" className="story-harness-link"><FileText size={17} /> 生成・評価・分岐の全記録を見る</a>
  </div>;
}
