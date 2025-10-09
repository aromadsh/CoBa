async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  chatWindow.innerHTML += `<div class="chat-message chat-user">👤 ${userMessage}</div>`;
  input.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;

  const loadingMsg = document.createElement("div");
  loadingMsg.className = "chat-message chat-bot";
  loadingMsg.innerText = "🤖 생각 중...";
  chatWindow.appendChild(loadingMsg);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    loadingMsg.innerText = `🤖 ${data.reply}`;
  } catch (error) {
    loadingMsg.innerText = "❗ 지금은 잠을 자고 있어요!";
    console.error("에러:", error);
  }
}
