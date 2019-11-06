<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>sample</title>
</head>
<body>
  <p>入力内容確認</p>
  <form action="mailto.php" method="post">
    <table>
      <tr>
        <td>名前</td>
        <td><?php echo $_POST["name"]; ?>
        </td>
      </tr>
      <tr>
        <td>メールアドレス</td>
        <td><?php echo $_POST["mail"]; ?>
        </td>
      </tr>
      <tr>
        <td>問い合わせ内容</td>
        <td><?php echo $_POST["inquiry"]; ?>
        </td>
      </tr>
    </table>
    <input type="submit" value="送信" />
</form>
</body>
</html>
