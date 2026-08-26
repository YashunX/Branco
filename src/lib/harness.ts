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
      status: "active",
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
