import { Activity, Target, Lightbulb, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="animate-in">
      <h1>Project Dashboard</h1>
      <p className="subtitle">BranCo! 2026 「応援」 - デジタルデトックス プロジェクト</p>

      <div className="grid-layout">
        {/* Current Focus */}
        <div className="card delay-1">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <Target size={24} color="#ef4444" />
            </div>
            <h3>現在のフォーカス</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            ターゲットペルソナの具体化と「なぜ制限アプリでもデトックスに失敗するのか」のインサイト発掘。
          </p>
          <span className="badge">INPUT Phase</span>
        </div>

        {/* Core Concept */}
        <div className="card delay-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <Lightbulb size={24} color="#8b5cf6" />
            </div>
            <h3>コアコンセプト案</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            「推し」の応援、仲間との連帯責任、ゲーミフィケーションを通じて小さな成功体験と自己肯定感を提供する。
          </p>
          <span className="badge">PROCESS Phase</span>
        </div>

        {/* Latest Activity */}
        <div className="card delay-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '10px', borderRadius: '12px' }}>
              <Activity size={24} color="#10b981" />
            </div>
            <h3>最新のハーネス実行</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            レポート #001: 議事録のAI解析による初期コンセプトの整理とネクストアクションの策定。
          </p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Just now</span>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#10b981' }}>Active</span>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: '48px', marginBottom: '24px' }} className="animate-in delay-3">
        アクションアイテム
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="animate-in delay-3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'var(--bg-glass)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Users color="var(--accent-primary)" />
            <div>
              <h4 style={{ fontWeight: 600 }}>1. 深掘りクエスチョンの回答</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>チームメンバーで「なぜスマホ制限を破ってしまうのか」の理由を出し合う。</p>
            </div>
          </div>
          <button style={{ padding: '8px 16px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '8px', fontWeight: 500 }}>
            回答する
          </button>
        </div>
      </div>
    </div>
  );
}
