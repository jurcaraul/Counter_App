let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let messageEl = document.querySelector(".message-el");
let count = 0;
let counted = false;
let total = 0;
let countStr = 0;
let totalSum = [];
let sum = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  if (count === 0) {
    $(function () {
      $('[data-toggle="popover"]').popover('show');
    });
  } else {
    $(function () {
      $('[data-toggle="popover"]').popover('hide');
    });
    countStr = count;
    saveEl.textContent += countStr + " ";
    totalSum.push(countStr);
    for (let i = 0; i < totalSum.length; i++) {
      sum += totalSum[i];
    }
    totalEl.textContent = sum;
    totalSum = [];
    count = 0;
    countEl.textContent = 0;
  }
}

function clearCounted() {
  countEl.textContent = 0;
  count = 0;
}

function clearAll() {
  saveEl.textContent = "";
  countEl.textContent = 0;
  totalEl.textContent = 0;
  sum = 0;
}
