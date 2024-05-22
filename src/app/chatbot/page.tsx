"use client";
import { getChatBot } from "@/apis/api";
import Button from "@/components/Button/Button";
import BasicInput from "@/components/Input/BasicInput";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackSpaceArrow from "@/svgs/BackSpaceArrow.svg";
import ChatSend from "@/svgs/Send.svg";
import ChatBubble from "@/components/chatting/ChatBubble";
import OtherChatBox from "@/components/chatting/OtherChatBox";

const Page = () => {
  const [initialMessageSent, setInitialMessageSent] = useState(false);
  const [questionValue, setQuestionValue] = useState<string>("");
  const [messages, setMessages] = useState<
    { from: "me" | "other"; text: string; time: Date }[]
  >([]);
  const router = useRouter();

  const handleTitle = (value: string) => {
    setQuestionValue(value);
  };

  const handleWrite = async () => {
    const message = questionValue.trim();
    if (!message) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { from: "me", text: message, time: new Date() },
    ]);
    setQuestionValue("");

    try {
      const response = await getChatBot(message);
      const formattedResponse = response.replace(/^Context:.*\n/, ""); // Context 부분 잘라내기
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "other", text: formattedResponse, time: new Date() },
      ]);
    } catch (error) {
      console.error("Error in handleWrite:", error);
    }
  };

  useEffect(() => {
    if (!initialMessageSent) {
      setInitialMessageSent(true);
      setMessages([
        {
          from: "other",
          text: "안녕하세요! 👋 AI 챗봇입니다.",
          time: new Date(),
        },
      ]);
    }
  }, [initialMessageSent]);

  return (
    <>
      <TopBottomBarTemplate
        _topNode={
          <div className="relative flex h-full w-full items-center bg-transparent">
            <div
              className="absolute left-[22px] [&>svg>path]:stroke-black cursor-pointer"
              onClick={() => router.back()}
            >
              <BackSpaceArrow />
            </div>
            <div className="flex flex-1 justify-center text-[16px] font-bold text-primary-300">
              정책스푼 AI 챗봇
            </div>
          </div>
        }
        _bottomNode={
          <div className="flex h-full items-center bg-transparent ">
            <div className="flex flex-1 items-center bg-[#F4F4F5] w-[346px] rounded-[25px] h-[50px]">
              <BasicInput
                _wrapperProps={{
                  className:
                    "bg-[#F4F4F5] ring-0 px-4 rounded-[25px] w-[340px]",
                }}
                _inputProps={{
                  className:
                    "bg-[#F4F4F5] text-[16px] placeholder:text-[#9F9F9F] text-[#9F9F9F] font-semibold",
                  placeholder: "내용을 입력해주세요.",
                }}
                _value={questionValue}
                _onChange={handleTitle}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleWrite();
                }}
              />
              <div className="cursor-pointer" onClick={handleWrite}>
                <ChatSend />
              </div>
            </div>
          </div>
        }
        _contentDivProps={{ className: "bg-white overflow-auto" }}
      >
        <div className="relative flex h-full w-full flex-col gap-6 bg-white p-5">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "me" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.from === "me" ? (
                <ChatBubble _from="me" _text={msg.text} _time={msg.time} />
              ) : (
                <OtherChatBox _name="정책스푼 AI 챗봇" _profileSrc="">
                  <ChatBubble _from="other" _text={msg.text} _time={msg.time} />
                </OtherChatBox>
              )}
            </div>
          ))}
        </div>
      </TopBottomBarTemplate>
    </>
  );
};

export default Page;
