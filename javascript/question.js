let parseData = [];

window.addEventListener('DOMContentLoaded', () => show());

input_btn.addEventListener("click", () => getText());

document.onkeydown = event => {
  if (event.keyCode == 13) getText();
}

const loadJson = () => {
  return JSON.parse(localStorage.getItem('json'));
}

const writeJson = (data) => localStorage.setItem('json', JSON.stringify(data));

const getText = () => {
  if (input_text.value && input_text.value.match(/\S/g)) {
    if (localStorage.getItem('json'))
      parseData = loadJson();

    let uniqueNumber = parseData[0] ?
      parseFloat(parseData[parseData.length - 1].number + 1) :
      1;

    parseData.push({ number: uniqueNumber, text: input_text.value });
    writeJson(parseData);
    uniqueNumber++;
    show();
  }
}

const show = () => {
  while (question_table.firstChild) {
    question_table.removeChild(question_table.firstChild);
  }

  parseData = loadJson();
  parseData.sort((a, b) => {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  });

  let arrayNumber = 0;
  for (let key in parseData) {
    const div1 = document.createElement("div");
    div1.className = "top";
    const div2 = document.createElement("div");
    div2.className = "bottom";
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const p = document.createElement("p");
    p.textContent = `質問${parseData[key].number}：${parseData[key].text}`;

    const clearBtn = document.createElement("i");
    clearBtn.id = parseData[key].number;
    clearBtn.className = "clear fas fa-times-circle";

    const radioBtn1 = document.createElement("input");
    radioBtn1.type = "radio";
    radioBtn1.name = `radio${parseData[key].number}`
    radioBtn1.value = "one";
    radioBtn1.id = `Radio1-${parseData[key].number}`;
    if (parseData[arrayNumber][`radio${parseData[key].number}`] == "one")
      radioBtn1.checked = true;
    const label1 = document.createElement("label");
    label1.htmlFor = `Radio1-${parseData[key].number}`;
    label1.textContent = "はい";
    label1.className = "radio";

    const radioBtn2 = document.createElement("input");
    radioBtn2.type = "radio";
    radioBtn2.name = `radio${parseData[key].number}`
    radioBtn2.value = "two";
    radioBtn2.id = `Radio2-${parseData[key].number}`;
    if (parseData[arrayNumber][`radio${parseData[key].number}`] == "two")
      radioBtn2.checked = true;
    const label2 = document.createElement("label");
    label2.htmlFor = `Radio2-${parseData[key].number}`;
    label2.textContent = "いいえ";
    label2.className = "radio";

    clearBtn.addEventListener("click", event => {
      const ans1 = confirm('本当に消しちゃうんですか？')
      if (ans1) clear(event.target.id);
    });

    radioBtn1.addEventListener("click", event =>
      addRadioValue(clearBtn.id, event.target.value));
    radioBtn2.addEventListener("click", event =>
      addRadioValue(clearBtn.id, event.target.value));

    const fragment = document.createDocumentFragment();
    div1.appendChild(p);
    div1.appendChild(clearBtn);
    td.appendChild(div1);

    if (!parseData[arrayNumber][`radio${parseData[key].number}`]) {
      const warningP = document.createElement("p");
      warningP.textContent = "選択！→";
      warningP.className = "warning";
      div2.appendChild(warningP);
    }
    div2.appendChild(radioBtn1);
    div2.appendChild(label1);
    div2.appendChild(radioBtn2);
    div2.appendChild(label2);
    td.appendChild(div2);

    tr.appendChild(td);
    fragment.appendChild(tr);
    question_table.appendChild(fragment);

    arrayNumber++;
  }
  input_text.value = '';
  arrayNumber = 0;
}

const clear = key => {
  parseData = loadJson();
  parseData = parseData.filter((item) => {
    if (item.number != key) return true;
  });
  writeJson(parseData);
  show();
}

const addRadioValue = (key, value) => {
  parseData = loadJson();
  for (i = 0; i < parseData.length; i++) {
    if (parseData[i].number == key) parseData[i][`radio${key}`] = value;
  }
  writeJson(parseData);
  show();
}
