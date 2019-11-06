<?php
//以下ユーザー確認メール
//info@example.comを、あなたのメールアドレスにすることでこのメールフォームをそのまま使えます。
session_start();//ページ移動したら再びsession_start

$add_header="From:no-reply@kataponess.com\r\n";
$add_header	.= "Reply-to: no-reply@kataponess.com\r\n";
$add_header	.= "X-Mailer: PHP/". phpversion();
$opt = '-f'.'no-reply@kataponess.com'; //-fって何か意味あったんだけど忘れました　-fすると迷惑メールになりにくいとか、そんなことだったと思う。

//以下ヒアドキュメント<<<●●　HTMLでも、文字列でも、何いれてもOK●●;
//ヒアドキュメントは、メール送信とかの定型文を書いたりするとき、あとはSQLを書くときも使うかな。
//ヒアドキュメント内ではPHPのプログラムは一切かけない。変数だけ。変数は{}で囲ってあげること
//メールの本文をここでひとまとめに。
$message =<<<HTML
お問い合わせ内容の確認です。

お名前
{$_SESSION['name']}

E_mail
{$_SESSION['e_mail']}

お問い合わせ内容
{$_SESSION['comment']}

内容確認後、担当者より折り返しご連絡をさせて頂きます。
今しばらくお待ちください。

HTML;

// カレントの言語を日本語に設定する
mb_language("ja");
// 内部文字エンコードを設定する　このエンコード指定は大昔の携帯だとShift-jisにしないとだめだったとか。
// 今はUTF-8にしておけばだいたいOKだから、楽な時代になったもんだよ。
mb_internal_encoding("UTF-8");

mb_send_mail($_SESSION['e_mail'], "【お問い合わせ】確認メール", $message, $add_header, $opt);
//mb_send_mailは5つの設定項目がある
//mb_send_mail(送信先メールアドレス,"メールのタイトル","メール本文","メールのヘッダーFromとかリプライとか","送信エラーを送るメールアドレス");
//5番目の情報は第5引数と呼ばれるものでして、これがないと迷惑メール扱いになることも。



//マスター管理者にも同じメールを送りつける！！
mb_send_mail('kataponess1@gmail.com', "お問い合わせがありました", $message, $add_header, $opt);

session_destroy();  // セッションを破棄
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>シンプルなメールフォーム</title>
</head>
<body>

    <p>送信完了しました</p>

</body>
</html>
