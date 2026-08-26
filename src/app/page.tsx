import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  FileText,
  Sparkles,
} from "lucide-react";

const timeline = [
  ["08/27", "プレ審査・チーム登録", "12:00", "next"],
  ["09/18", "結果発表 / Academy kickoff", "19:00", ""],
  ["10/21", "一次審査：動画・資料提出", "12:00", ""],
  ["12/15", "二次審査：資料提出", "12:00", ""],
  ["12/19", "二次審査プレゼン / 決勝", "東大駒場", ""],
];

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="eyebrow">
          <span /> BRANCO! 15TH / 2026
        </div>
        <div className="hero-head">
          <div>
            <h1>
              応援を、<em>つくりなおす。</em>
            </h1>
            <p>
              第15回
              BranCo!「応援」｜調査・発想・アウトプットをつなぐ、チームのワークスペース。
            </p>
          </div>
          <Link href="/research" className="primary-link">
            最新の調査を見る <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="hero-note">
          <Sparkles size={16} /> 白紙化後のハーネスループ
          #007：「ひとつ、たのむ」を、頼るための説明を一人で抱えない依頼カードとして発散しました。
        </div>
      </section>
      <section className="signal-grid">
        <article className="signal-card theme-card">
          <span className="card-label">THIS YEAR&apos;S THEME</span>
          <h2>応援</h2>
          <p>
            誰が、何を、どんな距離から支えるのか。変化する「応援」の意味を生活者から見つめ直す。
          </p>
          <Link href="/research#brief" className="text-link">
            公式ブリーフを読む <ArrowUpRight size={15} />
          </Link>
        </article>
        <article className="signal-card">
          <span className="card-label">IMMEDIATE DEADLINE</span>
          <div className="deadline">
            <strong>08.27</strong>
            <span>
              THU
              <br />
              12:00
            </span>
          </div>
          <p>チームメンバー登録・プレ審査書類提出。締切まであとわずかです。</p>
          <span className="urgency">
            <Clock3 size={14} /> NEXT MILESTONE
          </span>
        </article>
        <article className="signal-card">
          <span className="card-label">HARNESS STATUS</span>
          <div className="run-status">
            <i /> RESEARCH SYNTHESIZED
          </div>
          <p>
            旧生成物は除去済み。ゼロベースの3案を記録し、各案を辛口評価から改善します。
          </p>
          <Link href="/reports" className="text-link">
            生成結果をプレビュー <ArrowUpRight size={15} />
          </Link>
        </article>
      </section>
      <section className="content-split">
        <div className="section-block">
          <div className="section-heading">
            <div>
              <span className="card-label">THE ROUTE</span>
              <h2>コンテストまでの航路</h2>
            </div>
            <CalendarDays size={21} />
          </div>
          <div className="timeline">
            {timeline.map(([date, title, meta, state]) => (
              <div className={`timeline-row ${state}`} key={date}>
                <strong>{date}</strong>
                <span>{title}</span>
                <small>{meta}</small>
              </div>
            ))}
          </div>
          <Link href="/research#schedule" className="text-link">
            日程と応募要項を確認 <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="section-block loop-block">
          <div className="section-heading">
            <div>
              <span className="card-label">IMPROVEMENT LOOP</span>
              <h2>今夜の生成フロー</h2>
            </div>
            <Compass size={21} />
          </div>
          <ol className="loop-list">
            <li>
              <b>01</b>
              <div>
                <strong>INPUT</strong>
                <span>公式ブリーフ・締切・過去受賞作を収集</span>
              </div>
              <CheckCircle2 size={17} />
            </li>
            <li>
              <b>02</b>
              <div>
                <strong>REFRAME</strong>
                <span>過去の知識は別保管し、結論を持ち込まず問いを立て直す</span>
              </div>
              <CheckCircle2 size={17} />
            </li>
            <li>
              <b>03</b>
              <div>
                <strong>CONCEPT</strong>
                <span>新しいブランド仮説を生成・比較</span>
              </div>
              <span className="now">NOW</span>
            </li>
            <li>
              <b>04</b>
              <div>
                <strong>OUTPUT</strong>
                <span>チームに見せる最終レポートへ編集</span>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="next-step">
        <div>
          <span className="card-label">NEXT ACTION</span>
          <h2>
            「応援」の調査を、
            <br />
            チームの言葉に変える。
          </h2>
        </div>
        <div className="next-links">
          <Link href="/research">
            <BookOpen size={18} /> 調査ログ
          </Link>
          <Link href="/reports">
            <FileText size={18} /> 最終レポート
          </Link>
        </div>
      </section>
    </div>
  );
}
