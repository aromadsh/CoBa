const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const image = document.querySelector('.hero-image-overlay');

let state = 0; // 0: text1, 1: text2, 2: image

function updateState() {
  // 모든 요소 숨김
  text1.classList.add('hidden'); text1.classList.remove('visible');
  text2.classList.add('hidden'); text2.classList.remove('visible');
  image.classList.add('hidden'); image.classList.remove('visible');

  // 현재 상태 표시
  if (state === 0) {
    text1.classList.remove('hidden'); text1.classList.add('visible');
  } else if (state === 1) {
    text2.classList.remove('hidden'); text2.classList.add('visible');
  } else {
    image.classList.remove('hidden'); image.classList.add('visible');
  }

  // 다음 상태로 변경
  state = (state + 1) % 3;
}

updateState(); // 첫 상태 표시
setInterval(updateState, 5000); // 5초마다 전환
