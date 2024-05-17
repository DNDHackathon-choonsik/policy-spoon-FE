"use client";
import Image from "next/image";
import Review1 from "@/svgs/Review1.svg";
import Review2 from "@/svgs/Review2.svg";
import Review3 from "@/svgs/Review3.svg";
import Check from "@/svgs/Check.svg";
import Link from "next/link";

const DetailsPage = () => {
  return (
    <div className="w-96 h-96 relative bg-white">
      <div className="Frame10419 w-96 h-96 left-0 top-0 absolute bg-white">
        <Review1 className="w-full" />
        <div className="Group10445 w-60 h-20 left-[16px] top-[280px] absolute">
          <div className="px-2 py-px left-0 top-0 absolute bg-orange-100 rounded justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-orange-400 text-xs font-medium font-['Pretendard']">
              복지∙문화
            </div>
          </div>

          <div className="Group10442 w-60 h-14 left-0 top-[24px] absolute">
            <div className="left-0 top-0 absolute text-white text-2xl font-bold font-['Pretendard'] leading-9">
              청년 통장 발급후기
            </div>
            <div className="0518 left-[185px] top-[16px] absolute text-stone-300 text-xs font-normal font-['Pretendard'] leading-none">
              2024.05.18
            </div>
            <div className="left-0 top-[40px] absolute text-stone-300 text-xs font-normal font-['Pretendard'] leading-none">
              아기호랑이
            </div>
          </div>
        </div>
      </div>
      <div className="Group10443 w-80 h-36 left-[16px] top-[398px] absolute">
        <Link
          href="https://www.gwanak.go.kr/site/gwanak/04/10403060300002016051204.jsp"
          passHref
        >
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

      <div className="BookmarkBookmarksTagsFavorite w-5 h-5 left-[342px] top-[63px] absolute" />
      <div className="w-80 h-52 left-[16px] top-[582px] absolute text-black text-base font-normal font-['Pretendard'] leading-normal">
        안녕하세요!
        <br />
        오늘은 관악구에서 청년 통장을 지원받은 후기를 남겨보려고 합니다~ 항상
        눈여겨만 봤었던 지원 정책을 드디어 제가 받아보게 되어서 감회가
        새롭습니다.
        <br />
        <div>
          <Review2 className="w-full" />
        </div>
        <br />
        아무래도 준비해야 할 서류들도 많고 주민센터에도 따로 방문을 해야했어서
        귀찮기도 했는데요, 다른 분들은 저 처럼 번거로운 상황이 발생하지 않도록
        제가 나름 팁도 작성해보려고 합니다..
      </div>
      <div className="w-80 h-24 left-[16px] top-[1023px] absolute text-black text-base font-normal font-['Pretendard'] leading-normal">
        우선, 관악구 청년 정책 사이트에 방문하게 되면 저런 자세한 정보를 확인해
        볼 수 있는데요! 기본 적인 정보 같은 경우에는 따로 작성해두지 않을테니
        홈페이지에 들어가서 확인해보시길 바랍니다~!
        <br />
        <div>
          <Review3 className="w-full" />
        </div>
      </div>

      <div className="w-80 h-36 left-[16px] top-[1610px] absolute text-black text-base font-normal font-['Pretendard'] leading-normal">
        우선 위 사진은 청년통장 가입 신청서 입니다. 보시면 되게 작성해야 할
        정보들이 많은 걸 확인할 수 있습니다.
        <br />
        하지만 꼼꼼하게 다 작성하셔야합니다!
        <br />
        다 작성하시면 지원준비는 모두 끝이 납니다!
        <br />
        <br />
        그럼 여러분들도 꼭 지원을 받으시길 바랍니다~!
      </div>
    </div>
  );
};

export default DetailsPage;
