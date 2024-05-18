"use client";
import Logo from "@/svgs/spoonLogo.svg";
import Money from "@/svgs/Money.svg";
import Search from "@/svgs/search.svg";
import BasicInput from "@/components/Input/BasicInput";
import { useRef, useState, MouseEvent, useEffect } from "react";
import Box from "@/components/Box/Box";
import Banner1 from "@/svgs/Banner1.svg";
import Banner2 from "@/svgs/Banner2.svg";
import Banner3 from "@/svgs/Banner3.svg";
import Review1 from "@/svgs/review1.svg";
import Review2 from "@/svgs/review2.svg";
import Review3 from "@/svgs/review3.svg";
import Review4 from "@/svgs/review4.svg";
import blueCircle from "@/svgs/blueCircle.svg";
import grayCircle from "@/svgs/grayCircle.svg";
import Pencil from "@/svgs/bluepencil.svg";
import Button from "@/components/Button/Button";
import Fab from "@/components/FAB/Fab";
import { useRouter } from "next/navigation";
import { getReviewList, getSearch } from "@/apis/api";
import Link from "next/link";

const Page = () => {
  const categoryList = [
    "전체",
    "🏠  주거",
    "✏️  교육",
    "🎨  복지∙문화",
    "🙌  참여∙권리",
    "💼  일자리",
  ];

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [review, setReview] = useState<any>("");
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | undefined>();

  const throttle = (func: (...args: any[]) => void, ms: number) => {
    let throttled = false;
    return (...args: any[]) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const onDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (scrollRef.current) {
      setIsDrag(true);
      setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDrag && scrollRef.current && startX !== undefined) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 30; /* 좌우로 넘길 때, delay 되는 시간 */
  const onThrottleDragMove = throttle(onDragMove, delay);

  const banners = [
    <Banner1 key="1" />,
    <Banner2 key="2" />,
    <Banner3 key="3" />,
  ];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const handleSubmit = async () => {
    router.push(`/search?id=${searchValue}`);
  };
  const fetchData = async () => {
    const response = await getReviewList();
    setReview(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="bg-[#E7EBF9] h-[289px] relative">
        <div className="flex justify-center py-4">
          <Logo width={70} />
        </div>
        <div className="p-4 relative z-10">
          <div className="pt-6 pb-10">
            <h1 className="font-bold text-[22px] text-black">
              월세 내는게 부담이에요.
            </h1>
            <p className="font-regular text-[16px] text-black">
              저도 지원받을 수 있을까요?
            </p>
          </div>
          <BasicInput
            _state="default"
            className="bg-[#F4F4F5]"
            _inputProps={{
              placeholder: "'월세 지원금'을 검색해보세요",
            }}
            _rightNode={<Search onClick={handleSubmit} />}
            _onChange={handleSearchChange}
            _value={searchValue}
          />
        </div>
        <div className="absolute top-2 right-0 z-0">
          <Money />
        </div>
      </div>
      <div className="bg-white p-4">
        <div>
          <h2 className="font-semibold text-[16px] text-black">
            정책 카테고리
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 mx-auto py-2">
              <div
                className="p-1 flex gap-2 overflow-x-scroll transition-all duration-500"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseMove={isDrag ? onThrottleDragMove : undefined}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {categoryList.map((item, index) => (
                  <Box
                    key={index}
                    className={`hover:cursor-pointer rounded-[8px] px-4 flex-shrink-0 whitespace-nowrap flex justify-center items-center  ${
                      selectedAddress === item
                        ? "bg-primary-300 text-white"
                        : "ring-1 ring-[#BFBFC1] text-[#BFBFC1]"
                    }`}
                    onClick={() => handleAddressClick(item)}
                  >
                    {item}
                  </Box>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[20px] text-black">
            <span className="text-primary-200">내 맞춤형</span> 정책
          </h1>
          <div className="relative overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
            >
              {banners.map((Banner, index) => (
                <div
                  key={index}
                  className="inline-block w-full"
                  style={{ width: "100%" }}
                >
                  {Banner}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <h1 className="font-bold text-[20px] text-black">
              <span className="text-primary-200">내 맞춤형</span> 정책의 후기
            </h1>
            <Button
              onClick={() => router.push("/write-review")}
              className="p-2 gap-1 flex items-center justify-center w-[109px] h-[26px] rounded-[8px] bg-primary-100 font-bold text-[13px] text-primary-200"
            >
              후기 작성하기 <Pencil />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {review &&
              review.map((item: any) => (
                <div
                  key={item.id}
                  className="hover:cursor-pointer gap-4"
                  onClick={() => router.push("/reviewdetails")}
                >
                  <Review1 />
                  <h1 className="font-semibold text-[15px] text-black">
                    {item.reviewTitle}
                  </h1>
                  <p className="font-medium text-[12px] text-[#37383C]">
                    {item.content}
                  </p>
                  <Box
                    className="px-2 py-0 rounded-[4px] flex items-center justify-center font-medium text-[12px] text-[#FF8E3D] bg-[#FFEDE0]"
                    style={{ display: "inline-block" }}
                  >
                    {item.category}
                  </Box>
                </div>
              ))}

            {/* <div
              className="hover:cursor-pointer gap-4"
              onClick={() => router.push("/reviewdetails")}
            >
              <Review1 />
              <h1 className="font-semibold text-[15px] text-black">
                청년 통장 발급 후기
              </h1>
              <p className="font-medium text-[12px] text-[#37383C]">
                으뜸 관악 청년 통장
              </p>
              <Box
                className="px-2 py-0 rounded-[4px] flex items-center justify-center font-medium text-[12px] text-[#FF8E3D] bg-[#FFEDE0]"
                style={{ display: "inline-block" }}
              >
                복지∙문화
              </Box>
            </div>
            <div className="gap-4">
              <Review2 />
              <h1 className="font-semibold text-[15px] text-black">
                취업 멘토링 꽤 괜찮네요
              </h1>
              <p className="font-medium text-[12px] text-[#37383C]">
                관악구∙삼성전자 청년 취업 멘토링
              </p>
              <Box
                className="px-2 py-0 rounded-[4px] flex items-center justify-center font-medium text-[12px] text-[#6CBC3C] bg-[#EBF8E8]"
                style={{ display: "inline-block" }}
              >
                교육
              </Box>
            </div>
            <div className="gap-4">
              <Review3 />
              <h1 className="font-semibold text-[15px] text-black">
                청년주택 입주 신청했어요
              </h1>
              <p className="font-medium text-[12px] text-[#37383C]">
                관악구 청년주택 입주자 추가 모집
              </p>
              <Box
                className="px-2 py-0 rounded-[4px] flex items-center justify-center font-medium text-[12px] text-[#5B99FF] bg-[#EAF2FF]"
                style={{ display: "inline-block" }}
              >
                주거
              </Box>
            </div>
            <div className="gap-4">
              <Review4 />
              <h1 className="font-semibold text-[15px] text-black">
                신림동 쓰리룸 방문 후기
              </h1>
              <p className="font-medium text-[12px] text-[#37383C]">
                청년문화공간 신림동 쓰리룸 운영
              </p>
              <Box
                className="px-2 py-0 rounded-[4px] flex items-center justify-center font-medium text-[12px] text-[#8D93FF] bg-[#EEEFFF]"
                style={{ display: "inline-block" }}
              >
                참여∙권리
              </Box>
            </div> */}
          </div>
        </div>
        <Fab
          _onClick={() => router.push("/chatbot")}
          _bottomNode={"AI 정책 상담하기"}
        />
      </div>
    </>
  );
};

export default Page;
