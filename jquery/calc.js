$(function () { //即時関数

  let thisNumber = ''; //今現在の数字
  let lapFlag = false; //2周目以降か判断
  const arrayNumber = []; //数字配列
  const arrayOperator = []; //演算子配列
  const newArrayNumber = []; //最後の計算用、数字配列
  const newArrayOperator = []; //最後の計算用、演算子配列


  //---------------------少数点を押された時の動き---------------------
  $('.btn-decimal-point').click(function () {
    //最後に入力された文字が0～9だったら && まだ小数点が入力されていなかったら && １回目の計算結果が表示されていなかったら、
    if (/[0-9]/.test(($('.display').text()).slice(-1)) && thisNumber.indexOf('.') == -1 && !lapFlag) {

      //現在の表示と入力された値を足してディスプレイ表示する
      $('.display').text($('.display').text() + $(this).text());

      thisNumber += $(this).text(); //0をthisNumberに入れる
    }
  });

  //---------------------0が押された時の動き---------------------
  $('.btn-zero').click(function () { //0がクリックされた時、
    if (thisNumber.split(/[0-9]/).length < 10) { //数字の制限は9文字まで

      if (lapFlag) { //2周目フラグがtrueだったら、
        $('.display').text(''); //前回の答えが残ってるので、表示をなくす
        thisNumber = ''; //前回の答えが残ってるので、数字を初期化
      }

      if ($('.display').text() != '0') { //ディスプレイ表示が0以外だったら、

        //現在の表示と入力された値を足してディスプレイ表示する
        $('.display').text($('.display').text() + $(this).text());

        thisNumber += $(this).text(); //数字をthisNumberに入れる
      }
      lapFlag = false;
    }
  });

  //---------------------1~9が押された時の動き---------------------
  $('.btn-number').click(function () { //1～9がクリックされた時、
    if (thisNumber.split(/[0-9]/).length < 10) { //数字の制限は9文字まで

      if (lapFlag) { //2周目フラグがtrueだったら、
        $('.display').text(''); //前回の答えが残ってるので、表示をなくす
        thisNumber = ''; //前回の答えが残ってるので、数字を初期化
      }

      if ($('.display').text() == '0') {//ディスプレイ表示が0だったら、
        $('.display').text(''); //表示をなくす
      }

      //現在の表示と入力された値を足してディスプレイ表示する
      $('.display').text($('.display').text() + $(this).text());

      thisNumber += $(this).text(); //1～9をthisNumberに入れる

      lapFlag = false;
    }
  });

  //---------------------演算子の動き---------------------
  $('.btn-operator').click(function () { //演算子が押された時

    //最後に入力された文字が0～9だったら && 先に数字が押されていたら、
    if (/[0-9]/.test(($('.display').text()).slice(-1))) {

      //まだ入力が0のままだったら、
      if ($('.display').text() == '0') {
        thisNumber = '0'; //0をthisNumberに入れる
      }

      //現在の表示と入力された値を足してディスプレイ表示する
      $('.display').text($('.display').text() + $(this).text());

      arrayNumber.push(thisNumber); //数字配列に現在の数字を入れる
      arrayOperator.push($(this).text()); //演算子配列に、現在の演算子を入れる
      thisNumber = ''; //現在の数字を初期化

      lapFlag = false;
    } else {
      //現在の表示の末尾を削除し、入力された演算子を足したものを再表示する
      $('.display').text((($('.display').text()).slice(0, -1)) + $(this).text());
      //現在の演算子配列の末尾を削除し、入力された演算子を入れる
      arrayOperator[arrayNumber.length - 1] = $(this).text();
    }
  });

  //---------------------イコールを押された時の動き---------------------
  $('.btn-equal').click(function () { //イコールが押された時、
    //数字2つ以上、演算子1つ以上押されていたら、
    if (arrayNumber.length > 0 && arrayOperator.length > 0 && thisNumber != '') {
      arrayNumber.push(thisNumber); //数字配列に現在の数字を入れる

      //-----------先に掛け算と割り算の計算-----------
      for (let i = 0; i < arrayOperator.length; i++) { //演算子配列の長さの間繰り返す
        if (arrayOperator[i] == '*') { //演算子が掛け算だったら、
          //i番目とi+1番目を掛け算する
          arrayNumber[i + 1] = parseFloat(arrayNumber[i]) * parseFloat(arrayNumber[i + 1]);
        } else if (arrayOperator[i] == '/') { //演算子が割り算だったら、
          //i番目とi+1番目を割り算する
          arrayNumber[i + 1] = parseFloat(arrayNumber[i]) / parseFloat(arrayNumber[i + 1]);
        } else { //演算子が足し算か引き算だったら、
          newArrayNumber.push(arrayNumber[i]); //new数字配列にi番目の数字を入れる
          newArrayOperator.push(arrayOperator[i]);  //new演算子配列にi番目の数字を入れる
        }
      }
      //数字配列の一番最後の数字が残っているので、new数字配列に入れる
      newArrayNumber.push(arrayNumber[arrayNumber.length - 1]);

      //-----------次に足し算と引き算の計算-----------
      for (let i = 0; i < newArrayOperator.length; i++) { //new演算子配列の数だけ繰り返す
        if (newArrayOperator[i] == '+') { //演算子が足し算だったら、
          //i番目とi+1番目の中身を足し算する
          newArrayNumber[i + 1] = parseFloat(newArrayNumber[i]) + parseFloat(newArrayNumber[i + 1]);
        } else { //演算子が引き算だったら、
          //i番目とi+1番目の中身を引き算する
          newArrayNumber[i + 1] = parseFloat(newArrayNumber[i]) - parseFloat(newArrayNumber[i + 1]);
        }
      }

      //2周目計算用にthisNumberに答えを入れておく
      thisNumber = Math.round(newArrayNumber.slice(-1) * 100000000) / 100000000;

      thisNumber = thisNumber.toString();//数字を文字列に変換

      if (thisNumber.split(/[0-9]/).length < 14) { //結果が14桁以下だったら、

        //答えをディスプレイ表示する(小数点以下9桁までを四捨五入で表示)
        $('.display').text(thisNumber);

        lapFlag = true;
        arrayNumber.length = 0;
        arrayOperator.length = 0;
        newArrayNumber.length = 0;
        newArrayOperator.length = 0;

      } else { //14桁以上だったら、
        thisNumber = parseFloat(thisNumber); //文字列を数字に変換
        $('.display').text(thisNumber.toExponential(10)); //指数表記する
      }
    }
  });

  //---------------------Cを押された時の動き---------------------
  $('.btn-clear').click(function () {
    $('.display').text('0');
    thisNumber = '';
    lapFlag = false;
    arrayNumber.length = 0;
    arrayOperator.length = 0;
    newArrayNumber.length = 0;
    newArrayOperator.length = 0;
  });

  //---------------------時計---------------------
  $(function clock() { //即時関数
    const now = new Date(); //現在日時

    $('.clock').text(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());

    setTimeout(clock, 1000); //clock関数を１秒に１回繰り返す
  });


});
