"use client";
import Button from "@/components/Button/Button";
import BasicInput from "@/components/Input/BasicInput";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const [birthValue, setBirthValue] = useState<string>("");

  const handleSubmit = (value: string) => {
    setBirthValue(value);
  };

  return (
    <>
      <TopBottomBarTemplate
        _topNode={<></>}
        _bottomNode={
          <div className="p-6">
            <Button
              onClick={() => router.push("/signup-address")}
              className={`flex justify-center w-[346px] h-[48px] ${
                birthValue
                  ? "bg-primary-300 text-white"
                  : "bg-[#F4F4F5] text-[#BFBFC1]"
              }`}
            >
              다음으로
            </Button>
          </div>
        }
        _contentDivProps={{ className: "bg-white" }}
      >
        <div className="flex flex-col px-6 gap-6">
          <div className="flex items-center justify-between">
            <div className="w-[10px] h-[5px] bg-primary-300 rounded-xl" />
            <div className="h-[2px] w-full bg-primary-300" />
            <div className="w-[10px] h-[5px] bg-primary-300 rounded-xl" />
            <div className="h-[2px] w-full bg-[#E7EBF9]" />
            <div className="w-[10px] h-[5px] bg-[#E7EBF9] rounded-xl" />
          </div>
          <h1 className="font-[24px] text-black">
            <span className="font-bold text-primary-300">생년월일</span>을
            선택해주세요
          </h1>
          <div className="w-full">
            <BasicInput
              _state="underline"
              className="text-[50px] font-extrabold focus-within:text-primary-300"
              _inputProps={{
                placeholder: "20240518",
              }}
              _onChange={handleSubmit}
              _value={birthValue}
            />
          </div>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};
export default Page;
