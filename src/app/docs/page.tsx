import { Archive, ArrowUpRight, Heart, Lightbulb } from "lucide-react";
import Image from "next/image";

const notes = [
  [
    "見守る応援",
    "『推し』や仲間からのポジティブな声かけ。強制ではなく、頑張りを肯定する設計。",
    "応援 / 推し",
  ],
  [
    "仲間の連帯",
    "個人の意思だけに委ねず、誰かと一緒に取り組むことで継続を支える。",
    "応援 / 仲間",
  ],
  [
    "小さな成功体験",
    "できたことを可視化して褒める。提供価値は自己肯定感の積み重ね。",
    "価値 / 自己肯定感",
  ],
  [
    "代替行動への誘導",
    "ただやめるのではなく、読書・散歩・睡眠などリアルな体験に接続する。",
    "体験 / オフライン",
  ],
  [
    "失敗の背景",
    "FOMO、微小な退屈、行動の切り替わり。制限だけでは感情の隙間を埋められない。",
    "課題 / 行動",
  ],
  [
    "応援の再定義",
    "見守る、一緒に走る、褒める、物理的なご褒美。応援には複数の形がある。",
    "定義 / 応援",
  ],
];

const sourcePhotos = [
  [
    "IMG_1223",
    "プロジェクトの全体テーマ",
    "応援 × デジタルデトックスという出発点",
  ],
  ["IMG_1224", "『推し』による応援", "ポジティブな声かけで行動を後押しする案"],
  ["IMG_1225", "仲間・連帯責任", "一人で抱えず、仲間と続ける仕組み"],
  [
    "IMG_1226",
    "ゲーミフィケーション",
    "スマホを見ない時間で育つ、成功体験の設計",
  ],
  ["IMG_1227", "代替行動への誘導", "読書・散歩・睡眠など、オフラインの行き先"],
  ["IMG_1228", "自己肯定感", "小さな『できた』を褒め、積み上げる価値"],
  ["IMG_1229", "ターゲットと課題", "大学生〜20代、SNS疲れとスマホ依存"],
  ["IMG_1230", "応援の再定義", "見守る・一緒に走る・褒める・ご褒美"],
  ["IMG_1232", "次の問い", "失敗の理由とペルソナをさらに深掘りする"],
];

export default function Docs() {
  return (
    <div className="page-shell knowledge-page">
      <div className="knowledge-heading">
        <div>
          <div className="eyebrow">
            <span /> PROJECT MEMORY
          </div>
          <h1>
            考えてきたことを、
            <br />
            <em>次の材料にする。</em>
          </h1>
          <p>
            以前のデジタルデトックスプロジェクトから抽出した、再利用可能なナレッジ。
          </p>
        </div>
        <div className="knowledge-count">
          <Archive size={19} />
          <strong>9</strong>
          <span>原資料</span>
        </div>
      </div>
      <section className="knowledge-context">
        <Heart size={20} />
        <p>
          このアーカイブは過去案を固定する場所ではありません。新しい「応援」案を生むために、
          <b>見守る・仲間・自己肯定感・代替体験</b>
          という発見を取り出して使います。
        </p>
      </section>
      <section className="knowledge-grid">
        {notes.map(([title, copy, tag], index) => (
          <article key={title}>
            <span>NOTE {String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
            <footer>
              <small>{tag}</small>
              <ArrowUpRight size={15} />
            </footer>
          </article>
        ))}
      </section>
      <section className="source-gallery">
        <div className="section-heading">
          <div>
            <span className="card-label">
              SOURCE ARCHIVE / WHITEBOARD PHOTOS
            </span>
            <h2>ホワイトボード原本</h2>
          </div>
          <span className="source-gallery-count">9 PHOTOS</span>
        </div>
        <p className="source-gallery-lede">
          ここにある写真が、ナレッジカードの出典です。画像を開くと原本をそのまま確認できます。
        </p>
        <div className="source-photo-grid">
          {sourcePhotos.map(([id, title, summary]) => (
            <a
              href={`/${id}.jpg`}
              target="_blank"
              rel="noreferrer"
              className="source-photo"
              key={id}
            >
              <div className="source-photo-image">
                <Image
                  src={`/${id}.jpg`}
                  alt={`${title}が書かれたホワイトボード写真`}
                  fill
                  sizes="(max-width: 850px) 100vw, 33vw"
                />
              </div>
              <div className="source-photo-copy">
                <span>{id}</span>
                <strong>{title}</strong>
                <p>{summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="knowledge-next">
        <div>
          <Lightbulb size={20} />
          <span className="card-label">HOW TO USE</span>
          <h2>
            「余白便」では、
            <br />
            見守るという知見を使う。
          </h2>
        </div>
        <p>
          応援の言葉を増やすのではなく、相手のペースを尊重して存在を肯定する体験へ。過去のアイデアを、テーマに沿って変換しています。
        </p>
      </section>
    </div>
  );
}
