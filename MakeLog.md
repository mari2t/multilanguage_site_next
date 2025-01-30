# 作成ログ

## 2024/1/30

1. next-intlを使用することにした。app router対応のため。
2. npm install next-intl
3. messages/en.json 言語ごとに利用可能な翻訳し、ローカルに提供かリモートデータソースからロードすることが可能。
4. next.config.mjs リクエスト固有の国際化設定を Server Components に提供するエイリアスを作成するプラグインをセットアップする。
5. src/i18n/routing.ts ミドルウェアでのリダイレクトの書き換え処理、</Link>のようなナビゲーションのためのルーティング設定
6. src/middleware.ts ルーティング・コンフィギュレーションができたら、それを使ってミドルウェアをセットアップ。
7. src/i18n/request.ts サーバーコンポーネントで next-intl の機能を使うとき、関連する設定は i18n/request.ts にあるセントラルモジュールから読み込まれる。この設定は現在のリクエストにスコープされ、ユーザーのロケールに基づいたメッセージと他のオプションを提供するために使われれる。
8. src/app/[locale]/layout.tsx ミドルウェアがマッチさせたロケールは locale パラメータで利用でき、ドキュメント言語の設定に利用可能。さらに、ここを使って、i18n/request.ts から NextIntlClientProvider を経由して、クライアントコンポーネントに設定を渡す。
9. src/app/[locale]/page.tsx　表示するページ

## 2024/1/23

1. テスト作成
2. memo.mdをgitignoreに追加
3. npm install react-i18next i18next
