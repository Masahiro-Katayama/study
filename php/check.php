<?php
//mail.phpのPostをSessionに代入する。
//Postは次のページまでしか引き継ぐことが出来ません
//確認ページ、送信ページとページをまたぐ際はこのSessionを使うのが普通です。
//そのため、フォームの確認ページなどで一度Sessionに代入する必要があります。

//いきなり確認画面にアクセスがあれば不正アクセス。
//!$_POSTで　$_POSTがSetされているかをチェックし、セットされていなければリダイレクト
if (!$_POST) {
    header('Location: http://kataponess.xsrv.jp/');//	headerlocationはPHPのリダイレクト処理でよく使う。
}

//Sessionを開始するときの決まり文句、これがないとSessionが開始できない
session_start();
$_SESSION = $_POST;

//無事Sessionに保存できているかチェックする

echo '<pre>';//HTMLのpreタグを使うと、配列が見やすくなる
print_r($_SESSION);//print_rとは、配列を出力する関数
echo '</pre>';

?>


<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="css/check.css">
	<title>シンプルなメールフォーム</title>
</head>
<body>

	<form id="contact-form" action="./send.php" method="post">
		<input type="hidden" name="sub_actions" value="confirm">
		<table>
			<tbody>
				<tr>
					<th>お名前</th>
					<td><?php echo htmlspecialchars($_POST['name']);?>
					</td>
				</tr>
				<tr>
					<th>メールアドレス</th>
					<td><?php echo htmlspecialchars($_POST['e_mail']);?>
					</td>
				</tr>
				<tr>
					<th class="inquiry-content">お問い合わせ内容</th>
					<td><?php echo htmlspecialchars($_POST['comment']);?>
					</td>
				</tr>
			</tbody>
		</table>

		<div>
			<p>PCやスマホのメールフォームの修正ボタンなんかhistory.back()で十分！</p>
			<a href="javascript:history.back();">
				<input type="button" value="戻る">
			</a>
				<input type="submit" value="送信" name="submit">
		</div>
	</form>
</body>
</html>
