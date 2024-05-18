"use client";
import { getReviewPost } from "@/apis/api";
import Button from "@/components/Button/Button";
import BasicInput from "@/components/Input/BasicInput";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackSpaceArrow from "@/svgs/BackSpaceArrow.svg";
import Search from "@/svgs/search.svg";
import Box from "@/components/Box/Box";
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
  const [searchValue, setSearchValue] = useState<string>("");
  const [needValue, setNeedValue] = useState<string>("");
  const [titleValue, setTitleValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const handleNeedChange = (value: string) => {
    setNeedValue(value);
  };
  const handleTitleChange = (value: string) => {
    setTitleValue(value);
  };
  const handleContentChange = (value: string) => {
    setContentValue(value);
  };
  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
  };

  const handleSubmit = async () => {
    if (!selectedAddress || !needValue || !titleValue || !contentValue) {
      setError("모든 필드를 입력해주세요.");
      return;
    }
    try {
      await getReviewPost(selectedAddress, needValue, titleValue, contentValue);
      alert("정책 후기 작성이 완료되었습니다.");
      router.push("/main");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
              정책 후기 작성
            </div>
          </div>
        }
        _bottomNode={
          <div>
            <Button
              onClick={handleSubmit}
              className={`flex justify-center w-full h-[48px] ${
                selectedAddress && needValue && titleValue && contentValue
                  ? "bg-primary-300 text-white"
                  : "bg-[#F4F4F5] text-[#BFBFC1]"
              }`}
            >
              완료하기
            </Button>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>
        }
        _contentDivProps={{ className: "bg-white" }}
      >
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
            _onChange={handleSearchChange}
            _value={searchValue}
          />
        </div>

        <div className="gap-2 py-4">
          <h1 className="text-primary-300 font-bold text-[20px]">
            지원 받기 위해 어떤 걸 준비했나요?
            <span className="text-[#FF6847]">*</span>
          </h1>
          <BasicInput
            _state="error"
            className="ring-0 flex justify-center text-[14px] font-regular focus-within:text-black"
            _inputProps={{
              placeholder: "내용 입력하기",
            }}
            _onChange={handleNeedChange}
            _value={needValue}
          />
          <div className="border-1 border-b px-4" />
          <p className="flex pt-4 justify-center font-bold text-[14px] text-[#9F9F9F]">
            + 추가
          </p>
        </div>

        <div className="gap-2">
          <h1 className="text-primary-300 font-bold text-[20px]">
            과정에 대해 자유롭게 작성해주세요!
            <span className="text-[#FF6847]">*</span>
          </h1>
          <Box className="gap-2 flex w-full flex-col rounded-[0px] border border-[#c1c1c1]">
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
              _value={titleValue}
              _onChange={handleTitleChange}
            />
            <div className="border-1 border-b px-4" />
            <BasicTextArea
              _wrapperClasses="px-4 ring-0"
              _value={contentValue}
              _onChange={handleContentChange}
              className="h-[200px] font-regular w-full text-[16px] text-black placeholder:text-[#9F9F9F]"
              placeholder="내용을 입력해주세요."
            />
          </Box>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};

export default Page;
