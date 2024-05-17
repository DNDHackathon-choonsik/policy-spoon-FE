"use client";
import Button from "@/components/Button/Button";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<"남자" | "여자" | null>(
    null
  );

  const handleGenderClick = (gender: "남자" | "여자") => {
    setSelectedGender(gender);
  };

  return (
    <>
      <TopBottomBarTemplate
        _topNode={<></>}
        _bottomNode={
          <div className="p-6">
            <Button
              onClick={() => router.push("/signup-birth")}
              className={`flex justify-center w-[346px] h-[48px] ${
                selectedGender
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
            <div className="w-[10px] h-[10px] bg-primary-300 rounded-xl" />
            <div className="h-[2px] w-full bg-[#E7EBF9]" />
            <div className="w-[10px] h-[10px] bg-[#E7EBF9] rounded-xl" />
          </div>
          <h1 className="font-[24px] text-black">
            <span className="font-bold text-primary-300">성별</span>을
            선택해주세요
          </h1>
          <div className="flex gap-2 justify-between">
            <Button
              className={`justify-center items-center align-center flex w-[163px] h-[40px] ${
                selectedGender === "남자"
                  ? "bg-white text-primary-300 border-primary-300 border-2"
                  : "text-[#BFBFC1] border-2 border-[#BFBFC1]"
              }`}
              onClick={() => handleGenderClick("남자")}
            >
              남자
            </Button>
            <Button
              className={`justify-center items-center align-center flex w-[163px] h-[40px] ${
                selectedGender === "여자"
                  ? "bg-white text-primary-300 border-primary-300 border-2"
                  : "text-[#BFBFC1] border-2 border-[#BFBFC1]"
              }`}
              onClick={() => handleGenderClick("여자")}
            >
              여자
            </Button>
          </div>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};
export default Page;
