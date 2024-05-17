"use client";
import Logo from "@/svgs/spoonLogo.svg";
import Money from "@/svgs/Money.svg";
import Search from "@/svgs/search.svg";
import BasicInput from "@/components/Input/BasicInput";
import { useRef, useState, MouseEvent } from "react";
import Box from "@/components/Box/Box";

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

  return (
    <>
      <div className="bg-[#E7EBF9] h-[289px] relative">
        <div className="flex justify-center py-4">
          <Logo />
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
            _rightNode={<Search />}
            _onChange={() => {}}
            _value=""
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
            <div className="grid grid-cols-1 mx-auto py-4">
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
                    className={`rounded-[8px] px-4 flex-shrink-0 whitespace-nowrap flex justify-center items-center  ${
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
        </div>
      </div>
    </>
  );
};

export default Page;
