import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Search,
  Users,
} from "lucide-react";

const schedule = [
  ["07.08", "ブランドデザインレクチャー / チーム組み"],
  ["08.04", "説明会 / チーム組み"],
  ["08.27", "チーム登録・プレ審査書類提出（正午）"],
  ["09.18", "プレ審査結果・Academy kickoff"],
  ["10.21", "一次審査：動画・資料提出（正午）"],
  ["11.06", "一次審査結果・懇親イベント"],
  ["12.15", "二次審査：資料提出（正午）"],
  ["12.19", "二次審査プレゼン・決勝（東大駒場）"],
];

export default function Research() {
  return (
    <div className="page-shell research-page">
      <div className="research-title">
        <div>
          <div className="eyebrow">
            <span /> RESEARCH LOG / 2026.08.26
          </div>
          <h1>
            テーマを読む。
            <br />
            <em>問いを見つける。</em>
          </h1>
        </div>
        <div className="source-pill">
          <Search size={16} /> 公式情報を確認済み
        </div>
      </div>
      <section id="brief" className="brief-card">
        <span className="card-label">OFFICIAL BRIEF — 15TH BRANCO!</span>
        <h2>テーマ：応援</h2>
        <p>
          スポーツの熱狂、クラウドファンディング、推し活、AIとのやりとりまで。「応援」は広がり、多様化しています。一方で「がんばれ」は、ときに相手を追い込む言葉にもなりうる。現代における応援の課題と可能性を、独自の調査から見出し、具体的な商品・サービスのブランドへ落とし込むことが求められています。
        </p>
        <a
          href="https://branddesigncontest.com/outline/"
          target="_blank"
          rel="noreferrer"
          className="official-link"
        >
          公式の開催概要・応募要項 <ExternalLink size={15} />
        </a>
      </section>
      <section className="research-columns">
        <div className="research-section">
          <span className="card-label">WHAT THE CONTEST ASKS</span>
          <h2>リボン思考で進める</h2>
          <div className="ribbon">
            <div>
              <b>INPUT</b>
              <span>調べる</span>
            </div>
            <i />
            <div>
              <b>CONCEPT</b>
              <span>考える</span>
            </div>
            <i />
            <div>
              <b>OUTPUT</b>
              <span>つくる</span>
            </div>
          </div>
          <p>
            BranCo!
            はチームでテーマを多面的に調べ、本質を考え、新しい商品・サービスのブランドをつくるコンテスト。対象は大学生・大学院生・高専4・5年生、1チーム3〜6名です。
          </p>
        </div>
        <div className="research-section">
          <span className="card-label">RESEARCH TAKEAWAYS</span>
          <h2>今回の設計示唆</h2>
          <ol className="takeaway-list">
            <li>
              <b>01</b>
              <span>応援する側／される側、両方の感情を扱う。</span>
            </li>
            <li>
              <b>02</b>
              <span>
                「がんばれ」の前後にある、距離・期待・負担を観察する。
              </span>
            </li>
            <li>
              <b>03</b>
              <span>
                抽象的な価値で終えず、商品・サービスとして体験化する。
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="rubric-section">
        <div className="section-heading">
          <div>
            <span className="card-label">HARNESS SCORECARD — PROPOSAL</span>
            <h2>公式5観点と、内部の補助採点</h2>
          </div>
          <span className="score-badge">100 pts</span>
        </div>
        <p className="rubric-intro">
          公式FAQは「インプット・コンセプト・アウトプット・プレゼンテーション・一貫性」を共通の審査基準として示しています。下の100点は公式配点ではない内部の補助線です。AIの点数で結論を出さず、人の反応は別記録として扱います。
        </p>
        <div className="rubric-grid">
          <article>
            <b>01 / 30</b>
            <h3>INPUT の独自性</h3>
            <p>
              机上の情報を越えた、自分たちなりの観察・実験・インタビューがあるか。そこから意外な気づき／仮説が出たか。
            </p>
          </article>
          <article>
            <b>02 / 30</b>
            <h3>CONCEPT の必然性</h3>
            <p>
              生活者の具体的な葛藤を、一言で言える独自の見立てに変えられているか。テーマ「応援」との接続は強いか。
            </p>
          </article>
          <article>
            <b>03 / 25</b>
            <h3>OUTPUT のブランド性</h3>
            <p>
              単発の施策でなく、複数の体験に一気通貫する思想があるか。狭すぎず、実現不能なほど広すぎないか。
            </p>
          </article>
          <article>
            <b>04 / 15</b>
            <h3>PRESENTATION / STORY</h3>
            <p>
              なぜ今このチームがつくるのか。聞き手が「この世界を見たい」と思う物語と、伝わる見せ方があるか。
            </p>
          </article>
          <article>
            <b>05 / GATE</b>
            <h3>一貫性</h3>
            <p>
              調査で見た生活者の緊張が、コンセプト、具体的な物、見せる場面まで途切れずつながるか。これは点数の足し算でなく、提出前に人が読む必須確認項目です。
            </p>
          </article>
        </div>
      </section>
      <section id="schedule" className="schedule-section">
        <div className="section-heading">
          <div>
            <span className="card-label">OFFICIAL SCHEDULE</span>
            <h2>締切から逆算する</h2>
          </div>
          <CalendarDays size={21} />
        </div>
        <div className="schedule-list">
          {schedule.map(([date, event]) => (
            <div
              className={
                date === "08.27" ? "schedule-item imminent" : "schedule-item"
              }
              key={date}
            >
              <strong>{date}</strong>
              <span>{event}</span>
              {date === "08.27" && <small>最優先</small>}
            </div>
          ))}
        </div>
      </section>
      <section className="sources-section">
        <div>
          <span className="card-label">SOURCES USED IN THIS LOOP</span>
          <h2>参照情報</h2>
        </div>
        <a
          href="https://branddesigncontest.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <Users size={17} /> BranCo! 公式サイト
            <br />
            <small>コンテストの定義・過去テーマ・受賞作</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
        <a
          href="https://branddesigncontest.com/outline/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <CalendarDays size={17} /> 2026 開催概要・応募要項
            <br />
            <small>テーマ・日程・参加条件・賞</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
      </section>
    </div>
  );
}
