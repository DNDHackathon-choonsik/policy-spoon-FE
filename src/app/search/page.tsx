"use client";
import Logo from "@/svgs/spoonLogo.svg";
import BackSpaceArrow from "@/svgs/BackSpaceArrow.svg";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import BasicInput from "@/components/Input/BasicInput";
import Search from "@/svgs/search.svg";
import Button from "@/components/Button/Button";
import Box from "@/components/Box/Box";

const Page = () => {
  return (
    <>
      <TopBottomBarTemplate
        _topNode={
          <div className="relative flex h-full w-full items-center bg-transparent">
            <div className="absolute left-[22px] [&>svg>path]:stroke-black">
              <BackSpaceArrow />
            </div>
            <div className="flex flex-1 justify-center text-[16px] font-bold text-primary-300">
              <Logo />
            </div>
          </div>
        }
        _bottomNode={<></>}
        _contentDivProps={{ className: "bg-white" }}
      >
        <h1 className="font-semibold text-[22px] py-2">검색결과</h1>
        <BasicInput
          _state="default"
          className="bg-[#F4F4F5]"
          _inputProps={{
            placeholder: "'월세 지원금'을 검색해보세요",
          }}
          _rightNode={<Search />}
          _onChange={() => {}}
          _value=""
        />
        <p className="py-4 text-[16px] font-medium text-[#787878]">
          `월세지원금`가(이) 포함된 결과입니다.
        </p>
        <div className="flex justify-between items-center border-b-2 py-4">
          <div className="flex flex-col">
            <h1 className="text-[18px] font-semibold">
              2024 서울시 청년{" "}
              <span className="text-[#3F65EA]">월세지원금</span>
            </h1>
            <p>2024 서울시에서 지원하는 청년 월세지원금...</p>
          </div>
          <Box className="flex text-[12px] font-medium justify-center items-center rounded-[8px] w-[73px] h-[32px] text-[#787878] ring-2 ring-[#F4F4F5]">
            상세보기
          </Box>
        </div>
        <div className="flex justify-between items-center border-b-2 py-4">
          <div className="flex flex-col">
            <h1 className="text-[18px] font-semibold">
              24년도 서울시 청년{" "}
              <span className="text-[#3F65EA]">월세지원금</span>추...
            </h1>
            <p>24년도 서울시에서 지원한 청년 월세 지원금...</p>
          </div>
          <Box className="flex text-[12px] font-medium justify-center items-center rounded-[8px] w-[73px] h-[32px] text-[#787878] ring-2 ring-[#F4F4F5]">
            상세보기
          </Box>
        </div>
        <div className="flex justify-between items-center border-b-2 py-4">
          <div className="flex flex-col">
            <h1 className="text-[18px] font-semibold">
              2024 저소득층 <span className="text-[#3F65EA]">월세지원금</span>{" "}
              신청
            </h1>
            <p>2024 저소득층을 대상으로 월세를 지원하는...</p>
          </div>
          <Box className="flex text-[12px] font-medium justify-center items-center rounded-[8px] w-[73px] h-[32px] text-[#787878] ring-2 ring-[#F4F4F5]">
            상세보기
          </Box>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};
export default Page;
