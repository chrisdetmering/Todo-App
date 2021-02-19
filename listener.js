const input = document.querySelector('input');
const log = document.getElementById('theForm');

input.addEventListener('input', updateList);

function updateList(e) {
  log.textContent += e.target.value;
}