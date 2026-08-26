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
      <p>これは過去の候補を引き継がず、白紙から始めた一本目のストーリーである。私たちは、応援する対象ではなく、応援したいのに輪へ入れない人の最初の瞬間から考え始めた。</p>
      <div className="story-hero-note"><b>いまの仮説</b><span>初めての人が、作法を覚える前に自分の参加の距離を選べたら、応援はもっと早く始まるかもしれない。</span></div>
    </header>

    <section className="story-premise">
      <span className="card-label">WHY WE REDEFINED SUPPORT</span>
      <h2>応援は、正しく参加することではなく、<br />自分のまま参加できることからも始まる。</h2>
      <p>コールを知らない。常連の輪が見える。自分だけ浮きたくない。そんな最初の緊張を、応援する人の能力不足として扱わない。今日の距離を選べること自体を、応援の入口にできないかと考えた。</p>
    </section>

    <section className="story-candidate-section">
      <div className="section-heading"><div><span className="card-label">ZERO-BASE HYPOTHESIS / FIRST DRAFT</span><h2>一つ目の応援の物語</h2></div><Sparkles size={20} /></div>
      <p className="story-section-intro">公開情報を出発点にした一案目。根拠と仮説を分け、背景から最初の体験までを同じ順番で記す。人の確認が入るまでは、完成案として扱わない。</p>
      <div className="story-candidates">
        {briefs.map((brief, index) => {
          const prototype = prototypes[index];
          const steps = [brief.background, brief.tension, brief.redefinition];
          return <article className={`story-candidate ${index === 0 ? "primary-story" : "secondary-story"}`} key={brief.id}>
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
        <article><span>今回の生成・更新</span><strong>{harness.updatedAt}<br />白紙化後 Loop #001</strong><p>旧候補・旧モック・旧採点を除去し、公式情報と新規調査だけから、この一案を発散した。</p></article>
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
