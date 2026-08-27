import { ArrowUpRight, Clock3, ExternalLink, FileText, MessageCircle, Sparkles } from "lucide-react";
import { harness, type ArchiveObservation, type PreScreenBrief, type PrototypePreview, type ReviewQuestion } from "../../lib/harness";

const storySteps = ["背景", "そこで起きること", "私たちの応援の定義"];
const generatedPreviews: Record<string, Pick<PrototypePreview, "front" | "inside" | "interaction">> = {
  "pet-evacuation-map": { front: "同行避難の地図", inside: "ペット飼養場所：屋外テント", interaction: "登録・首輪タグ・近隣への預かり依頼・SNS投稿を求めず、自治体が確認した受入れ条件と代替先を平時の地図で示す。" },
  "store-entry-card": { front: "段差：なし", inside: "入口幅：85cm", interaction: "事前連絡・介助依頼・登録・口コミを求めず、店が実測・更新する具体条件だけを入口に示す。" },
  "season-return": { front: "今年、記録が集まった季節", inside: "記録がない場所も、いなかったとは言えません。", interaction: "投稿数・バッジ・ランキング・招待を求めず、運営が検証後の季節の記録と限界を一度だけ返す。" },
  "heat-pause": { front: "涼んでから、入場する", inside: "15:00–15:40に入場できます", interaction: "体調申告・位置情報共有・到着報告・遅延証明を求めず、主催者が当日確認した避難先と入場時間の窓を先に渡す。" },
  "first-return-home": { front: "返納した日、ここからどこへ帰る？", inside: "まだ帰り方を決めない", interaction: "住所・家族同意・返納日・達成チェックを求めず、本人が選ぶ一回の帰り道か、次の相談先だけを置く。" },
  "silent-start": { front: "最初は、話さなくていい", inside: "今は話せない ／ 住まい", interaction: "氏名・住所・収入・詳細な事情を最初に求めず、窓口が静かな席や筆談・通訳、緊急確認の方法を本人と選ぶ。" },
  "unnamed-place": { front: "今日は、何もしないでここにいる", inside: "まだ決めない", interaction: "活動選択・出席・面談・マッチングを求めず、選ばないこと、途中で変えること、理由を言わず帰ることを認める。" },
  "quiet-collection": { front: "いつもの収集", inside: "出せない日は、ここへ置くだけ", interaction: "専用袋・見守り札・近隣通知・収集回数の公開を求めず、自治体が通常収集と福祉連携の境界を担う。" },
  "protected-break": { front: "休憩中は、ここに置く", inside: "電話：A　来客：B", interaction: "休憩理由・位置共有・休憩中の連絡当番・残業での穴埋めを求めず、チームが対応の行き先を先に持つ。" },
  "museum-first": { front: "見る前に、選べる", inside: "音声案内 ／ 静かな時間", interaction: "障害名・診断書・予約・利用履歴・感想投稿を求めず、施設が鑑賞の選択肢と利用条件を先に渡す。" },
  "outside-shelter": { front: "避難所の外にも、今日の受け取り", inside: "水：13–16時 ／ 在庫の限り ／ 次の更新：18時", interaction: "避難所外にいる理由・位置情報・世帯登録・受け取り写真・SNS投稿を求めず、自治体が終了時の確認先と移動の相談も先に渡す。" },
  "leave-without-explaining": { front: "今日は、先に帰る", inside: "理由は書かない ／ この連絡は一度きり", interaction: "家族の病名・介護内容・証明書・帰宅後の報告・利用回数の集計・クラス内共有を求めず、学校が安全確認の条件と相談先を先に渡す。" },
  "treatment-window": { front: "治療のために、言い直さない", inside: "時間をずらす ／ まず相談する", interaction: "診断名の必須入力・上司への病歴説明・同僚への一斉通知・利用回数のランキングを求めず、職場が選択肢と情報の境界を先に渡す。" },
  "reading-shape": { front: "読める形を、先に選ぶ", inside: "音で聞く ／ 文字を変える", interaction: "障害名の申告・診断書・読書履歴の共有・利用回数の記録・感想投稿を求めず、図書館が読み方と利用条件を先に渡す。" },
  "language-first": { front: "話す言葉を、先に選ぶ", inside: "英語 ／ 住まい ／ 15時まで", interaction: "国籍の申告・在留カードの撮影・住所の記入・相談履歴の共有・同伴者の登録を求めず、窓口が言語と利用条件を先に渡す。" },
  "team-can-rest": { front: "当番にも、休む場所がある", inside: "実施条件 ／ 中止条件", interaction: "休む理由・代役探し・固定の緊急当番・欠席回数の集計を求めず、チームが実施条件・中止条件・次の確認時刻を先に持つ。" },
  "reply-after-speaking": { front: "言ったあと、どうなったか", inside: "次の確認：9月26日", interaction: "意見ごとの受付番号・採否・賛同数を求めず、運営が読む期限と全体への返答の場を先に示す。" },
  "skip-without-explaining": { front: "受け取らない、を選べる", inside: "米 2kg ／ 9月末まで", interaction: "理由・家族構成・健康状態を求めず、品目・量・期限・受取時間・確認時刻を先に示し、断る選択を利用資格の判断に使わない。" },
};

