const SUBMIT_BTN = document.getElementById('submit-btn');

function do_nothing(e) {
  e.preventDefault();
}

SUBMIT_BTN.addEventListener('click', do_nothing)