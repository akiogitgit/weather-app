# weather-app

## 前提
`git` をパソコンにインストールしている

GitHubとパソコンを紐づけている
- `git config --global user.name "GitHubのアカウント名"`
- `git config --global user.email "GitHubと紐づけたEmail"`

`VSCode`がパソコンにある

`node`を https://nodejs.org/ja/ からダウンロードしている

## 始め方
1. ターミナル(コマンドプロンプト)を開く
2. cd 自分のプログラミングフォルダの階層
3. `git clone https://github.com/akiogitgit/weather-app akio-weather-app`
4. cd akio-weather-app
5. `code .` でVSCodeを開く
6. VSCodeのターミナルを開く
7. `npm install`
8. `npm run start`
9. go to `localhost:3000`
10. 下の画面が出たら成功！
![image](https://user-images.githubusercontent.com/88410576/197719172-1beeb0fa-d3f8-4f5e-adec-62d514fb5232.png)

## ディレクトリの説明
- public
  - index.html -- `このファイルの <div id="root"> にidを指定して、Reactのコードを埋めている`
  - weather.png -- `天気の画像。Reactで画像はpublicフォルダに置く`
- src -- `ソースコードはこのフォルダ内に書く`
  - components -- `コードが長くなる時、同じコードを再利用する時にファイルを分割する`
    - weatherItem.jsx -- `１つの天気のカード、これが集まることで複数の都市の天気を表示`
  - dev -- `開発用のフォルダ、本番では使わない`
    - weather.js -- `都市毎の天気情報を配列で定義`
  - styles -- `cssファイルを置く`
    - reset.css -- `デフォルトだと余計なスタイルが付くから、全てリセットしている`
    - weather.css -- `weatherItemなどのスタイルを書いている`
  - utils -- `他プロジェクトでも使える純粋関数を置く`
    - dateFormat.js -- `ミリ秒の時間(など)を引数で、2020-10-28のような文字列を返す関数`
    - generateColorByCityName.js -- `文字列から一意のグラデーションを返す関数(ここまでしなくていい)`
  - App.js -- `dev/weatherのdata配列を、mapで回した要素をWeatherItemに渡して表示する`
  - index.js -- `Appファイルを public/index.html の id="root" のDOMに置き換える`