export default function Reports() {
  const briefs: PreScreenBrief[] = harness.preScreenBriefs;
  const activeBriefs = briefs.filter((brief) => brief.status !== "保留 / 再発散待ち");
  const shortlist = activeBriefs.slice(-6).reverse();
  const parkedBriefs = briefs.filter((brief) => brief.status === "保留 / 再発散待ち");
  const prototypes: PrototypePreview[] = harness.prototypePreviews;
  const prototypeByBriefId = Object.fromEntries(prototypes.map((prototype) => [prototype.id.replace(/-preview$/, ""), prototype]));
  const reviewQuestions: ReviewQuestion[] = harness.reviewQuestions;
  const archiveObservations: ArchiveObservation[] = harness.archiveObservations;
  const loopSources = harness.branches.flatMap((branch) => branch.loops.flatMap((loop) => loop.sources));
  const unverifiedBranchIds = new Set(harness.branches
    .filter((branch) => Boolean(branch.loops.at(-1)))
    .map((branch) => branch.id));
  const sources = [...archiveObservations.flatMap((item) => item.sources), ...loopSources]
    .filter((source, index, items) => items.findIndex((other) => other.url === source.url) === index);

  return <div className="page-shell report-page story-report">
    <header className="story-hero">
      <div className="eyebrow"><span /> BRANCO! PRE-SCREEN / STORY DRAFT / 2026.08.27</div>
      <h1>助けを求める前に、<em>応援は届くか。</em></h1>
      <p>これは過去の候補を引き継がず、白紙から始めた{briefs.length}本のストーリーである。生活のなかで応援が必要になる最初の瞬間を公開情報から探し、背景、そこで起きる緊張、応援の定義、最初の体験までを一本ずつ組み立てた。一案は辛口評価で保留にし、改善の伸びが止まった枝は別の生活場面へ移している。</p>
      <div className="story-hero-note"><b>いまの仮説</b><span>応援は、声を大きくする前に、誰かや何かとの関係を少しだけ結び直すことから始まるかもしれない。</span></div>
    </header>

    <section className="story-premise">
      <span className="card-label">WHY WE REDEFINED SUPPORT</span>
      <h2>応援は、誰かを動かす前に、<br />関係の偏りをほどくことからも始まる。</h2>
      <p>作法を知る人と知らない人。木陰を受け取る人と落葉を引き受ける人。頼ってよいと言われても頼みを作れない人。叶わなかった目標を説明する人と、応援を置いていく人。未完成を抱える人と、それを評価してしまいそうな人。私たちは、応援の前と後にある小さな偏りを、個人の気遣いや善意だけで埋めない入口を探している。</p>
    </section>

    <section className="story-shortlist" aria-labelledby="shortlist-title">
      <div className="section-heading"><div><span className="card-label">HUMAN CHECK SHORTLIST</span><h2 id="shortlist-title">今、人に見せる6案</h2></div><MessageCircle size={20} /></div>
      <p>AI内の改善で閉じず、次に人の言葉で確かめる候補を直近順に置く。</p>
      <div>{shortlist.map((brief) => <article key={brief.id}><span>{brief.role}</span><h3>{brief.title}</h3><p>{brief.line}</p><small>{brief.validation}</small></article>)}</div>
    </section>

    <section className="story-candidate-section">
      <div className="section-heading"><div><span className="card-label">ZERO-BASE HYPOTHESES / FIRST DRAFTS</span><h2>{briefs.length}の応援の物語</h2></div><Sparkles size={20} /></div>
      <p className="story-section-intro">公開情報を出発点にした{briefs.length}案。根拠と仮説を分け、背景から最初の体験までを同じ順番で記す。人の確認が入るまでは、どれも完成案として扱わない。最新案は、断った理由、家族構成、健康状態、受取履歴を入口から外し、品目・量・期限・受取時間・確認時刻を先に持つ形へ絞った。</p>
      <div className="story-candidates">
        {activeBriefs.map((brief) => {
          const index = briefs.findIndex((item) => item.id === brief.id);
          const prototype = prototypeByBriefId[brief.id] ?? generatedPreviews[brief.id] ?? { front: "プレビュー準備中", inside: brief.title, interaction: "この案の最初の体験を、次のループで具体化します。" };
          const steps = [brief.background, brief.tension, brief.redefinition];
          return <article className={`story-candidate ${index === 0 ? "primary-story" : index === 1 ? "secondary-story" : index === 2 || index === 3 ? "tertiary-story" : "quaternary-story"}`} key={brief.id}>
            <header><span>{brief.role}</span><small>{unverifiedBranchIds.has(brief.id) ? "AI内改善 / 人の確認待ち" : brief.status}</small></header>
            <div className="story-title"><h3>{brief.title}</h3><p>{brief.line}</p></div>
            <div className="story-flow">{steps.map((step, stepIndex) => <div key={storySteps[stepIndex]}><span>0{stepIndex + 1}</span><section><b>{storySteps[stepIndex]}</b><p>{step}</p></section></div>)}</div>
            <div className="story-scene"><span>最初の10秒</span><p>{brief.presentationScene}</p><div className="story-object"><div>{prototype.front}</div><div>{prototype.inside}</div></div><small>{prototype.interaction}</small></div>
            <div className="story-form-reason"><b>なぜ、この物なのか</b><p>{brief.whyThisForm}</p></div>
            <footer><b>まだ答えられていないこと</b><p>{brief.validation}</p></footer>
          </article>;
        })}
      </div>
      {parkedBriefs.length > 0 && <p className="story-section-intro">保留中：{parkedBriefs.map((brief) => `${brief.title}（${brief.status}）`).join(" / ")}</p>}
    </section>

    <section className="story-memo" aria-labelledby="production-memo-title">
      <div className="section-heading"><div><span className="card-label">PRODUCTION MEMO / AFTER THE STORY</span><h2 id="production-memo-title">制作メモ</h2></div><Clock3 size={20} /></div>
      <p className="story-memo-intro">ここからは提出ストーリーを補う記録。本文の結論と混ぜずに、生成日時・人のフィードバックの有無・次に確認する問いを残す。</p>
      <div className="story-memo-facts">
        <article><span>今回の生成・更新</span><strong>{harness.updatedAt}<br />白紙化後 Loop #054</strong><p>第三十一枝『受け取らない、を選べる』を辛口評価して改善した。断った理由や受取履歴を捨て、品目・量・期限・受取時間・確認時刻を先に持つ形へ改めた。</p></article>
        <article><span>人からのフィードバック</span><strong>まだ未取得</strong><p>存在しない意見は補わない。先生・メンバーから受け取ったら、日時・相手・要旨・反映内容をここに追記する。</p></article>
        <article><span>このレポートの位置づけ</span><strong>プレ審査用<br />検証前ドラフト</strong><p>完成を装わず、どこが仮説なのかを明示したうえで、提出品質まで磨くための版。</p></article>
      </div>
      <div className="story-memo-questions"><div><span className="card-label">NEXT HUMAN CHECK</span><h3>次に、人の言葉で確かめること</h3></div><MessageCircle size={19} /></div>
      <div className="story-memo-question-grid">{reviewQuestions.map((item, index) => <article key={item.question}><span>{String(index + 1).padStart(2, "0")} / {item.candidate}</span><h3>{item.question}</h3><p><b>回答で変えること：</b>{item.whyItMatters}</p></article>)}</div>
    </section>

    <section className="story-sources"><div className="section-heading"><div><span className="card-label">SOURCES / WHAT WE ACTUALLY READ</span><h2>調査の根拠</h2></div><ExternalLink size={20} /></div>
      <div className="story-source-list"><a href="https://branddesigncontest.com/outline/" target="_blank" rel="noreferrer"><span><b>BranCo! 第15回 開催概要・応募要項</b><small>テーマ「応援」と、応援の始まり・終わりという問い</small></span><ArrowUpRight size={17} /></a><a href="https://branddesigncontest.com/faq/" target="_blank" rel="noreferrer"><span><b>BranCo! FAQ</b><small>インプット・コンセプト・アウトプット・プレゼン・一貫性という評価軸</small></span><ArrowUpRight size={17} /></a>{sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span><b>{source.name}</b><small>今回の背景・仮説を考えるために確認した公開情報</small></span><ArrowUpRight size={17} /></a>)}</div>
    </section>

    <a href="/harness" className="story-harness-link"><FileText size={17} /> 生成・評価・分岐の全記録を見る</a>
  </div>;
}
