const cardNumInput = document.querySelector("input[name='number']");
const cardNameInput = document.querySelector("input[name='name']");
const cardMonthSelected = document.querySelector("select[name='month']");
const cardYearSelected = document.querySelector("select[name='year']");
const cardCvvInput = document.querySelector("input[name='cvv']");
const inputNumberText = document.querySelector("input[name='card_number']");
const inputNameText = document.querySelector("input[name='card_name']");
const inputMonthText = document.querySelector("input[name='card_month']");
const inputYearText = document.querySelector("input[name='card_year']");
const inputCvvText = document.querySelector("input[name='card_cvv']");

// 下のインプットで入力した値が表示される（もっといい書き方があるのかな。。？）
// 同じような内容を５回書いているのでまとめられそう？
cardNumInput.addEventListener('keyup', (e) => {
  const text = e.target.value;
  inputNumberText.value = text;
});

cardNameInput.addEventListener('keyup', (e) => {
  const text = e.target.value;
  inputNameText.value = text;
});

cardMonthSelected.addEventListener('change', (e) => {
  const text = e.target.value;
  inputMonthText.value = text;
});

cardYearSelected.addEventListener('change', (e) => {
  const text = e.target.value;
  inputYearText.value = text;
});

cardCvvInput.addEventListener('keyup', (e) => {
  // const text = e.target.value;
  const a = '*';
  const text = inputCvvText.value;
  const inputLength = text.length;

  // 伏字表示
  if (text == '' && e.keyCode !== 8 && e.keyCode !== 46) {
      inputCvvText.value = '*';
  //8はバックスペース、46はデリートキー
  }else if(e.keyCode == 8 || e.keyCode == 46){
    // 空白時に文字消去キーを押した場合にはリターン
    if(text.length == 0){
      return;
    }
    inputCvvText.value = text.slice(0,-1);
  }else{
    inputCvvText.value =  text.concat('*');
  }
});
