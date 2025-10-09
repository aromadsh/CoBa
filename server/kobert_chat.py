from transformers import BertTokenizer, BertModel
import torch

# KoBERT 모델 불러오기 (monologg/kobert from HuggingFace)
tokenizer = BertTokenizer.from_pretrained("monologg/kobert")
# model = BertModel.from_pretrained("monologg/kobert")
# model.eval()

# 간단한 규칙 기반 응답 (임시)
def get_kobert_response(user_input):
    inputs = tokenizer(user_input, return_tensors="pt")
    # with torch.no_grad():
    #     _ = model(**inputs)

    # 임시 규칙 응답
    if "이름" in user_input:
        return "저는 CoBa 챗봇입니다!"
    elif "취미" in user_input:
        return "커피 내리기와 데이터 분석이요 ☕📊"
    elif "경력" in user_input:
        return "데이터 분석과 AI 기획 경력이 있어요."
    elif "자격증" in user_input:
        return "정보처리기사, 빅데이터분석기사 등 보유 중입니다."
    else:
        return "더 궁금한 걸 물어봐 주세요!"