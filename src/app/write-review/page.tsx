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
import Box from "@/components/Box/Box";
import Search from "@/svgs/search.svg";
import BasicTextArea from "@/components/Input/BasicTextarea";

const Page = () => {
  const categoryList = [
    "🏠  주거",
    "✏️  교육",
    "🎨  복지∙문화",
    "🙌  참여∙권리",
    "💼  일자리",
  ];
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
  };
  return (
    <>
      <TopBottomBarTemplate
        _topNode={
          <div className="relative flex h-full w-full items-center bg-transparent">
            <div className="absolute left-[22px] [&>svg>path]:stroke-black cursor-pointer">
              <BackSpaceArrow />
            </div>
            <div className="flex flex-1 justify-center text-[16px] font-bold text-primary-300">
              정책 후기 작성
            </div>
          </div>
        }
        _bottomNode={<></>}
        _contentDivProps={{ className: "bg-white" }}
      >
        <>
          <h1 className="text-primary-300 font-bold text-[20px]">
            정책 분야를 선택해주세요.<span className="text-[#FF6847]">*</span>
          </h1>
          <div className="grid grid-cols-3 gap-3 py-2">
            {categoryList.map((item, index) => (
              <Box
                key={index}
                className={`font-semibold text-[13px] px-0 py-2 rounded-[4px] flex items-center justify-center  ${
                  selectedAddress === item
                    ? "bg-white ring-1 ring-primary-300 text-primary-300"
                    : "ring-1 ring-[#BFBFC1] text-[#BFBFC1]"
                }`}
                onClick={() => handleAddressClick(item)}
              >
                {item}
              </Box>
            ))}
          </div>
          <div className="gap-2 py-4">
            <h1 className="text-primary-300 font-bold text-[20px]">
              어떤 정책을 지원받았나요?<span className="text-[#FF6847]">*</span>
            </h1>
            <BasicInput
              _state="default"
              className="bg-[#F4F4F5] w-full p-0"
              _inputProps={{
                placeholder: "'월세 지원금'을 검색해보세요",
              }}
              _rightNode={<Search />}
              _onChange={() => {}}
              _value=""
            />
          </div>
          <h1 className="text-primary-300 font-bold text-[20px]">
            지원 받기 위해 어떤 걸 준비했나요?
            <span className="text-[#FF6847]">*</span>
          </h1>

          <BasicInput
            _state="underline"
            className="ring-0 flex justify-center text-[14px] font-regular focus-within:text-black"
            _inputProps={{
              placeholder: "내용 입력하기",
            }}
            _onChange={() => {}}
            _value=""
          />
          <div className="border-1 border-b px-4" />
          <p className="flex justify-center font-bold text-[14px] text-[#9F9F9F]">
            + 추가
          </p>

          <h1 className="text-primary-300 font-bold text-[20px]">
            과정에 대해 자유롭게 작성해주세요!
            <span className="text-[#FF6847]">*</span>
          </h1>

          <Box className="gap-2 flex w-full flex-col rounded-[0px] border border-[#c1c1c1] p-0">
            <BasicInput
              _wrapperProps={{
                className:
                  "bg-white ring-[#c1c1c1] px-4 rounded-[6px] h-[41px] flex-1 w-full",
              }}
              _inputProps={{
                className:
                  "text-[20px] placeholder:text-[#9F9F9F] text-black font-bold",
                placeholder: "제목",
              }}
              _value=""
              _onChange={() => {}}
            />
            <div className="border-1 border-b px-4" />
            <BasicTextArea
              _wrapperClasses="px-4 ring-0"
              _value=""
              _onChange={() => {}}
              className="h-[200px] font-regular w-full text-[16px] text-black placeholder:text-[#9F9F9F]"
              placeholder="내용을 입력해주세요."
            />
          </Box>
        </>
      </TopBottomBarTemplate>
    </>
  );
};

export default Page;
