"use client";

import Image from "next/image";
import Review_1 from "@/svgs/Review_1.svg";
import Review_2 from "@/svgs/Review_2.svg";
import Review_3 from "@/svgs/Review_3.svg";
import Check from "@/svgs/Check.svg";
import Link from "next/link";
import BookMark from "@/svgs/BookMark.svg";
import GoBack from "@/svgs/goback.svg";
import BookMarked from "@/svgs/BookMarked.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getReview } from "@/apis/api";

interface ReviewData {
  category: string;
  reviewTitle: string;
  createdDate: string;
  writer: string;
  link: string;
  tips: string;
  content: string;
}

const ReviewDetailsPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const router = useRouter();

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReview();
      data && setReviewData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  if (!reviewData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full relative bg-white">
      <div className="Frame10419 w-full h-full left-0 top-0 absolute bg-white">
        <div
          className="absolute top-[16px] left-[16px] cursor-pointer"
          onClick={handleGoBack}
        >
          <GoBack className="w-6 h-6" />
        </div>
        <div
          className="absolute top-[16px] right-[16px] cursor-pointer"
          onClick={handleBookmarkClick}
        >
          {isBookmarked ? (
            <BookMarked className="w-6 h-6" />
          ) : (
            <BookMark className="w-6 h-6" />
          )}
        </div>
        <Review_1 className="w-full" />
        <div className="Group10445 w-60 h-20 left-[16px] top-[280px] absolute">
          <div className="px-2 py-px left-0 top-0 absolute bg-orange-100 rounded justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-orange-400 text-xs font-medium font-['Pretendard']">
              {reviewData.category}
            </div>
          </div>
          <div className="Group10442 w-60 h-14 left-0 top-[24px] absolute">
            <div className="left-0 top-0 absolute text-white text-2xl font-bold font-['Pretendard'] leading-9">
              {reviewData.reviewTitle}
            </div>
            <div className="0518 left-[185px] top-[16px] absolute text-stone-300 text-xs font-normal font-['Pretendard'] leading-none">
              {reviewData.createdDate}
            </div>
            <div className="left-0 top-[40px] absolute text-stone-300 text-xs font-normal font-['Pretendard'] leading-none">
              {reviewData.writer}
            </div>
          </div>
        </div>
      </div>
      <div className="Group10443 w-80 h-36 left-[16px] top-[398px] absolute">
        {reviewData.link ? (
          <Link href={reviewData.link} passHref>
            <div className="ButtonOutlinedPrimary w-80 h-10 px-5 py-2 left-0 top-0 absolute rounded-lg border border-blue-900 flex justify-center items-center gap-2 cursor-pointer">
              <div className="Content flex justify-center items-center gap-1">
                <div className="text-blue-900 text-base font-semibold font-['Pretendard'] leading-snug">
                  으뜸 관악 청년 통장 지원
                </div>
              </div>
              <div className="Content flex justify-center items-center gap-1">
                <div className="text-neutral-400 text-base font-semibold font-['Pretendard'] leading-snug">
                  자세히보기
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="ButtonOutlinedPrimary w-80 h-10 px-5 py-2 left-0 top-0 absolute rounded-lg border border-blue-900 flex justify-center items-center gap-2 cursor-pointer">
            <div className="Content flex justify-center items-center gap-1">
              <div className="text-blue-900 text-base font-semibold font-['Pretendard'] leading-snug">
                으뜸 관악 청년 통장 지원
              </div>
            </div>
            <div className="Content flex justify-center items-center gap-1">
              <div className="text-neutral-400 text-base font-semibold font-['Pretendard'] leading-snug">
                자세히보기
              </div>
            </div>
          </div>
        )}
        <div className="Button w-auto h-auto px-3 py-1 left-0 top-[60px] absolute bg-violet-100 rounded-lg flex justify-center items-center">
          <div className="Content flex justify-center items-center gap-1.5">
            <div className="text-blue-600 text-sm font-bold font-['Pretendard'] leading-snug">
              이런 걸 준비하면 좋아요
            </div>
            <Check />
          </div>
        </div>
        <div className="left-0 top-[105px] absolute text-black text-sm font-normal font-['Pretendard'] leading-tight">
          ∙ 주민등록등복(초본)
          <br />∙ 신분증(주민센터 제출용)
        </div>
      </div>
      <div className="Line2 w-80 h-px left-[16px] top-[562px] absolute border border-neutral-200"></div>
      <div className="w-80 h-52 left-[16px] top-[582px] absolute text-black text-base font-normal font-['Pretendard'] leading-normal">
        {reviewData.content}
      </div>
      <div className="w-80 h-24 left-[780px] top-[1023px] absolute text-black text-base font-normal font-['Pretendard'] leading-normal">
        <div>
          <Review_3 className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsPage;
