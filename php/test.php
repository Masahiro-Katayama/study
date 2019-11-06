<?php

const MAILTO = "kataponess1@gmail.com";  //宛先メールアドレス
const SUBJECT = "サンキューメール";
$content = "レンタルサーバーでのメール送信テストです。\n";
$content .= "このメールを受け取ったということはちゃんと送信されていますね。";

$headers = "From: no-reply@kataponess.com";


$is_success = mb_send_mail(MAILTO, SUBJECT, $content, $headers);

if (!$is_success) {
    die('メール送信失敗');
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>メール送信完了画面</title>
</head>
<body>
  <p>メール送信が完了しました。</p>
</body>
</html>
