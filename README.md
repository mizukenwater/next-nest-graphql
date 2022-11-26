# next-nest-graphql
## これは何
All TypeScriptでGraphQLな開発をしたいときにテンプレがあったらいいなと思って作ったテンプレートレポジトリです。以下の要素で構成されています。

- フロントエンド： Next.js
- バックエンド： 　Nest.js
- データベース：　 MySQL5.7

## 特徴
- バックエンドをGraphQL Serverとして利用しています
- ORMはPrismaを利用しています
- バックエンドで schema.gql の変更があると chokidar-cli が変更を検知しフロントエンドへ同期します

## 環境構築
1. 各種 `.env` ファイルを追加  
api直下に作成。DB接続のための環境変数 `DATABASE_URL` を設定。  
web直下にも作成。Apolloクライアントのバックエンド接続情報 `NEXT_PUBLIC_BACKEND_URL` を設定。
1. setup.sh を実行  
実行できない場合は `chmod +x setup.sh` で実行権限を与えてから実行。
1. すべてのコンテナを起動する  
`docker compose up` or `docker compose up -d` でコンテナを起動
あとは好きなようにどうぞ。

## その他
お問合せや質問等ございましたら [Twitter](https://twitter.com/Mizuken_Water) か mizuken.water@gmail.com まで！