// This is SO not refactored. Ridiculous redundancy ahead!

const box11 = document.getElementById('box11');
const box12 = document.getElementById('box12');
const box13 = document.getElementById('box13');
const box14 = document.getElementById('box14');
const box21 = document.getElementById('box21');
const box22 = document.getElementById('box22');
const box23 = document.getElementById('box23');
const box24 = document.getElementById('box24');
const box31 = document.getElementById('box31');
const box32 = document.getElementById('box32');
const box33 = document.getElementById('box33');
const box34 = document.getElementById('box34');
const box41 = document.getElementById('box41');
const box42 = document.getElementById('box42');
const box43 = document.getElementById('box43');
const box44 = document.getElementById('box44');

const board = document.getElementById('board');
const warning = document.getElementById('toFade');

function success() {
  console.log("Success!");
  board.innerHTML = "<div class='success'>SUCCESS!<br/> You found the secret pattern!</div>";
}

function checkPattern() {
  if (
    box11.classList.contains('clicked') &&
    box12.classList.contains('clicked') &&
    box13.classList.contains('clicked') &&
    box14.classList.contains('clicked') &&
    box21.classList.contains('clicked') &&
    box22.classList.contains('unclicked') &&
    box23.classList.contains('unclicked') &&
    box24.classList.contains('clicked') &&
    box31.classList.contains('clicked') &&
    box32.classList.contains('unclicked') &&
    box33.classList.contains('unclicked') &&
    box34.classList.contains('clicked') &&
    box41.classList.contains('clicked') &&
    box42.classList.contains('unclicked') &&
    box43.classList.contains('unclicked') &&
    box44.classList.contains('clicked')
  ) {
    success();
  }
}

function clickToChange() {
  window.onclick = e => {
    console.log(e.target);
    warning.className += ' faded';
    let selectedBox = e.target;
    if (selectedBox.classList.contains('unclicked')) {
      selectedBox.classList.remove('unclicked');
      selectedBox.classList.add('clicked');
    } else if (selectedBox.classList.contains('clicked')) {
      selectedBox.classList.remove('clicked');
      selectedBox.classList.add('unclicked');
    }
    checkPattern();
  }
}

clickToChange();
