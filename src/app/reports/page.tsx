import { ArrowUpRight, ExternalLink, FileText, Sparkles } from "lucide-react";
import { harness, type ArchiveObservation, type PreScreenBrief, type PrototypePreview } from "../../lib/harness";

const storySteps = ["背景", "そこで起きること", "私たちの応援の定義"];

export default function Reports() {
  const briefs: PreScreenBrief[] = harness.preScreenBriefs;
  const prototypes: PrototypePreview[] = harness.prototypePreviews;
  const archiveObservations: ArchiveObservation[] = harness.archiveObservations;

  return <div className="page-shell report-page story-report">
    <header className="story-hero">
      <div className="eyebrow"><span /> BRANCO! PRE-SCREEN / STORY DRAFT / 2026.08.26</div>
      <h1>応援を、<em>前へ進ませる言葉</em><br />だけにしない。</h1>
      <p>私たちは、応援を「頑張れと言うこと」から考え始めなかった。誰かが自分のペースで次の一歩を踏める状態を、どうつくれるかから考えた。</p>
      <div className="story-hero-note"><b>いまの結論</b><span>プレ審査では、異なる二つの仮説を残す。どちらも完成案ではなく、人の確認を受けるためのドラフトである。</span></div>
    </header>

    <section className="story-premise">
      <span className="card-label">WHY WE REDEFINED SUPPORT</span>
      <h2>応援は、相手を動かすことではなく、<br />相手が動ける余白を守ることでもある。</h2>
      <p>言葉を急がない。評価を足さない。誰かの経験を押しつけない。私たちはこの三つを出発点に、応援が始まる直前の二つの場面を選んだ。</p>
    </section>

    <section className="story-candidate-section">
      <div className="section-heading"><div><span className="card-label">TWO HYPOTHESES / NOT ONE CONCLUSION</span><h2>二つの応援の、二つの物語</h2></div><Sparkles size={20} /></div>
      <p className="story-section-intro">同じテーマから生まれた二案だが、解きたい緊張は異なる。読者が「どちらが正しいか」ではなく、「どちらの問いに手応えがあるか」を判断できるよう、同じ順番で記す。</p>
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

    <section className="story-sources"><div className="section-heading"><div><span className="card-label">SOURCES / WHAT WE ACTUALLY READ</span><h2>調査の根拠</h2></div><ExternalLink size={20} /></div>
      <div className="story-source-list"><a href="https://branddesigncontest.com/outline/" target="_blank" rel="noreferrer"><span><b>BranCo! 第15回 開催概要・応募要項</b><small>テーマ「応援」と、応援の始まり・終わりという問い</small></span><ArrowUpRight size={17} /></a><a href="https://branddesigncontest.com/faq/" target="_blank" rel="noreferrer"><span><b>BranCo! FAQ</b><small>インプット・コンセプト・アウトプット・プレゼン・一貫性という評価軸</small></span><ArrowUpRight size={17} /></a>{archiveObservations.flatMap((item) => item.sources).filter((source, index, sources) => sources.findIndex((other) => other.url === source.url) === index).map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span><b>{source.name}</b><small>過去公開資料のページ構成を確認した資料</small></span><ArrowUpRight size={17} /></a>)}</div>
    </section>

    <a href="/harness" className="story-harness-link"><FileText size={17} /> 生成・評価・分岐の全記録を見る</a>
  </div>;
}
