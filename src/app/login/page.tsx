import React, { useRef, useState, MouseEvent } from "react";
import Button from "@/components/Button/Button";
import KakaoTalk from "@/svgs/KakaoTalk.svg";
import { useRouter } from "next/navigation";
import ReactQueryClientProvider from "../ReactQueryClientProvider";
import { BASE_URL } from "@/utils/routePath";
import Box from "@/components/Box/Box";
import SpoonLogo from "@/svgs/spoonLogo.svg";
import MainSpoon from "@/svgs/MainSpoon.svg";
import { Main } from "next/document";
import KakaoLoginButton from "@/svgs/kakaologinbutton.svg";
import axios from "axios";

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
      <div className="Frame10453 w-96 h-96 relative bg-white flex flex-col items-center justify-between">
        <div className="w-24 h-6 mt-16"></div>
        <div className="text-blue-900 text-xl font-normal font-['Pretendard'] leading-loose mt-4">
          정책을 빠르고 쉽게 맛보다!
        </div>
        <MainSpoon className="mt-4" />
        <div className="Group10429 w-80 h-12">
          <KakaoLoginButton onClick={handleKakaoLogin} />
        </div>
        <div className="OsBarBottomNavigation h-12 bg-zinc-500/opacity-10 flex justify-center items-center w-full">
          <SpoonLogo />
        </div>
        <div className="OsBarTopNavigation h-9 w-full bg-zinc-500/opacity-10 flex justify-start items-start absolute top-0 left-0">
          <div className="Absolute self-stretch h-9 flex justify-start items-start"></div>
        </div>
      </div>
    </ReactQueryClientProvider>
  );
}
