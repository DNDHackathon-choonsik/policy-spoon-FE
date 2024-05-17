"use client";
import { getChatBot } from "@/apis/api";
import Button from "@/components/Button/Button";
import BasicInput from "@/components/Input/BasicInput";
import { useState } from "react";

const Page = () => {
  const [questionValue, setQuestionValue] = useState<string>("");
  const handleTitle = (value: string) => {
    if (value.length > 20) {
      value = value.slice(0, 20);
    }
    setQuestionValue(value);
  };
  const handleWrite = async () => {
    try {
      const profileResponse = await getChatBot(questionValue);
    } catch (error) {
      console.error("Error in handleWrite:", error);
    }
  };

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
      >
        완료
      </Button>
    </>
  );
};
export default Page;
