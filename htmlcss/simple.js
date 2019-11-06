// -------スム―ススクロール-------
$(function () {
  $('a[href^="#"]').click(function () { //a要素の中で#で始まるものがクリックされたら
    var speed = 500;　// スクロールの速度
    var href = $(this).attr("href"); // この要素のhrefを取得
    var target = $(href == "#" || href == "" ? 'html' : href); //"#"(トップページ)か""(リロード)だった場合html、それ以外はhrefを返す
    var position = target.offset().top; //offset()で取ってきたtarget要素のtop位置
    $("html, body").animate({ scrollTop: position }, speed, "swing"); //htmlのbody要素に、positionの位置までスムーズに動かすアニメーションを実行
    return false;
  });
});
// -------ウィンドウ最下位部動作-------
$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); //ページ全体の高さ
  var winh = $(window).innerHeight(); //ウィンドウの高さ
  var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
  if (bottom <= $(window).scrollTop()) {
    //一番下までスクロールした時に実行
    $('.arrow').fadeOut();
  } else {
    $('.arrow').fadeIn();
  }
});
