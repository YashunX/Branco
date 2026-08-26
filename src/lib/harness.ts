export type Score = { input: number; concept: number; output: number; story: number; human: number };

export type Loop = {
  id: string; date: string; phase: "発散" | "評価" | "改善" | "検証"; question: string; input: string[]; output: string; diagnosis: string; delta: string; scores: Score; next: string;
  model?: "Terra" | "Sol"; modelReason?: string; evidence?: "仮説" | "公開情報を確認" | "人の確認待ち" | "検証済み"; sources: { name: string; url: string; usedFor: string }[];
};

export type Branch = { id: string; title: string; status: "active" | "parked" | "wildcard"; premise: string; loops: Loop[] };

export type PreScreenBrief = {
  id: string; title: string; role: string; line: string; background: string; tension: string; redefinition: string; question: string; input: string; concept: string; prototype: string; whyThisForm: string; presentationScene: string; validation: string; status: "人の確認待ち" | "公開情報を確認";
};

export type ReviewQuestion = { candidate: string; question: string; whyItMatters: string };
export type ArchiveObservation = { observation: string; implication: string; sources: { name: string; url: string }[] };
export type PrototypePreview = { id: string; title: string; status: string; front: string; inside: string; interaction: string };

export const scoreLabels: { key: keyof Score; label: string; max: number }[] = [
  { key: "input", label: "INPUT", max: 30 }, { key: "concept", label: "CONCEPT", max: 30 }, { key: "output", label: "OUTPUT", max: 25 }, { key: "story", label: "STORY", max: 15 }, { key: "human", label: "人の直感", max: 10 },
];

