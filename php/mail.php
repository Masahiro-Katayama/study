<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/jQuery.validation.js"></script>
	<script type="text/javascript" src="js/reserve.js"></script>
	<script type="text/javascript" src="js/validate.js"></script>
	<link rel="stylesheet" href="css/mail.css">
	<title>シンプルなメールフォーム</title>
</head>
<body>

	<form id="contact-form" action="./check.php" method="post">
		<input type="hidden" name="sub_actions" value="confirm">
		<table>
			<tbody>
				<tr>
					<th>お名前</th>
					<td><input type="text" class="required" name="name" value=""></td>
				</tr>
				<tr>
					<th>メールアドレス</th>
					<td><input type="text" class="required email" name="e_mail" value=""></td>
				</tr>
				<tr>
					<th class="inquiry-content">お問い合わせ内容</th>
					<td><textarea name="comment" rows="4" cols="40"></textarea>
					</td>
				</tr>
			</tbody>
		</table>

		<div>
			<input type="submit" value="確認画面へ" name="submit">
		</div>
	</form>
</body>
</html>