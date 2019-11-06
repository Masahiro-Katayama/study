//モジュールを拡張機能として読み込む
var http = require('http'); //HTTPの各種機能
var fs = require('fs'); //ファイル操作関連の機能
var ejs = require('ejs');
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1?ogp=1';//取得するjsonファイル

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer();//httpのサーバを作成するぞー、という関数

server.on('request', function (req, res) {//httpリクエストがあった(=アクセスされた)時に呼ばれる

  http.get(url, function (apiRes) {//引数に指定したURLが取得出来たら呼ばれる

    var body = ''; //格納用の変数の用意
    apiRes.setEncoding('utf8'); //文字コードのセット

    apiRes.on('data', function (chunk) {//データが受信されたら呼ばれる
      body += chunk; //chunk(データの塊)を受信する毎に追加していく
    });

    apiRes.on('end', function () {//データの受信が終わったら呼ばれる
      var data = {}; //格納用の変数の用意
      data.animes = JSON.parse(body); //JSONに変換してdataに格納
      var template = fs.readFileSync('./test.ejs', 'utf-8'); //ejsファイルを読み込む
      var page = ejs.render(template, data); //取得したdataをtemplateというejsページに送信
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' }); //res.writeHeadでHTTPヘッダを記述
      res.write(page); //res.writeでページを指定
      res.end(); //読み込みの完了という事で必ず書く
    });
  });
});

server.listen(port, hostname, function () {//サーバ起動時に呼ばれる
  console.log(`Server runnning at http://${hostname}:${port}/`);
});
