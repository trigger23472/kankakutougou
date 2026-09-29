function LogoName() {
  return (
    <div className="logo__name"><span>す</span><span>こ</span><span>や</span><span>か</span><span>感覚</span><span>ラボ</span></div>
  );
}

// withSub: ヘッダー用（サブタイトル付き）。フッターでは名前のみ
export default function Logo({ withSub = false }) {
  return (
    <a href="#" className="logo" aria-label={withSub ? 'すこやか感覚ラボ ホーム' : undefined}>
      <svg className="logo__sun"><use href="#sun" /></svg>
      {withSub ? (
        <div>
          <LogoName />
          <div className="logo__sub">感覚統合 × あそび × こどもの成長</div>
        </div>
      ) : (
        <LogoName />
      )}
    </a>
  );
}
