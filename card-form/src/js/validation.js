const cardNumInput = document.querySelector("input[name='number']");
const cardNameInput = document.querySelector("input[name='name']");
const cardMonthSelected = document.querySelector("select[name='month']");
const cardYearSelected = document.querySelector("select[name='year']");
const cardCvvInput = document.querySelector("input[name='cvv']");
const cardSubitBtn = document.querySelector("button");
const formAlertNumber = document.querySelector(".form__alert-number");
const formAlertName = document.querySelector(".form__alert-name");
const formAlertExpire = document.querySelector(".form__alert-expire");
const formAlertCvv = document.querySelector(".form__alert-cvv");

// 記入内容が正しいか判断するフラッグ
let numberFlag = false;
let nameFlag = false;
let monthFlag = false;
let yearFlag = false;
let cvvFlag = false;
// フラッグを配列にして渡す
let flagArray = [numberFlag, nameFlag, monthFlag, yearFlag, cvvFlag];

// インプットフォームの背景色変更
function changeBackground(num, el) {
  if (num == 0) {
    el.target.style.backgroundColor = '#90ee90';
  }
  if (num == 1) {
    el.target.style.backgroundColor = '#ffb6c1';
  }
}

// カード番号の入力バリデーション
cardNumInput.addEventListener('change', (e) => {
  const inputNumber = e.target.value;
  if (inputNumber.match(/^[0-9]{16}$/) == null) {
    if (flagArray[0] == true) {
      flagArray[0] = false;
    }
    formAlertNumber.textContent = "正しい番号を入力して下さい";
    changeBackground(1, e);
  } else {
    changeBackground(0, e);
    flagArray[0] = true;
    if (formAlertNumber.textContent !== '') {
      formAlertNumber.textContent = '';
    }
  }
});

// 名前入力のバリデーション
cardNameInput.addEventListener('change', (e) => {
  const inputName = e.target.value;
  if (inputName.match(/^([A-Z]+)( [A-Z]+)*$/) == null) {
    if (flagArray[1] == true) {
      flagArray[1] = false;
    }
    formAlertName.textContent = "正しい名前を入力して下さい";
    changeBackground(1, e);
  } else {
    changeBackground(0, e);
    flagArray[1] = true;
    if (formAlertName.textContent !== '') {
      formAlertName.textContent = '';
    }
  }
});

// CVVのバリデーション
cardCvvInput.addEventListener('change', (e) => {
  const inputCvv = e.target.value;
  if (inputCvv.match(/^[0-9]{3}$/) == null) {
    if (flagArray[4] == true) {
      flagArray[4] = false;
    }
    formAlertCvv.textContent = "正しいCVVを入力して下さい";
    changeBackground(1, e);
  } else {
    changeBackground(0, e);
    flagArray[4] = true;
    if (formAlertCvv.textContent !== '') {
      formAlertCvv.textContent = '';
    }
  }
});

// 有効期限のバリデーションは月と年両方から判断するためSubmit時にかける
// change時に綺麗にかける方法が思いつきませんでした
const now = new Date();
const nowMonth = now.getMonth() + 1;
const nowYear = now.getFullYear();
// 有効月のエラー文
cardMonthSelected.addEventListener('change', (e) => {
  if (formAlertExpire.textContent !== '' && e.target.value >= nowMonth) {
    formAlertExpire.textContent = '';
    flagArray[2] = true;
    return;
  }
  flagArray[2] = true;
});
// 有効年のエラー文
cardYearSelected.addEventListener('change', (e) => {
  if (formAlertExpire.textContent !== '' && e.target.value >= nowYear) {
    formAlertExpire.textContent = '';
    flagArray[3] = true;
    return;
  }
  flagArray[3] = true;
});
// 送信時のvalidation処理
cardSubitBtn.addEventListener('click', (e) => {
  const inputMonth = cardMonthSelected.value;
  const inputYear = cardYearSelected.value;
  if (inputMonth < nowMonth && inputYear <= nowYear) {
    formAlertExpire.textContent = "正しい有効期限を入力して下さい";
    flagArray[2] = false;
    return;
  }
  if (flagArray.includes(false)) {
    alert('カード情報を正しく入力して下さい');
    console.log(flagArray);
    return;
  }
  console.log(flagArray);
  alert('カード番号：' + cardNumInput.value + ' カード氏名：' + cardNameInput.value + ' 有効月：' + cardMonthSelected.value + ' 有効年：' + cardYearSelected.value + ' CVV：' + cardCvvInput.value)
  // document.querySelector('.form').submit();
});
