import {
  ArrowUpRight,
  Check,
  Clock3,
  ExternalLink,
  FileText,
  Lightbulb,
  MessageCircle,
  Quote,
  Sparkles,
} from "lucide-react";

const candidates = [
  {
    name: "拍手のあと",
    lens: "応援の終わり",
    line: "終わった挑戦にも、拍手を残す。",
    score: "78 / 100",
    note: "公式ブリーフの『応援はどのように終わるのか』を正面から扱う。",
    state: "次へ進める",
  },
  {
    name: "応援の留守電",
    lens: "返事不要の支援",
    line: "言葉を、相手の都合で受け取れるようにする。",
    score: "72 / 100",
    note: "優しいが、既存のメッセージサービスとの差が弱い。",
    state: "保留",
  },
  {
    name: "おかえり観戦席",
    lens: "再挑戦",
    line: "失敗から戻る人のために、席をあたためる。",
    score: "70 / 100",
    note: "感情は強いが、最初の利用場面を絞る必要がある。",
    state: "保留",
  },
  {
    name: "目立たない旗",
    lens: "見られない応援",
    line: "期待されるほど、ひとりになれる。",
    score: "67 / 100",
    note: "パフォーマーの負荷への視点は魅力。体験の設計が未解決。",
    state: "ワイルドカード",
  },
  {
    name: "ひとりぶんの客席",
    lens: "自分を応援する",
    line: "誰にも見せない達成に、観客をつくる。",
    score: "65 / 100",
    note: "過去の自己肯定感ナレッジに近く、既視感を越えられていない。",
    state: "差し戻し",
  },
  {
    name: "応援の返却日",
    lens: "支援の循環",
    line: "受け取った応援を、いつか誰かへ返す。",
    score: "63 / 100",
    note: "善意の循環はあるが、義務感に転ぶリスクが高い。",
    state: "差し戻し",
  },
];

