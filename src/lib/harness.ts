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
      role: "ゼロベース案 / 改善候補",
      line: "初めての人を、作法でなく『最初の光』として迎える応援。",
      background: "初めて行くライブやスポーツ観戦には、コール、拍手、ペンライト、ファン同士の暗黙の作法がある。楽しみに来た人ほど、知らないことで場を壊さないかを気にして、声を出せなくなる。",
      tension: "既存の応援ガイドは、参加の仕方を分かりやすく教える。しかし、初めての人が欲しいのは、ベテランと同じように振る舞うための知識だけではない。知らないままそこにいてよいという確かさである。",
      redefinition: "応援を、対象へ大きな声を届けることから、応援したい人が『最初の自分』のまま会場に居場所を持てる状態をつくることへ変える。",
      question: "知らない作法の前で、初めての人は自分のまま応援を始められるか。",
      input: "ご当地アイドルの既存ファンコミュニティの熱狂や独特なルールが、潜在ファンの参入障壁になり得るという公開研究を確認した。また、同じ対象を応援するファンの間には仲間意識と競争意識が併存し得る。これはすべての会場に当てはまる事実ではなく、初めての人が応援へ入る緊張を探るための出発点である。",
      concept: "初めての人は『今日が、はじめて』を、既存ファンは『私にも、最初があった』を、同じ一つの光として置く。誰が初心者かを見せず、推し歴を比べず、開演前にだけ“最初の人もここにいる”ことを会場に浮かべる。",
      prototype: "入場チケットに一度だけ現れる、小さな光の選択。『今日が、はじめて』または『私にも、最初があった』のどちらかを自分だけで押す。開演直前、選ばれた光は個人名も区別もなく、会場スクリーンの五秒の星群になる。終演後に記録は消える。主催者はコールや作法を教えず、この短い合図だけを開演演出に組み込む。",
      whyThisForm: "チケットなら、初めてであることを周囲へ告白せずに選べる。会場スクリーンへは区別のない光だけが出るため、既存ファンは新しい人を“教える対象”でなく、自分にもあった最初の時間として思い出せる。ガイドページと違い、知識を増やさず、開演前の一回だけ会場の関係を変える。ただし、五秒の演出が歓迎でなく安い演出に見えないかは未検証である。",
      presentationScene: "初めて来た人が、入場前のチケットに『今日が、はじめて』を押す。同じ頃、別の既存ファンが『私にも、最初があった』を押す。開演の暗転直前、二人の区別のない小さな光を含む星群が五秒だけスクリーンに現れ、すぐ消える。",
      validation: "初めてを選ぶことは本当に安全か。既存ファンは自分の文化を歓迎の形へ変えられるか。主催者の演出コストに見合うほど、五秒の体験に意味があるか。",
      status: "人の確認待ち",
    },
  ] satisfies PreScreenBrief[],
  reviewQuestions: [
    {
      candidate: "はじめての合図",
      question: "『今日が、はじめて』を一人で押し、開演前の星群に混ざる五秒の体験は、歓迎として届きますか。それとも、初めてであることを意識させすぎますか。",
      whyItMatters: "負担になるなら、光や画面を磨く前に『最初の自分に居場所をつくる』というコンセプトを捨てる。",
    },
    {
      candidate: "はじめての合図",
      question: "『私にも、最初があった』という選択は、既存のファンに自分たちの作法を否定された感覚なく、新しい人を迎える役割を渡せますか。",
      whyItMatters: "既存の文化を薄めるなら、二つの選択をやめ、ファンと主催者の関係を別の形で設計し直す。",
    },
    {
      candidate: "はじめての合図",
      question: "個人では区別されず、会場では一つの星群になるチケット体験に、開演演出としての必然性はありますか。",
      whyItMatters: "五秒の演出がただの装飾なら、画面や星群を完成形にせず、入場前の別の関係づくりから作り直す。",
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
    {
      observation: "サッカーやライブの『初めての観戦・参加ガイド』は、座席、持ち物、マナー、コールなどの情報を提供している。初心者向けの案内自体は既に存在する。",
      implication: "『はじめての合図』は、作法を教えるガイドを新しく作らない。開演前の一回だけ、初めての人と既存ファンを匿名の同じ光へ置く体験に絞り、知識提供との差をつくる。",
      sources: [{ name: "初めての日本代表戦 観戦ガイド", url: "https://www.jfa.jp/national_team/guide/guide_02.html" }, { name: "初めての＝LOVEライブ 完全ガイド", url: "https://ikorabucall.com/first-live-guide/" }],
    },
  ] satisfies ArchiveObservation[],
  prototypePreviews: [{ id: "first-cheer-preview", title: "はじめての合図 / 最初の光", status: "改善候補 / 人の確認待ち", front: "今日が、はじめて。", inside: "私にも、最初があった。", interaction: "入場前に一人で選び、開演直前に区別のない星群として五秒だけ会場に現れる。" }] satisfies PrototypePreview[],
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
    }, {
      id: "002", date: "2026.08.26", phase: "評価", question: "『観るだけ／拍手する／声を出す』を選ぶ画面は、既存の応援ガイドと何が違うか。",
      input: ["新規に確認した公式・非公式の初めて向けガイドには、座席、持ち物、マナー、コール、応援スタイルがすでに詳しく載っている。初心者向けに参加の仕方を教えること自体は新しくない。", "#001の三択は『正解を作らない』と言いながら、参加の仕方を三つに分類していた。これは初めての人の緊張を受け止めるより、既存のガイドを短くしただけに見える。", "公開研究が示すのは、既存コミュニティのルールが参入障壁になり得ることまでであり、三択の画面が障壁を下げる証明ではない。"],
      output: "三択の『声援のしおり』を不採用にした。残す問いは、作法を知らない人が“初めての自分のまま”会場に居られるかである。既存ガイドとの差は、知識を教えることではなく、既存ファンと初めての人の関係を開演前に一度だけ変えることに置く。",
      diagnosis: "初期案の物は弱かったが、対象と緊張は残る。改善では、初めての人を目立たせず、既存ファンにも『私にも最初があった』という役割を渡せるかを試す。五秒の開演演出がただの飾りに見えるなら、この枝も保留する。",
      delta: "参加方法を教える30秒画面を捨て、知識提供と異なる関係の体験だけを次の出力条件として残した。",
      scores: { input: 29, concept: 27, output: 16, story: 14, human: 5 }, next: "初めての人と既存ファンが、区別されない一つの合図をつくる開演前の五秒を、物と場面として起案する。",
      model: "Terra", modelReason: "追加の公開ガイドを既存案と比較し、提出候補の弱さを否定的に評価するため標準モデルを使用。", evidence: "公開情報を確認",
      sources: [{ name: "初めての日本代表戦 観戦ガイド", url: "https://www.jfa.jp/national_team/guide/guide_02.html", usedFor: "初心者向けの観戦準備・応援案内が既にあることの確認" }, { name: "初めての＝LOVEライブ 完全ガイド", url: "https://ikorabucall.com/first-live-guide/", usedFor: "コール・ペンライト・マナーを含むファン主導の案内が既にあることの確認" }],
    }, {
      id: "003", date: "2026.08.26", phase: "改善", question: "初めての人を教える対象にせず、既存ファンと同じ会場の一員として迎える合図をつくれるか。",
      input: ["#002で、三択ガイドは既存案との差がないため不採用にした。残ったのは『知らない作法の前でも、最初の自分のまま居られるか』という緊張である。", "既存ファンの熱狂や独自ルールが参入障壁になり得るという研究と、仲間意識と競争意識が併存し得るという研究を、既存ファンを悪者にする根拠には使わない。むしろ、既存ファンにも新しい人を迎える当事者性があるという仮説の出発点にだけ使う。", "会場の主催者は既にガイドを持ち得る。新しい物には、情報を足すのでなく、開演前の関係を一回だけ変える必然性が必要である。"],
      output: "紙やガイドを捨て、チケットに一度だけ現れる『最初の光』へ更新した。初めての人は『今日が、はじめて』を、既存ファンは『私にも、最初があった』を自分だけで選ぶ。開演直前、選ばれた情報は個人名も新旧の区別も失い、会場スクリーンの五秒の星群になる。終演後には消える。応援を、対象へ声を送る前に、初めての人を会場の一部として迎える行為へ再定義する。",
      diagnosis: "ガイドとの差は明確になったが、五秒の星群が歓迎ではなく安易な演出に見える危険がある。また、初めてを選ぶこと自体が心理的負担になり得る。次の検証は、初めての人・既存ファン・主催者に同じシーンを見せ、誰のための演出に見えるかを聞く必要がある。",
      delta: "『何をすればよいか』を教える画面から、『誰もが最初の時間を持つ』ことを匿名で共有する開演前の五秒へ変更。新規と既存を分ける記録・ランキング・プロフィールは置かない。",
      scores: { input: 29, concept: 29, output: 23, story: 15, human: 6 }, next: "初めての人・既存ファン・主催者に、二つの選択と五秒の星群を見せ、歓迎／圧力／装飾のどれに見えるかを確認する。",
      model: "Terra", modelReason: "否定的評価を受け、コンセプトと最初の体験を一本化する最小プロトタイプへ改善するため標準モデルを使用。", evidence: "人の確認待ち",
      sources: [{ name: "ご当地アイドルの古参ファンの体験を追体験するノベルゲームによる新規ファン獲得支援の試み", url: "https://cir.nii.ac.jp/crid/1050566774745537536", usedFor: "新規参加の障壁を扱う出発点" }, { name: "アイドルに対するファンの心理的所有感とその影響について", url: "https://www.jstage.jst.go.jp/article/marketing/43/1/43_2023.034/_article/-char/ja/", usedFor: "既存ファンの仲間意識と競争意識を単純化しないための観察材料" }],
    }],
  }] satisfies Branch[],
};
