<html>
<head>
  <meta charset="utf-8" />
 </head>
<body>

  <?php
$name = $_POST["name"];
$mail = $_POST["mail"];
$inquiry = $_POST["inquiry"];

 mb_language("Japanese");
 mb_internal_encoding("UTF-8");

 $to = "kataponess1@gmail.com";
 $title = "問い合わせ";
 $content = "メールアドレス：".$mail."<br>"."問い合わせ内容".$inquiry;
 $headers = "From:Poness<no-reply@kataponess.com>";


 if (mb_send_mail($to, $title, $content, $headers)) {
     echo "メールを送信しました";
 } else {
     echo "メールの送信に失敗しました";
 }
 ?>

</body>
</html>
