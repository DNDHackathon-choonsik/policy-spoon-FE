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
      <div className="h-[100vh] bg-white flex justify-center items-center">
        <div className=" flex flex-col items-center justify-between gap-4">
          <MainSpoon className="mt-4" />
          <SpoonLogo width={100} />
          <div className="text-blue-900 text-xl font-normal">
            정책을 빠르고 쉽게 맛보다!
          </div>
          <KakaoLoginButton onClick={handleKakaoLogin} />
        </div>
      </div>
    </ReactQueryClientProvider>
  );
}
