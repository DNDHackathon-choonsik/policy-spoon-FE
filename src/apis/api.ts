import LocalStorage from "@/utils/localStorage";
import axios from "axios";

interface ChatBotResponse {
  answer: string;
}

const ACCESS_TOKEN = LocalStorage.getItem("accessToken");

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

export const getReview = async () => {
  const response = await axios.get(`http://192.168.10.116:4321/review/1`, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ` + ACCESS_TOKEN,
    },
  });
  return response.data.data;
};
