"use client";
import React, { useRef, useState, MouseEvent } from "react";
import Button from "@/components/Button/Button";
import KakaoTalk from "@/svgs/KakaoTalk.svg";
import { useRouter } from "next/navigation";
import ReactQueryClientProvider from "../ReactQueryClientProvider";
import { BASE_URL } from "@/utils/routePath";
import Box from "@/components/Box/Box";

export default function LoginPage() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push(`http://${BASE_URL}/oauth2/authorization/kakao`);
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
    <ReactQueryClientProvider>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-[328px] flex-col gap-10">
          <div className="flex flex-col items-center gap-4">
            <span className="font-noto text-[15px] font-bold text-primary-300">
              정책을 빠르고 쉽게 맛보다!
            </span>
          </div>
          <Button onClick={() => router.push("signup-gender")}>회원가입</Button>
          {/* <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 mx-auto laptop:w-[800px] pt-[70px]">
              <div
                className="flex gap-10 overflow-x-scroll transition-all duration-500"
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
                {Array.from({ length: 10 }, (_, index) => (
                  <Box key={index} className="bg-primary-300 text-white">
                    교육
                  </Box>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </ReactQueryClientProvider>
  );
}
