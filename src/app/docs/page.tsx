import { FileText, Calendar, Clock } from "lucide-react";

export default function Docs() {
  return (
    <div className="animate-in">
      <h1>プロジェクト・ドキュメント</h1>
      <p className="subtitle">BranCo! 2026 プロジェクト関連資料</p>
      
      <div className="card delay-1" style={{ marginTop: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <FileText size={24} color="var(--accent-primary)" />
            </div>
            <div>
              <h2 style={{ marginBottom: 0 }}>初期ミーティング議事録まとめ</h2>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> 2026-07-09</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> 抽出元: ホワイトボード画像9枚</span>
              </div>
            </div>
          </div>
          <span className="badge">初期案</span>
        </div>
        
        <div className="doc-content" style={{ lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '12px', marginTop: '24px' }}>🎯 ターゲット・課題</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px' }}><strong>対象:</strong> 大学生〜20代社会人</li>
            <li style={{ marginBottom: '8px' }}><strong>課題感:</strong> スマホ依存、SNS疲れ、タイパ（タイムパフォーマンス）重視による精神的な疲弊</li>
            <li style={{ marginBottom: '8px' }}><strong>状態:</strong> 意志が弱く、デジタルデトックス（自分たちから離れること）が一人ではうまくいかない</li>
          </ul>

          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '12px', marginTop: '24px' }}>💡 「応援」のアプローチ案</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px' }}><strong>「推し」からの応援:</strong> 単なる制限ではなく、「推し」が「頑張って！」と声をかけてくれる（強制シャットダウンではなくポジティブな動機付け）</li>
            <li style={{ marginBottom: '8px' }}><strong>仲間との連帯責任:</strong> 一人ではなく、「仲間と一緒にデトックス」する仕組み</li>
            <li style={{ marginBottom: '8px' }}><strong>ゲーミフィケーション:</strong> スマホを触らない時間でキャラクターが育つ育成要素（※例：Forestのような仕組み）</li>
            <li style={{ marginBottom: '8px' }}><strong>代替行動への誘導:</strong> デジタルから離れた時間に「何をするか」（読書、散歩、睡眠など、新しい体験）をセットで提供する</li>
          </ul>

          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '12px', marginTop: '24px' }}>🎁 提供価値（提供されるもの）</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px' }}>スマホを見ない＝「えらい！」と褒められる体験</li>
            <li style={{ marginBottom: '8px' }}>小さな成功体験の積み重ねによる<strong>「自己肯定感」の向上</strong></li>
            <li style={{ marginBottom: '8px' }}>物理的なご褒美、見守り、一緒に走る感覚</li>
          </ul>

          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '12px', marginTop: '24px' }}>🚀 ネクストアクション（AI壁打ち中）</h3>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent-secondary)' }}>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              <strong>「なぜ失敗するのか」をもっと深掘りする（ペルソナの具体化）</strong><br/>
              既存の制限アプリやForestのようなツールがあっても、結局パスワードを解除してしまったりする理由（心の中の言い訳や、無意識に触ってしまう瞬間）を解像度高く言語化し、本質的なインサイト（INPUT）を発見する。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
