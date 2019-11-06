let arrayNumber = 0;
let data = [];

window.addEventListener('DOMContentLoaded', () => show());

input_btn.addEventListener("click", () => getText());

document.onkeydown = event => {
  if (event.keyCode == 13) getText();
}

const getText = () => {
  if (input_text.value && input_text.value.match(/\S/g)) {
    if (localStorage.getItem('json'))
      data = JSON.parse(localStorage.getItem('json'));

    let keyNumber = data[0] ?
      parseFloat(data[data.length - 1].number + 1) :
      1;

    data.push({ number: keyNumber, text: input_text.value });
    localStorage.setItem('json', JSON.stringify(data));
    keyNumber++;
    show();
  }
}

const show = () => {
  while (question_table.firstChild) {
    question_table.removeChild(question_table.firstChild);
  }

  const parseData = JSON.parse(localStorage.getItem('json'));
  parseData.sort((a, b) => {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  });

  for (let key in parseData) {




    //   const div1 = document.createElement("div");
    //   div1.className = "top";
    //   const div2 = document.createElement("div");
    //   div2.className = "bottom";
    //   const tr = document.createElement("tr");
    //   const td = document.createElement("td");
    //   td.className = "table";
    //   const p = document.createElement("p");
    //   p.textContent = `質問${parseData[key].number}：${parseData[key].text}`;



    //   radioBtn1.addEventListener("click", event =>
    //     addRadioValue(clearBtn.id, event.target.value));
    //   radioBtn2.addEventListener("click", event =>
    //     addRadioValue(clearBtn.id, event.target.value));

    //   const fragment = document.createDocumentFragment();
    //   div1.appendChild(p);
    //   div1.appendChild(clearBtn);
    //   td.appendChild(div1);

    //   if (parseData[arrayNumber][`radio${parseData[key].number}`] == undefined) {
    //     const warningP = document.createElement("p");
    //     warningP.textContent = "どちらか選択！→";
    //     warningP.className = "warning";
    //     div2.appendChild(warningP);
    //   }
    //   div2.appendChild(radioBtn1);
    //   div2.appendChild(label1);
    //   div2.appendChild(radioBtn2);
    //   div2.appendChild(label2);
    //   td.appendChild(div2);

    //   tr.appendChild(td);
    //   fragment.appendChild(tr);
    //   question_table.appendChild(fragment);



    let htmlText = `<tr>
      <td>
        <div>
          <p>質問${parseData[key].number}：${parseData[key].text}</p>
          <i id=${parseData[key].number} class="clear fas fa-times-circle" onclick="owata(${parseData[key].number})">
          </i>
        </div>
        <div>`;
    if (parseData[arrayNumber][`radio${parseData[key].number}`] == undefined)
      htmlText += `<p class="warning">どちらか選択！→</p>`;
    htmlText += `<input type="radio" name=radio${parseData[key].number} value = "one" id = ${parseData[key].text}Radio1>
        <label for=${parseData[key].text}Radio1 class="radio">はい</label>
        <input type="radio" name=radio${parseData[key].number} value = "two" id = ${parseData[key].text}Radio2>
        <label for=${parseData[key].text}Radio1 class="radio">いいえ</label>
        </div>
      </td>
    </tr>`;
    document.getElementById('table').insertAdjacentHTML('beforeend', htmlText);

    arrayNumber++;
  }
  input_text.value = '';
  arrayNumber = 0;
}

const clear = key => {
  parseData = JSON.parse(localStorage.getItem('json'));
  const newData = parseData.filter((item) => {
    if (item.number != key) return true;
  });
  localStorage.setItem('json', JSON.stringify(newData));
  show();
}

const addRadioValue = (key, value) => {
  parseData = JSON.parse(localStorage.getItem('json'));
  for (i = 0; i < parseData.length; i++) {
    if (parseData[i].number == key) parseData[i][`radio${key}`] = value;
  }
  localStorage.setItem('json', JSON.stringify(parseData));
  show();
}

const owata = (owt) => {
  const ans1 = confirm('本当に消しちゃうんですか？')
  if (ans1) {
    clear(owt);
  }
}
