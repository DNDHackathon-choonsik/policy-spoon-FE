"use client";
import { getChatBot } from "@/apis/api";
import Button from "@/components/Button/Button";
import BasicInput from "@/components/Input/BasicInput";
<<<<<<< Updated upstream
import { useState } from "react";
=======
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackSpaceArrow from "@/svgs/BackSpaceArrow.svg";
import ChatSend from "@/svgs/Send.svg";
import ChatBubble from "@/components/chatting/ChatBubble";
import OtherChatBox from "@/components/chatting/OtherChatBox";
>>>>>>> Stashed changes

const Page = () => {
  const [questionValue, setQuestionValue] = useState<string>("");
<<<<<<< Updated upstream
=======
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);
  const router = useRouter();

>>>>>>> Stashed changes
  const handleTitle = (value: string) => {
    if (value.length > 20) {
      value = value.slice(0, 20);
    }
    setQuestionValue(value);
  };
<<<<<<< Updated upstream
  const handleWrite = async () => {
=======

  const handleWrite = async () => {
    const message = questionValue.trim();
    if (!message) return;

>>>>>>> Stashed changes
    try {
      const profileResponse = await getChatBot(questionValue);
    } catch (error) {
      console.error("Error in handleWrite:", error);
    }
  };

<<<<<<< Updated upstream
  return (
    <>
      <BasicInput
        _wrapperProps={{
          className:
            "bg-white ring-[#c1c1c1] px-4 rounded-[6px] h-[41px] flex-1 w-full",
        }}
        _inputProps={{
          className: "text-[16px] font-noto placeholder:text-black text-black",
          placeholder: "질문을 입력하세요.",
        }}
        _value={questionValue}
        _onChange={handleTitle}
      />
      <Button
        onClick={handleWrite}
        className="h-[50px] w-full rounded-[6px] text-[16px] font-semibold"
=======
  useEffect(() => {
    if (!initialMessageSent) {
      setInitialMessageSent(true);
      setReceivedMessages(["안녕하세요! 👋 AI 챗봇입니다."]);
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
>>>>>>> Stashed changes
      >
        완료
      </Button>
    </>
  );
};

export default Page;
