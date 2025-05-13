// main.js

// ✅ 인트로 텍스트 애니메이션 (페이지 로드 시)
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-overlay h1');
  const heroSubText = document.querySelector('.hero-overlay p');

  heroText.style.opacity = 0;
  heroSubText.style.opacity = 0;

  setTimeout(() => {
    heroText.style.transform = 'translateY(0)';
    heroText.style.opacity = 1;
  }, 300);

  setTimeout(() => {
    heroSubText.style.transform = 'translateY(0)';
    heroSubText.style.opacity = 1;
  }, 600);
});

// ✅ 스크롤 시 섹션 fade-in 애니메이션
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


const textContainer = document.querySelector('.hero-text-container');
const imageOverlay = document.querySelector('.hero-image-overlay');

let showingText = false;

setInterval(() => {
  if (showingText) {
    // 텍스트 숨기고 이미지 보여줌
    textContainer.classList.remove('visible');
    textContainer.classList.add('hidden');
    imageOverlay.classList.remove('hidden');
    imageOverlay.classList.add('visible');
  } else {
    // 텍스트 보여주고 이미지 숨김
    textContainer.classList.remove('hidden');
    textContainer.classList.add('visible');
    imageOverlay.classList.remove('visible');
    imageOverlay.classList.add('hidden');
  }
  showingText = !showingText;
}, 10000); // 5초마다 교체