export const harness = {
  updatedAt: "2026.08.26",
  rule: "旧案を引き継がず、毎回、公開情報・生活者の緊張・応援の再定義・最初の体験を新しく組み立てる。1枝につき発散・辛口評価・改善を行い、人の直感は点数より優先して残す。",
  modelPolicy: "通常はTerraを使用。Solへの切替は、複数枝の統合判断・審査基準の再設計・最終ストーリーの矛盾解消など、深い推論が必要な局面に限定し、理由を記録する。",
  submissionRule: "各生成は、背景・人の緊張・応援の再定義・最初の体験・なぜその物か・プレ審査で見せる一場面・未検証点まで揃って初めて記録する。",
  preScreenBriefs: [
    {
      id: "first-cheer",
      title: "はじめての合図",
      role: "ゼロベース案 / 1本目",
      line: "正しい声援を教えず、今日の応援の距離を自分で選べる。",
      background: "初めて行くライブやスポーツ観戦には、コール、拍手、ペンライト、ファン同士の暗黙の作法がある。楽しみに来た人ほど、知らないことで場を壊さないかを気にして、声を出せなくなる。",
      tension: "既存の応援ガイドは、参加の仕方を正解として教える。一方、初めての人が欲しいのは、ベテランと同じように振る舞う許可ではなく、今日の自分の距離のままでそこにいてよいという確かさである。",
      redefinition: "応援を、対象へ大きな声を届けることから、応援したい人が自分の参加の仕方を選べる状態をつくることへ変える。",
      question: "知らない作法の前で、初めての人は自分のまま応援を始められるか。",
      input: "ご当地アイドルの既存ファンコミュニティの熱狂や独特なルールが、潜在ファンの参入障壁になり得るという公開研究を確認した。また、同じ対象を応援するファンの間には仲間意識と競争意識が併存し得る。これはすべての会場に当てはまる事実ではなく、初めての人が応援へ入る緊張を探るための出発点である。",
      concept: "『観るだけ』『拍手する』『声を出す』のどれも、今日の応援として成立する。初めての人に作法を覚えさせず、選べる距離を先に渡す。",
      prototype: "チケット購入後に一度だけ届く、30秒の『声援のしおり』。画面には三つの小さな光があり、本人が一つを選ぶ。観るだけなら静かな光、拍手なら手のリズム、声を出すなら短い一声のイメージが流れる。選択は保存されず、会場にも共有されない。最後の一文は『今日の声援は、ここからでいい。』。",
      whyThisForm: "開演前の一人の時間に届くチケット画面なら、初めてであることを周囲へ見せずに選べる。作法を一覧にするガイドではなく、参加の距離を一つ選んで終える30秒の体験にするため、記録・ランキング・コミュニティ機能を持たせない。ただし、画面で許可を出すこと自体が過剰な説明にならないかは未検証である。",
      presentationScene: "会場へ向かう電車の中で、初めて来る人がチケット画面を開く。三つの光から『拍手する』を選ぶ。開演後、周囲のコールは真似せず、一曲の終わりにだけ自分の手を叩く。",
      validation: "三つの距離は自由を増やすか、それとも新しい正解をつくるか。既存ファンの文化を薄めずに、初めての人の緊張を減らせるか。主催者の公式ガイドに見えず、ブランドとして独立できるか。",
      status: "公開情報を確認",
    },
  ] satisfies PreScreenBrief[],
  reviewQuestions: [
    {
      candidate: "はじめての合図",
      question: "初めてのライブ前に『観るだけ／拍手する／声を出す』の一つを選べる30秒の体験は、参加しやすさを増やしますか。それとも、かえって選ばなければならない圧になりますか。",
      whyItMatters: "圧になるなら、三択や画面を磨く前に『選べる距離を渡す』というコンセプトを見直す。",
    },
    {
      candidate: "はじめての合図",
      question: "既存のファンから見て、この体験は自分たちの作法を否定されたように見えますか。そう見えるなら、どの言葉や置き場所を変えるべきですか。",
      whyItMatters: "新規の人だけを守って既存の文化を消さないため、主語と主催者との関係を設計し直す。",
    },
    {
      candidate: "はじめての合図",
      question: "チケット画面で一人で選ぶことに、紙や会場の体験では代えられない必然性はありますか。",
      whyItMatters: "デジタルである理由が弱ければ、画面を完成形にせず、開演前に起きる別の物・場所・所作から作り直す。",
    },
  ] satisfies ReviewQuestion[],
  archiveObservations: [
    {
      observation: "BranCo!の公式要項は、生活者を深く洞察して『応援』の課題と可能性を見出すことを求めている。FAQでは、インプット、コンセプト、アウトプット、プレゼンテーション、それらの一貫性が共通評価軸として示されている。",
      implication: "新しい案は、先に物を決めず、誰のどの瞬間に何が起きているかを調べ、その緊張からコンセプトと最初の体験を一本の線でつなぐ。",
      sources: [{ name: "BranCo! 第15回 開催概要・応募要項", url: "https://branddesigncontest.com/outline/" }, { name: "BranCo! FAQ", url: "https://branddesigncontest.com/faq/" }],
    },
    {
      observation: "公開されている過去資料を読む目的は、受賞作の見た目を真似ることではない。調査、仮説、体験を混ぜずに、ひとつの問いをどう読ませているかを確認することである。",
      implication: "新しいレポートも、背景→緊張→応援の再定義→最初の体験→未検証点の順で書き、根拠とチームの仮説を分ける。",
      sources: [{ name: "BranCo! 2023 Yukyari 公開資料", url: "https://branddesigncontest.com/wp/wp-content/uploads/2024/09/Yukyari.pdf" }, { name: "BranCo! Neighbor 公開資料", url: "https://branddesigncontest.com/wp/wp-content/uploads/2021/07/Neighbor.pdf" }],
    },
    {
      observation: "ご当地アイドルの新規ファン獲得を扱う公開研究では、既存ファンコミュニティの熱狂や独特のルールが、潜在ファンの参入障壁になり得ることが指摘されている。また、アイドルファンを対象にした研究では、同じ対象を応援する人の間に仲間意識と競争意識が併存し、競争意識は推し活の継続意向に負の影響を持ち得ることが示された。",
      implication: "『はじめての合図』は、ファン文化の正解を外から教えるのではなく、初めての人が自分で選べる参加の距離をつくる仮説として始める。新しい体験が参入障壁を解くとは断言せず、既存ファンと初めての人の両方に確認する。",
      sources: [{ name: "ご当地アイドルの古参ファンの体験を追体験するノベルゲームによる新規ファン獲得支援の試み", url: "https://cir.nii.ac.jp/crid/1050566774745537536" }, { name: "アイドルに対するファンの心理的所有感とその影響について", url: "https://www.jstage.jst.go.jp/article/marketing/43/1/43_2023.034/_article/-char/ja/" }],
    },
  ] satisfies ArchiveObservation[],
  prototypePreviews: [{ id: "first-cheer-preview", title: "はじめての合図 / 声援のしおり", status: "ゼロベース案 / 公開情報を確認", front: "今日の声援は、ここからでいい。", inside: "観るだけ / 拍手する / 声を出す", interaction: "開演前に一人で一つを選び、選択は記録も共有もしない。" }] satisfies PrototypePreview[],
  branches: [{
    id: "zero-base-20260826", title: "白紙からの探索", status: "active", premise: "過去の生成物を持ち込まず、『応援』が必要になる最初の瞬間を新しく探す。",
    loops: [{
      id: "001", date: "2026.08.26", phase: "発散", question: "公式が挙げる『推し活』で、応援が始まりにくくなるのはどの瞬間か。",
      input: ["第15回BranCo!の公式は、推し活を現代の応援の広がりとして挙げる一方、『頑張れ』が刃にもなり得ること、応援の始まりと終わりを問うている。ここでは、推しを応援する行為だけでなく、応援したい人が輪へ入る前を観察対象にする。", "ご当地アイドルを扱う公開研究では、既存ファンの熱狂や独特なルールが潜在ファンの参入障壁になり得るとされる。別の公開研究では、同じ推しを持つファンの仲間意識と競争意識が併存し、競争意識は推し活の継続意向に負の影響を持ち得る。これらは特定のファンダムを扱う研究であり、すべての会場へ一般化しない。"],
      output: "ゼロベース案『はじめての合図』を起案。初めてライブや観戦へ行く人が、コールや作法を正しく覚える前に『観るだけ』『拍手する』『声を出す』のうち今日の距離を一つ選ぶ、30秒のチケット体験をつくる。選択は誰にも共有されず、終わったら消える。応援を、対象へ大声を届ける行為から、応援したい人が自分の参加の仕方を選べる状態へ再定義する。",
      diagnosis: "背景とテーマへの接続はあるが、30秒の画面が本当にブランド固有の体験になるかは弱い。三択が新しい正解をつくる危険、既存ファンの文化を薄める危険、主催者の公式ガイドに見える危険がある。提出候補として扱うのは、これらを人に確認してからにする。",
      delta: "過去の候補・言葉・物を一切引き継がず、推し活における『初めての応援者』へ探索対象を置いた。研究の結論を解決策にせず、参入障壁という背景だけを出発点にした。",
      scores: { input: 28, concept: 26, output: 20, story: 14, human: 5 }, next: "初めての人・既存ファン・主催者の三者が、三択と非記録性をどう受け取るかを辛口で比較する。",
      model: "Terra", modelReason: "旧案を参照せず、公式情報と新規の公開研究から独立枝を発散するため標準モデルを使用。", evidence: "公開情報を確認",
      sources: [{ name: "BranCo! 第15回 開催概要・応募要項", url: "https://branddesigncontest.com/outline/", usedFor: "推し活、応援の多様化、始まりと終わりという公式の問い" }, { name: "ご当地アイドルの古参ファンの体験を追体験するノベルゲームによる新規ファン獲得支援の試み", url: "https://cir.nii.ac.jp/crid/1050566774745537536", usedFor: "既存ファンの熱狂や独自ルールが参入障壁になり得るという背景" }, { name: "アイドルに対するファンの心理的所有感とその影響について", url: "https://www.jstage.jst.go.jp/article/marketing/43/1/43_2023.034/_article/-char/ja/", usedFor: "仲間意識と競争意識を区別する観察材料" }],
    }],
  }] satisfies Branch[],
};
