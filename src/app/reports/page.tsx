import {
  ArrowUpRight,
  Check,
  Clock3,
  FileText,
  Lightbulb,
  MessageCircle,
  Quote,
  Sparkles,
} from "lucide-react";

export default function Reports() {
  return (
    <div className="page-shell report-page">
      <div className="report-top">
        <div>
          <div className="eyebrow">
            <span /> FINAL OUTPUT / DRAFT 01
          </div>
          <h1>
            応援の余白を、<em>手渡す。</em>
          </h1>
          <p>
            Harness Loop #002
            が生成した、チーム共有用の最終アウトプット・プレビュー。
          </p>
        </div>
        <button className="ghost-button">
          <FileText size={17} /> レポートを書き出す
        </button>
      </div>
      <section className="report-hero-card">
        <div className="report-number">01</div>
        <div>
          <span className="card-label">BRAND CONCEPT PROTOTYPE</span>
          <h2>
            「がんばれ」を言わない
            <br />
            応援のインフラ。
          </h2>
          <p>
            誰かを「励ます」ことに気疲れする人と、応援を受け取る余裕がない人のあいだに、言葉を使わない小さな支援を流通させる。
          </p>
        </div>
        <div className="report-meta">
          <span>THEME</span>
          <strong>応援</strong>
          <span>STATUS</span>
          <strong>要検証</strong>
        </div>
      </section>
      <section className="report-grid">
        <article className="paper-card">
          <div className="paper-icon">
            <Quote size={19} />
          </div>
          <span className="card-label">INSIGHT</span>
          <h3>
            応援したい。でも、
            <br />
            相手の負担にはなりたくない。
          </h3>
          <p>
            「がんばれ」は善意である一方、状況によっては期待や圧力にもなる。だから人は、気持ちがあっても応援を保留する。
          </p>
        </article>
        <article className="paper-card accent-paper">
          <div className="paper-icon">
            <Lightbulb size={19} />
          </div>
          <span className="card-label">VALUE PROPOSITION</span>
          <h3>
            言葉ではなく、
            <br />
            “余白”を届ける。
          </h3>
          <p>
            相手のペースを奪わず、存在をそっと肯定する行為を、日常のなかで選びやすくする。
          </p>
        </article>
        <article className="paper-card">
          <div className="paper-icon">
            <Sparkles size={19} />
          </div>
          <span className="card-label">BRAND PROMISE</span>
          <h3>
            応援が、
            <br />
            プレッシャーにならない世界。
          </h3>
          <p>応援する人にも、される人にも、無理のない距離をデザインする。</p>
        </article>
      </section>
      <section className="report-log">
        <div className="section-heading">
          <div>
            <span className="card-label">RUN LOG / TRACEABILITY</span>
            <h2>この案ができるまで</h2>
          </div>
          <Clock3 size={20} />
        </div>
        <div className="log-grid">
          <article>
            <span>GENERATED</span>
            <strong>
              2026.08.26
              <br />
              今夜 · Loop #002
            </strong>
            <p>公式ブリーフと既存ナレッジを入力に、コンセプト仮説を再生成。</p>
          </article>
          <article>
            <span>INPUTS</span>
            <strong>
              公式開催概要
              <br />
              過去の議事録 9件
            </strong>
            <p>
              テーマ要件、締切、既存の「見守る／褒める／仲間」の発想を参照。
            </p>
          </article>
          <article>
            <span>FEEDBACK</span>
            <strong>プロジェクトオーナー</strong>
            <p>「審査で見られる観点を先に考え、ハーネスの採点基準にしたい」</p>
          </article>
        </div>
        <div className="feedback-strip">
          <MessageCircle size={18} />
          <p>
            <b>反映したこと：</b>
            単発のアイデアを出すのではなく、INPUT・CONCEPT・OUTPUT・STORY
            の4軸で弱点を見つけ、次の調査に返すループへ変更。
          </p>
        </div>
      </section>
      <section className="concept-preview">
        <div>
          <span className="card-label">EXPERIENCE SKETCH</span>
          <h2>余白便</h2>
          <p>
            相手の「いま、受け取れる温度」を選び、言葉にならない応援をそっと届ける体験。既存案の「見守る」「褒める」という知見を、人との距離の設計へ広げる。
          </p>
          <a href="/docs" className="text-link">
            参照した過去ナレッジ <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="postcard">
          <span>FOR YOU</span>
          <p>
            今日は、
            <br />
            返信しなくていいよ。
          </p>
          <i>余白便</i>
        </div>
      </section>
      <section className="decision-card">
        <div>
          <span className="card-label">VALIDATION NEXT</span>
          <h2>明日、確かめること</h2>
        </div>
        <ul>
          <li>
            <Check size={17} />
            「言葉を使わない応援」を受け取りたい瞬間はいつか
          </li>
          <li>
            <Check size={17} />
            応援がプレッシャーになる境界はどこか
          </li>
          <li>
            <Check size={17} />
            物・場・サービスのどれが最も自然に余白をつくれるか
          </li>
        </ul>
      </section>
    </div>
  );
}
