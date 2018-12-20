# Rails Demo

## 動作方法

* 適当なDBを準備する（インストール・ユーザとDBの作成、権限付与）
* rails db:seed_fu で初期データ投入
* 80番ポートでhttpdを立てる
* frontend ディレクトリ内で yarn install を実施、packages.json の proxy に http://{サーバのIPアドレス} を記載後、yarn start して {サーバのIPアドレス}:3000へアクセス

## 構成
* backend を Rails 5.2.2で、frontend を create-react-app で作成
* front側から axios を利用して backend のAPIを叩く


