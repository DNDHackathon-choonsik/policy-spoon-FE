"use client";
import { getChatBot } from "@/apis/api";
import Button from "@/components/Button/Button";
import BasicInput from "@/components/Input/BasicInput";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useEffect, useState } from "react";
import BackSpaceArrow from "@/svgs/BackSpaceArrow.svg";
import ChatSend from "@/svgs/Send.svg";
import ChatBubble from "@/components/chatting/ChatBubble";
import OtherChatBox from "@/components/chatting/OtherChatBox";

const Page = () => {
  const [initialMessageSent, setInitialMessageSent] = useState(false);
  const [questionValue, setQuestionValue] = useState<string>("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  const handleTitle = (value: string) => {
    if (value.length > 20) {
      value = value.slice(0, 20);
    }
    setQuestionValue(value);
  };
  const handleWrite = async (message: string) => {
    try {
      const response = await getChatBot(message);
      setSentMessages((prevMessages) => [...prevMessages, message]);
      setReceivedMessages((prevMessages) => [...prevMessages, response]);
      setQuestionValue("");
    } catch (error) {
      console.error("Error in handleWrite:", error);
    }
  };

  useEffect(() => {
    if (!initialMessageSent) {
      setInitialMessageSent(true);
      setReceivedMessages(["안녕하세요! 👋 AI 챗봇입니다."]);
    }
  }, [initialMessageSent]);

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
            <div className="absolute left-[22px] [&>svg>path]:stroke-black">
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
              />
              <ChatSend onClick={handleWrite} />
            </div>
          </div>
        }
        _contentDivProps={{ className: "bg-white overflow-auto" }}
      >
        <div className="relative flex h-full w-full flex-col gap-6 bg-white p-5 ">
          {/* sent messages */}
          {sentMessages.map((msg, index) => (
            <div key={`sent-${index}`} className="flex justify-end">
              <ChatBubble _from="me" _text={msg} _time={new Date()} />
            </div>
          ))}

          {/*received messages */}
          {receivedMessages.map((msg, index) => (
            <div key={`received-${index}`} className="flex justify-start">
              <OtherChatBox _name="정책스푼 AI 챗봇" _profileSrc="">
                <ChatBubble _from="other" _text={msg} _time={new Date()} />
              </OtherChatBox>
            </div>
          ))}
        </div>
      </TopBottomBarTemplate>
    </>
  );
};

export default Page;
