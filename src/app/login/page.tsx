"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ReactQueryClientProvider from "../ReactQueryClientProvider";
import { BASE_URL } from "@/utils/routePath";
import SpoonLogo from "@/svgs/spoonLogo.svg";
import MainSpoon from "@/svgs/mainspoon.svg";
import KakaoLoginButton from "@/svgs/kakaologinbutton.svg";

export default function LoginPage() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push(`http://${BASE_URL}/oauth2/authorization/kakao`);
  };

  return (
    <ReactQueryClientProvider>
      <div className="bg-white flex flex-col items-center justify-between">
        <div className="w-24 h-6 mt-36"></div>
        <div className="w-24 h-6 mt-36"></div>
        <MainSpoon className="mt-4" />
        <div className=" h-12 bg-zinc-500/opacity-10 flex justify-center items-center w-full">
          <SpoonLogo width={100} />
        </div>
        <div className="text-blue-900 text-xl font-normal font-['Pretendard'] leading-loose">
          정책을 빠르고 쉽게 맛보다!
        </div>
        <div className="Group10429 w-80 h-12">
          <KakaoLoginButton onClick={handleKakaoLogin} />
        </div>
      </div>
    </ReactQueryClientProvider>
  );
}
