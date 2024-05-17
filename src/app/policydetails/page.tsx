"use client";
import { useState } from "react";
import Link from "next/link";
import BlueGoBack from "@/svgs/bluegoback.svg";
import { useRouter } from "next/navigation";
import router from "next/router";

const PolicyDetailsPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="relative w-full h-180 bg-white">
      <div className="w-96 h-150 relative bg-white mx-auto">
        <BlueGoBack
          className="w-6 h-6 absolute top-[55px] left-6 cursor-pointer"
          onClick={handleGoBack}
        />
        <div className="left-[157px] top-[53px] absolute text-blue-900 text-lg font-extrabold font-['Tenada'] leading-relaxed">
          정책스푼
        </div>
        <div className="w-56 left-[16px] top-[120px] absolute text-blue-900 text-2xl font-bold font-['Pretendard'] leading-loose">
          관악구 청년주택 입주자
        </div>
        <div className="w-56 left-[16px] top-[150px] absolute text-blue-900 text-2xl font-bold font-['Pretendard'] leading-loose">
          추가 모집 공고
        </div>

        <div className="px-2 py-px left-[16px] top-[200px] absolute bg-indigo-50 rounded justify-start items-center gap-2.5 inline-flex">
          <div className="text-center text-blue-400 text-xs font-medium font-['Pretendard']">
            주거
          </div>
        </div>

        <div className="Line2 w-80 h-px left-[16px] top-[228px] absolute border border-neutral-200"></div>
        <div className="Group10453 h-96 left-[16px] top-[240px] absolute">
          <div className="Group10452 w-24 h-7 left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-blue-900 text-lg font-bold font-['Pretendard'] leading-relaxed">
              정책 요약 📝
            </div>
            <div className="Line3 w-20 h-px left-0 top-[27px] absolute border-2 border-blue-900"></div>
          </div>
          <div className="Frame10450 w-100 h-80 left-0 top-[39px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="Frame10452 justify-start items-start gap-5 inline-flex">
              <div className="text-black text-sm font-bold font-['Pretendard'] leading-tight">
                정책 번호
              </div>
              <div className="R2024051022685 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                R2024051022685
              </div>
            </div>
            <div className="Frame10453 justify-start items-start gap-5 inline-flex">
              <div className="text-black text-sm font-bold font-['Pretendard'] leading-tight">
                정책 분야
              </div>
              <div className="text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                주거분야
              </div>
            </div>
            <div className="Frame10454 justify-start items-start gap-6 inline-flex">
              <div className="w-[50px] text-black text-sm font-bold font-['Pretendard'] leading-tight">
                지원내용
              </div>
              <div className="w-80 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                주택 개요
                <br />
                - 공급호수: 총 3세대(203호, 205호, 401호)
                <br />
                - 공급위치: 서울특별시 관악구 법원단지10길 <br />
                5(난곡동)
                <br />
                - 공급시설: 지상 5층 18세대, 커뮤니티실
                <br />
                (1층, 17.17㎡) 1개소, 주차장 8면, 승강기 1대
                <br />
                커뮤니티실(주민공동시설) 입주민 공동사용 <br /> - 계약기간:
                2년(재계약 요건을 유지할 경우 <br />
                재계약 최대 2회, 최장 10년 거주 가능)
                <br />※ 재계약 요건: 무주택세대 구성원, 소득 <br />
                기준에 따른 자산 보유 기준 등 충족
              </div>
            </div>
            <div className="Frame10455 justify-center items-start gap-3 inline-flex">
              <div className="w-[60px] text-black text-sm font-bold font-['Pretendard'] leading-tight">
                사업 신청 기간
              </div>
              <div className="051320240522 w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                2024년 05월 13일 ~ 2024년 05월 22일
              </div>
            </div>
          </div>
        </div>

        <div className="Group10451 left-[16px] top-[570px] absolute">
          <div className="Group10452 w-24 h-7 left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-blue-900 text-lg font-bold font-['Pretendard'] leading-relaxed">
              신청 자격 🙌
            </div>
            <div className="Line3 w-20 h-px left-0 top-[27px] absolute border-2 border-blue-900"></div>
          </div>
          <div className="Frame10450 w-80 h-96 left-0 top-[39px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="Frame10452 justify-start items-start gap-5 inline-flex">
              <div className="w-12 text-black text-sm font-bold font-['Pretendard'] leading-tight">
                연령
              </div>
              <div className="1939 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                만 19세 ~ 39세
              </div>
            </div>
            <div className="Frame10453 justify-start items-start gap-5 inline-flex">
              <div className="w-12 text-black text-sm font-bold font-['Pretendard'] leading-tight">
                거주지 및 소득
              </div>
              <div className="20245319391984542005531502413708270 w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                모집공고일(2024.5.3.) 기준 아래 기준을 <br />
                모두 충족하는 자
                <br />
                가. 서울시에 주민등록이 등재된 19세~
                <br />
                39세 이하 미혼인 청년
                <br />※ 1984.5.4. ~ 2005.5.3. 출생
                <br />※ 혼인 중이 아닐 것 / 외국인 신청 불가
                <br />
                나. 세대원(신청자 포함) 전원이 무주택 <br />
                세대 구성원
                <br />
                다. 소득 및 자산기준: 아래 요건 중 하나에
                <br /> 해당하는 자
                <br />
                1) 전년도 도시근로자 월평균 소득 50% <br />
                이하인 자(자산기준 있음)
                <br />
                - 총 자산가액 2.41억 원 이하, 자동차가액
                <br /> 3,708만 원 이하인 자
                <br />
                2) 전년도 도시근로자 월평균 소득 70% <br />
                이하인 자(자산기준 없음)
              </div>
            </div>
            <div className="Frame10454 justify-start items-start gap-5 inline-flex">
              <div className="w-12 text-black text-sm font-bold font-['Pretendard'] leading-tight">
                학력
              </div>
              <div className="w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                제한없음
              </div>
            </div>
            <div className="Frame10455 justify-center items-start gap-5 inline-flex">
              <div className="w-12 text-black text-sm font-bold font-['Pretendard'] leading-tight">
                전공
              </div>
              <div className="w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                제한없음
              </div>
            </div>
            <div className="Frame10456 justify-center items-start gap-2 inline-flex">
              <div className="w-[60px] text-black text-sm font-bold font-['Pretendard'] leading-tight">
                취업 상태
              </div>
              <div className="w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                제한없음
              </div>
            </div>
            <div className="Frame10457 justify-center items-start gap-2 inline-flex">
              <div className="w-[60px] text-black text-sm font-bold font-['Pretendard'] leading-tight">
                특화 분야
              </div>
              <div className="w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                제한없음
              </div>
            </div>
            <div className="Frame10458 justify-center items-start gap-2 inline-flex">
              <div className="w-[60px] text-black text-sm font-bold font-['Pretendard'] leading-tight">
                참여 제한 대상
              </div>
              <div className="w-72 text-neutral-700 text-sm font-medium font-['Pretendard'] leading-tight">
                개별 공고 참조
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        <div className="w-full h-24 relative flex justify-center items-center">
          <Link href="https://m.blog.naver.com/gwanak_gu/223438600018" passHref>
            <div className="h-12 w-[346px] px-7 py-3 bg-blue-900 rounded-lg flex justify-center items-center cursor-pointer">
              <div className="text-white text-base font-semibold font-['Pretendard'] leading-normal">
                정책 상세보기
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetailsPage;
