"use client";
import Button from "@/components/Button/Button";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
  };

  const addressList = [
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
  ];

  return (
    <>
      <TopBottomBarTemplate
        _topNode={<></>}
        _bottomNode={
          <div className="p-6">
            <Button
              onClick={() => router.push("/main")}
              className={`flex justify-center w-[346px] h-[48px] ${
                selectedAddress
                  ? "bg-primary-300 text-white"
                  : "bg-[#F4F4F5] text-[#BFBFC1]"
              }`}
            >
              완료하기
            </Button>
          </div>
        }
        _contentDivProps={{ className: "bg-white" }}
      >
        <div className="flex flex-col px-6 gap-6 pb-[100px]">
          <div className="flex items-center justify-between">
            <div className="w-[10px] h-[5px] bg-primary-300 rounded-xl" />
            <div className="h-[2px] w-full bg-primary-300" />
            <div className="w-[10px] h-[5px] bg-primary-300 rounded-xl" />
            <div className="h-[2px] w-full bg-primary-300" />
            <div className="w-[10px] h-[5px] bg-primary-300 rounded-xl" />
          </div>
          <h1 className="font-[24px] text-black">
            <span className="font-bold text-primary-300">어느 지역</span>에
            <br />
            거주하시나요?
          </h1>
          <div className="grid grid-cols-2 gap-2 justify-between">
            {addressList.map((address, index) => (
              <Button
                key={index}
                className={`justify-center items-center align-center flex w-[163px] h-[40px] ${
                  selectedAddress === address
                    ? "bg-primary-300 text-white border-primary-300 border-2"
                    : "text-[#BFBFC1] border-2 border-[#BFBFC1]"
                }`}
                onClick={() => handleAddressClick(address)}
              >
                {address}
              </Button>
            ))}
          </div>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};
export default Page;
