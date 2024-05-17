import axios from "axios";

// 챗봇
export const getChatBot = async (question: string) => {
  try {
    const response = await axios.post(
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
    console.log(error);
  }
};
