export type Score = {
  input: number;
  concept: number;
  output: number;
  story: number;
  human: number;
};

export type Loop = {
  id: string;
  date: string;
  phase: "発散" | "評価" | "改善" | "検証";
  question: string;
  input: string[];
  output: string;
  diagnosis: string;
  delta: string;
  scores: Score;
  next: string;
  sources: { name: string; url: string; usedFor: string }[];
};

export type Branch = {
  id: string;
  title: string;
  status: "active" | "parked" | "wildcard";
  premise: string;
  loops: Loop[];
};

export const scoreLabels: { key: keyof Score; label: string; max: number }[] = [
  { key: "input", label: "INPUT", max: 30 },
  { key: "concept", label: "CONCEPT", max: 30 },
  { key: "output", label: "OUTPUT", max: 25 },
  { key: "story", label: "STORY", max: 15 },
  { key: "human", label: "人の直感", max: 10 },
];

export const harness = {
  updatedAt: "2026.08.26",
  rule: "1枝につき最大3回の改善。伸びが止まったら保留し、新しい枝を発散する。人の直感は点数より優先して残せる。",
  branches: [
    {
      id: "after-applause",
      title: "拍手のあと",
      status: "parked",
      premise: "終わった挑戦にも、拍手を残す。",
      loops: [
        {
          id: "003",
          date: "2026.08.26",
          phase: "発散",
          question: "公式ブリーフの『応援はどのようにはじまり、そして終わるのか』から、まだ見えていない応援を探せるか。",
          input: ["BranCo! 第15回公式開催概要", "過去ホワイトボード9枚（答えではなく観察材料）"],
          output: "『拍手のあと』：終わった挑戦を、すぐ次の目標へ回収しないための応援。",
          diagnosis: "問いの独自性は強い一方で、誰がいつ使うのかが曖昧。『終わり』を感傷として扱っているだけになりうる。",
          delta: "6案を発散し、公式の問いに最も正面から答える枝を選定。",
          scores: { input: 22, concept: 25, output: 17, story: 14, human: 8 },
          next: "学生団体の引退、受験、閉店の3場面を比較し、切実な最初の利用者を1つに絞る。",
          sources: [{ name: "BranCo! 第15回 開催概要・応募要項", url: "https://branddesigncontest.com/outline/", usedFor: "テーマの問いと審査日程" }],
        },
        {
          id: "004",
          date: "2026.08.26",
          phase: "評価",
          question: "“終わった挑戦”のなかで、応援する側も受け取る側も言葉を失うのはどの場面か。",
          input: ["公式FAQの評価軸（INPUT / CONCEPT / OUTPUT / 一貫性）", "#003の辛口レビュー"],
          output: "仮説対象を『学生団体を引退する人』へ仮置き。成果発表はあるが、日常的な努力の終わりは共有されにくい。",
          diagnosis: "対象は身近になったが、『学生の送別会』に矮小化される危険がある。儀式ではなく、応援を受け取る選択肢の設計が必要。",
          delta: "対象を広く置いた案から、“終わりの努力が見えなくなる人”へ焦点を移した。",
          scores: { input: 24, concept: 26, output: 16, story: 14, human: 8 },
          next: "送別会との差を明確にする。本人が『次を語らなくていい』受け取り方を、物とデジタルの両方で3案設計する。",
          sources: [{ name: "BranCo! FAQ", url: "https://branddesigncontest.com/faq/", usedFor: "審査の共通評価軸と提出時の一貫性" }],
        },
        {
          id: "005",
          date: "2026.08.26",
          phase: "改善",
          question: "送別会でも寄せ書きでもない、“次を語らなくてよい応援”を、どんな体験として成立させるか。",
          input: ["#004の診断：送別会に矮小化される危険", "BranCo! FAQ：アウトプットと一貫性も評価対象"],
          output: "体験名を『途中のしおり』に更新。活動を終えた人へ、仲間が“結果”ではなく見ていた一場面を一枚ずつ残す。本人は、終了後に自分のタイミングで束を開くだけでよく、返信・次の宣言・集合写真を求められない。紙のしおりは、次に始めることが決まっていなくても手元に残る。",
          diagnosis: "“終わりを祝うイベント”ではなく、“努力した時間を本人に返す記録”へ近づいた。ただし、学生団体の引退以外にも本当に必要か、受け取り手が負担なく開けるかは未検証。",
          delta: "30秒の拍手を中心にした儀式案から、相手のタイミングで開ける『途中のしおり』へ変更。成果・将来・返信を要求しない制約を明文化。",
          scores: { input: 24, concept: 27, output: 22, story: 14, human: 9 },
          next: "『終わることを周囲に言いづらかった経験』を、受験・学生団体・活動休止の3場面で公開情報から探索する。必要なら先生確認用に、5つの検証質問を添えたプレ審査ドラフトを作る。",
          sources: [{ name: "BranCo! FAQ", url: "https://branddesigncontest.com/faq/", usedFor: "アウトプットを説明して初めて評価対象になるという条件の確認" }],
        },
      ],
    },
    {
      id: "bookmark-in-progress",
      title: "途中のしおり",
      status: "active",
      premise: "次を決めなくても、努力した時間を受け取れる応援。",
      loops: [
        {
          id: "006",
          date: "2026.08.26",
          phase: "検証",
          question: "『途中のしおり』は、送別会・寄せ書き・卒業アルバムと何が決定的に違い、なぜ“応援”として必要か。",
          input: ["#005の出力：返信も次の宣言も求めない受け取り方", "BranCo! 第15回公式概要：応援の始まりと終わりを問う", "BranCo! FAQ：INPUT / CONCEPT / OUTPUT / 一貫性が評価軸"],
          output: "対象を『何かを終えた直後、まだ次の自分を説明できない人』に更新。仲間は最終日に集まるのではなく、終了前後の7日間に“あなたが続けていた場面”を一枚だけ記録する。本人には、少し時間をおいてから紙のしおり束と閲覧用の小さなWebページが届く。開く・返信する・将来を宣言するかは本人が選ぶ。",
          diagnosis: "送別会との違いは明確になったが、現時点では『きれいな記念品』に留まる。応援する側がなぜ今までこれをできなかったのか、運営者がどこで導入するのかを示さなければブランドにならない。",
          delta: "“活動終了の儀式”から、“終了前後に散らばる目撃を本人へ返す非同期の仕組み”へ変更。対象を学生団体に限定せず、次を説明できない移行期の人へ広げた。",
          scores: { input: 25, concept: 28, output: 23, story: 14, human: 9 },
          next: "応援する側の障壁を3つに分解する（何を言えばよいかわからない／終わった後に連絡しづらい／相手の未来を勝手に期待したくない）。各障壁を体験の機能に変換し、最初の導入者を学生団体の代表・顧問・卒業制作チームのどれかに仮決めする。",
          sources: [
            { name: "BranCo! 第15回 開催概要・応募要項", url: "https://branddesigncontest.com/outline/", usedFor: "テーマが求める『応援の終わり』の確認" },
            { name: "BranCo! FAQ", url: "https://branddesigncontest.com/faq/", usedFor: "提出時に必要なアウトプット説明と共通評価軸の確認" },
          ],
        },
        {
          id: "007",
          date: "2026.08.26",
          phase: "改善",
          question: "応援する側の『何を言えばよいかわからない』を、相手を励ましすぎずにどう解くか。",
          input: ["#006の診断：記念品で終わる危険", "#006の次の一手：応援する側の障壁を分解"],
          output: "応援する側の行為を3つの選択に制限した。(1) 見ていた一場面を選ぶ、(2) その場面に名前をつける、(3) 開く時期を本人に委ねる。『がんばれ』『次も期待している』のような未来への要求はテンプレートから外す。最初の導入者は、引退メンバーを送り出す学生団体の代表とし、最終活動日の一週間前に招待を送る。",
          diagnosis: "相手への言葉の負担は減ったが、代表が運営するだけのツールでは弱い。束を受け取る瞬間に、本人の“終わった時間”の見え方が変わる設計が必要。",
          delta: "『自由にメッセージを書く』から『見ていた一場面を返す』へ応援者の役割を限定。最初の導入者と導入タイミングを仮決めした。",
          scores: { input: 26, concept: 28, output: 24, story: 14, human: 9 },
          next: "受け取る束の中身を、称賛の寄せ集めにしない。『成果ではなく続けていた事実』が伝わる編集ルールと、紙・Webそれぞれの役割を決める。",
          sources: [],
        },
        {
          id: "008",
          date: "2026.08.26",
          phase: "改善",
          question: "受け取る人に、次の目標や前向きさを強いずに、努力した時間を返すにはどう編集するか。",
          input: ["#007の出力：応援者は一場面だけを返す", "過去ナレッジ：小さな成功体験と自己肯定感。ただし『褒める』を強制しない"],
          output: "『途中のしおり』を、成果順ではなく時間の断片順に編集する。紙は、仲間が見ていた一場面だけを載せた5〜8枚のしおり。Webは、それらを日付なしで並べ、本人だけが好きな時に開ける場所にする。最後のカードは『次は書かなくていい』という空白。応援は目標達成を迫る力ではなく、終えた時間が消えないようにする編集行為になる。",
          diagnosis: "CONCEPTとOUTPUTの一貫性は上がった。一方で必要性の根拠はまだ仮説であり、制作物の美しさが先行している。次は当事者確認の代替として、先生に見せるドラフトへ『確認したい質問』を組み込み、調査不足を隠さない。",
          delta: "紙とWebの役割を分離し、『次は書かなくていい』空白を体験の中心に置いた。応援の価値を称賛ではなく“消えない編集”に再定義。",
          scores: { input: 26, concept: 29, output: 25, story: 15, human: 9 },
          next: "プレ審査ドラフトに落とす前に、先生確認用の5質問を作る。特に『終わった挑戦を思い出したくない人にとっても応援か』を検証し、必要なら別枝へ分岐する。",
          sources: [],
        },
      ],
    },
    {
      id: "quiet-flag",
      title: "目立たない旗",
      status: "wildcard",
      premise: "期待されるほど、ひとりになれる。",
      loops: [],
    },
    {
      id: "support-return",
      title: "応援の返却日",
      status: "parked",
      premise: "受け取った応援を、いつか誰かへ返す。",
      loops: [],
    },
  ] satisfies Branch[],
};
