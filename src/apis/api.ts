import axios from "axios";

interface ChatBotResponse {
  answer: string;
}

export const getChatBot = async (question: string): Promise<string> => {
  try {
    const response = await axios.post<ChatBotResponse>(
      `https://mgxfgxkyzbegkahr.tunnel-pt.elice.io/proxy/8000/generate`,
      { question: question },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data.answer;
  } catch (error) {
    console.error("Error in getChatBot:", error);
    throw new Error("챗봇 응답을 가져오는 중 오류가 발생했습니다.");
  }
};
