const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalData = [
  {
    title: "Picy-led",
    desc: "이미지 캡셔닝 기반의 감성 문구 추출 생성 서비스"
  },
  {
    title: "AI 커피 추천 시스템",
    desc: "사용자의 취향을 분석하여 핸드드립 커피를 추천하는 머신러닝 모델을 개발했습니다."
  },
  {
    title: "음료 기록 서비스",
    desc: "React 기반 웹앱으로 나만의 음료 기록장을 구현했습니다. MongoDB와 연동."
  },
  {
    title: "GA4 대시보드",
    desc: "GA4 데이터를 기반으로 Google Data Studio에서 마케팅 성과를 시각화했습니다."
  },
  {
    title: "뉴스 분류기",
    desc: "KoBERT 기반 뉴스 기사 주제 분류기를 개발했습니다."
  },
  {
    title: "가짜연구소 활동",
    desc: "논문 리뷰, 세미나 참여를 통해 NLP 이해도를 높이고 연구문화를 체험했습니다."
  },
  {
    title: "POS 분석",
    desc: "카페 POS 데이터를 분석하여 인기 메뉴, 시간대별 매출 등을 도출했습니다."
  },
  {
    title: "GPT 제안서",
    desc: "사내 업무자동화를 위한 GPT 활용 제안서를 작성했습니다."
  },
  {
    title: "AI 워크숍 발표",
    desc: "AI 모델 비교와 성능 평가를 주제로 한 발표를 진행했습니다."
  },
  {
    title: "멀캠 프로젝트",
    desc: "멀티캠퍼스 교육과정 중 진행한 팀 프로젝트로 웹 서비스를 개발했습니다."
  },
  {
    title: "오픈카톡 실험",
    desc: "오픈카톡방 실험을 통해 사용자 유입 행동을 분석했습니다."
  },
  {
    title: "브루잉 클래스",
    desc: "고객을 대상으로 한 브루잉 클래스 기획 및 설문 결과 분석을 수행했습니다."
  }
];

function openModal(index) {
  modalTitle.textContent = modalData[index].title;
  modalDescription.textContent = modalData[index].desc;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
