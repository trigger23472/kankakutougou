'use client';

import { useEffect, useRef, useState } from 'react';

// 画像が無いときは fallback の絵文字プレースホルダ（.photo-ph）を表示する
export default function FallbackImage({ fallback, ...props }) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  // サーバーで描画された <img> は、React が動き出す前に読み込みに失敗していることがあるので、マウント時にも確認する
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <div className="photo-ph">{fallback}</div>;
  return <img ref={ref} {...props} onError={() => setFailed(true)} />;
}