export default function Reports() {
  return (
    <div className="page-shell report-page">
      <div className="report-top">
        <div>
          <div className="eyebrow">
            <span /> HARNESS LOOP #003 / 2026.08.26
          </div>
          <h1>
            終わった挑戦にも、<em>拍手を残す。</em>
          </h1>
          <p>
            公式ブリーフからゼロベースで6案を生成した発散回の記録。以後の改善履歴はハーネスで継続しています。
          </p>
        </div>
        <a href="/harness" className="ghost-button">
          <FileText size={17} /> 最新ループを見る
        </a>
      </div>

      <section className="report-hero-card">
        <div className="report-number">03</div>
        <div>
          <span className="card-label">SELECTED CONCEPT / DRAFT</span>
          <h2>
            拍手のあと
            <br />
            挑戦の終わりを、ひとりにしない。
          </h2>
          <p>
            受験、活動休止、閉店、プロジェクト終了。応援は成功の瞬間には集まるが、終わったあとの人には届きにくい。
            「拍手のあと」は、応援する側が成果ではなく挑戦の時間をたたえ、受け取る側が次へ進むための小さな区切りをつくるブランド構想です。
          </p>
        </div>
        <div className="report-meta">
          <span>THEME</span>
          <strong>応援</strong>
          <span>STATUS</span>
          <strong>仮説検証へ</strong>
        </div>
      </section>

      <section className="report-grid">
        <article className="paper-card">
          <div className="paper-icon">
            <Quote size={19} />
          </div>
          <span className="card-label">INPUT / HYPOTHESIS</span>
          <h3>
            応援の空白は、
            <br />
            成功のあとではなく終わりのあとにある。
          </h3>
          <p>
            挑戦が終わると、周囲は次の話題へ移る。本人だけが、努力した時間の置き場所を失う。これは要検証の仮説であり、まず当事者の具体的な場面を確かめる。
          </p>
        </article>
        <article className="paper-card accent-paper">
          <div className="paper-icon">
            <Lightbulb size={19} />
          </div>
          <span className="card-label">CONCEPT</span>
          <h3>
            応援を、
            <br />
            “結果への賛辞”から解放する。
          </h3>
          <p>
            勝敗や継続の可否ではなく、「そこに向かった時間」を互いに認める。応援の終わりを、関係の終わりではなく次の距離を選び直す儀式にする。
          </p>
        </article>
        <article className="paper-card">
          <div className="paper-icon">
            <Sparkles size={19} />
          </div>
          <span className="card-label">OUTPUT / FIRST SKETCH</span>
          <h3>
            挑戦の終わりに届く、
            <br />
            30秒の拍手と一枚の記録。
          </h3>
          <p>
            仲間が「何を見ていたか」を一言ずつ残し、本人は次の行き先を宣言しなくてよい。デジタルの記録と、手渡せる小さな紙の両方で体験を設計する。
          </p>
        </article>
      </section>

      <section className="candidate-section">
        <div className="section-heading">
          <div>
            <span className="card-label">ZERO-BASED DIVERGENCE / 6 DIRECTIONS</span>
            <h2>今回生成した全案</h2>
          </div>
          <span className="score-badge">1 SELECTED</span>
        </div>
        <p className="rubric-intro">
          点数は比較の補助です。低得点でも、審査の外側で強い可能性がある案はワイルドカードとして残します。
        </p>
        <div className="candidate-grid">
          {candidates.map((candidate, index) => (
            <article key={candidate.name} className={index === 0 ? "candidate-card selected" : "candidate-card"}>
              <div className="candidate-card-top">
                <span>{candidate.lens}</span>
                <b>{candidate.score}</b>
              </div>
              <h3>{candidate.name}</h3>
              <p className="candidate-line">{candidate.line}</p>
              <p>{candidate.note}</p>
              <small>{candidate.state}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="trace" className="report-log">
        <div className="section-heading">
          <div>
            <span className="card-label">RUN LOG / TRACEABILITY</span>
            <h2>このループの記録</h2>
          </div>
          <Clock3 size={20} />
        </div>
        <div className="log-grid">
          <article>
            <span>GENERATED</span>
            <strong>
              2026.08.26
              <br />
              Loop #003
            </strong>
            <p>既存のコンセプトを答えにせず、公式ブリーフから6方向へ発散。</p>
          </article>
          <article>
            <span>INPUTS</span>
            <strong>
              公式開催概要
              <br />
              過去ナレッジ 9枚
            </strong>
            <p>公式の問い「応援はどのようにはじまり、そして終わるのか」を核に使用。</p>
          </article>
          <article>
            <span>FEEDBACK</span>
            <strong>プロジェクトオーナー</strong>
            <p>採点に縛られず、プレ審査では多様な案を残す。人が見てよいと思う案を大切にする。</p>
          </article>
        </div>
        <div className="feedback-strip">
          <MessageCircle size={18} />
          <p>
            <b>辛口レビュー：</b>
            「拍手のあと」は問いの新しさが強い一方、まだ“誰がいつ使うか”が曖昧。次ループでは、活動を終えた学生団体・受験・閉店の3場面を比較し、最初の一場面を決める。
          </p>
        </div>
      </section>

      <section className="concept-preview">
        <div>
          <span className="card-label">EXPERIENCE SKETCH / NOT FINAL</span>
          <h2>拍手のあと</h2>
          <p>
            終わったことを、すぐ「次」へ回収しない。仲間が30秒だけ拍手を送り、ひとりひとりが“見ていたあなたの時間”を一行で残す。受け取る人は返信も、次の目標も求められない。
          </p>
          <a href="/docs" className="text-link">
            参照した過去ナレッジ <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="postcard">
          <span>AFTER THE APPLAUSE</span>
          <p>
            終わったことも、
            <br />
            ちゃんと見ていたよ。
          </p>
          <i>拍手のあと</i>
        </div>
      </section>

      <section className="decision-card">
        <div>
          <span className="card-label">VALIDATION NEXT</span>
          <h2>次に確かめること</h2>
        </div>
        <ul>
          <li>
            <Check size={17} />
            挑戦が終わった直後、本人が「応援されなかった」と感じるのはどんな瞬間か
          </li>
          <li>
            <Check size={17} />
            応援する側は、なぜ終わった挑戦に言葉をかけにくいのか
          </li>
          <li>
            <Check size={17} />
            受験・学生団体・小さな事業のうち、最初の体験として最も切実なのはどれか
          </li>
        </ul>
      </section>

      <section className="sources-section compact-sources">
        <div>
          <span className="card-label">SOURCE / CHECKED 2026.08.26</span>
          <h2>今回の調査根拠</h2>
        </div>
        <a href="https://branddesigncontest.com/outline/" target="_blank" rel="noreferrer">
          <span>
            <ExternalLink size={17} /> BranCo! 第15回 開催概要・応募要項
            <br />
            <small>テーマ「応援」と「応援はどのようにはじまり、そして終わるのか」という問いを参照</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
      </section>
    </div>
  );
}
