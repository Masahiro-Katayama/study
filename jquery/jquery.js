$(function () {
  $('#test1').text(1);

  $('#btn1').click(function () {
    var content = parseInt($('#test1').text());
    $('#test1').text(5);
    content += parseInt($('#test1').text());
    $('#test2').text(content);
  });

  $('#btn2').click(function () {
    var content = $('#test2').text();
    $('#test2').text('');
    $('#test1').text(content);
  });

  $('#btn3').click(function () {
    $('#test1').fadeOut('');
  });

  $('#btn4').click(function () {
    $('#test1').fadeIn('');
  });

  $('#btn5').click(function () {
    if ($('#test1').css('font-size') == '30px') {
      $('#test3').text($('#test1').css('font-size'));
    };
  });
});
