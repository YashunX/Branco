import { FileText, Target, Lightbulb, Users, Activity, Heart, Shield, BookOpen } from "lucide-react";

export default function Docs() {
  const meetingNotes = [
    {
      id: "IMG_1223",
      title: "プロジェクトの全体テーマ",
      icon: <Target size={20} color="#3b82f6" />,
      content: "・テーマ: 「応援」\n・コアコンセプト: デジタルデトックス\n・着眼点: 「自分たちから離れる」、意志が弱い人のための仕組み",
      tags: ["コンセプト", "テーマ"]
    },
    {
      id: "IMG_1224",
      title: "「推し」によるアプローチ案",
      icon: <Heart size={20} color="#ec4899" />,
      content: "・従来の「アプリ通知」や「強制シャットダウン」はネガティブ。\n・「推し」が応援してくれる仕組みはどうか？\n・「頑張って！」と声をかけてもらうポジティブな動機付け。",
      tags: ["アイデア", "推し"]
    },
    {
      id: "IMG_1225",
      title: "「仲間・連帯責任」によるアプローチ案",
      icon: <Users size={20} color="#8b5cf6" />,
      content: "・「仲間」と一緒にデトックスを行う\n・「連帯責任」というプレッシャー（ピアプレッシャー）を逆手に取る",
      tags: ["アイデア", "仲間"]
    },
    {
      id: "IMG_1226",
      title: "「ゲーミフィケーション」によるアプローチ案",
      icon: <Activity size={20} color="#10b981" />,
      content: "・育成要素（ゲーミフィケーション）を取り入れる\n・スマホを触らない時間でキャラクターが育つ\n・既存アプリ（Forestなど）に近いアプローチ",
      tags: ["アイデア", "ゲーミフィケーション"]
    },
    {
      id: "IMG_1227",
      title: "代替行動（オフライン）への誘導",
      icon: <BookOpen size={20} color="#f59e0b" />,
      content: "・デジタルから離れた時間に「何をするか」の提案が重要\n・例: 読書、散歩、睡眠など\n・新しいリアルな体験への誘導をセットにする",
      tags: ["提供価値", "代替行動"]
    },
    {
      id: "IMG_1228",
      title: "提供価値：自己肯定感の向上",
      icon: <Shield size={20} color="#14b8a6" />,
      content: "・提供する本質的な価値は「自己肯定感」の向上\n・スマホを見ない＝「えらい！」と褒められる体験\n・小さな成功体験の積み重ねをデザインする",
      tags: ["提供価値", "自己肯定感"]
    },
    {
      id: "IMG_1229",
      title: "ターゲットペルソナと課題感",
      icon: <Users size={20} color="#f43f5e" />,
      content: "・ターゲット: 大学生〜20代社会人\n・課題: スマホ依存、SNS疲れ\n・背景: 「タイパ（タイムパフォーマンス）重視」による精神的な疲弊",
      tags: ["ターゲット", "課題"]
    },
    {
      id: "IMG_1230",
      title: "「応援」の再定義",
      icon: <Lightbulb size={20} color="#eab308" />,
      content: "・応援とは何か？\n・「見守る」「一緒に走る」「褒める」「物理的なご褒美をあげる」など、応援の形を定義",
      tags: ["定義", "応援"]
    },
    {
      id: "IMG_1232",
      title: "ネクストアクション",
      icon: <Target size={20} color="#ef4444" />,
      content: "・ペルソナをもっと具体的にする\n・「なぜ（既存のアプリを使っても）失敗するのか」をもっと深掘りする\n・インサイトの特定が急務",
      tags: ["ネクストアクション", "重要"]
    }
  ];

  return (
    <div className="animate-in">
      <h1>ミーティング議事録まとめ</h1>
      <p className="subtitle">ホワイトボード画像から抽出したアイデアと要点の整理</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginTop: '32px' }}>
        {meetingNotes.map((note, index) => (
          <div key={note.id} className={`card delay-${(index % 3) + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '10px' }}>
                  {note.icon}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{note.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>参照: {note.id}</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {note.tags.map(tag => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
            
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '0.95rem', flex: 1 }}>
              {note.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
