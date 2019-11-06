// おみくじ
// 乱数を使ってランダムに表示させる
// 大吉、中吉、小吉、凶、大凶
// document.writeで。
// if文

// const change = function () {
document.getElementById("button").addEventListener("mousemove", function () {

  const randomNum = Math.floor(Math.random() * (5 + 1 - 1)) + 1;
  const answer = document.getElementById("answer");

  if (randomNum == 1) {
    answer.textContent = "大吉";
    answer.classList.add("red");
  } else if (randomNum == 2) {
    answer.textContent = "中吉";
  } else if (randomNum == 3) {
    answer.textContent = "小吉";
  } else if (randomNum == 4) {
    answer.textContent = "凶";
  } else {
    answer.textContent = "大凶";
    answer.classList.remove("red");
  }

})

//document.getElementById("answer").textContent = "大吉";
//document　→　html内の
//getElementById　→　Idを指定してノードを取得します
//("answer")　→　Id名はanswerです
//.textContent　→　Id="answer"の中身（テキスト部分）を変える。
//="大吉"　→　「大吉」に変える。

//document.getElementById("answer")　ここまでが取得する動きのかたまり
//その後のドット演算子は、それに対してどのような処理をするか。

//document.getElementById("answer").classList.add("red");
//document.getElementById("answer").classList.remove("red");
//document.getElementById("answer").classList.toggle("red");
//document.getElementById("answer").classList.contains("red");

//世界のナベアツ
//3の倍数と3のつく数字で「アホ」になる！
//ボタンを押したら結果表示する！

//1~9のボタンを用意して、→9*9をして→その答えをHTML側に表示する。