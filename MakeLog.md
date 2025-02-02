# 作成ログ

## 2024/2/2

1. Structuring messages ロケール内でメッセージをグループ化するには、コンポーネント名を名前空間として使用し、それをアプリ内のコード構成の主要な単位とする。
2. useTranslations Reactコンポーネント内からメッセージをレンダリング可能
3. 中括弧でメッセージを動的に表示可能
4. 複数の引数を区別できる　例）0→no followers 5→5 followers
5. 言語による数の数え方を設定できる　例）英語→1 1st 2→2nd 3→3rd それ以降はthがつく

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
