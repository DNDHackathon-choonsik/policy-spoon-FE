"use client";
import Logo from "@/svgs/spoonLogo.svg";
import BackSpaceArrow from "@/svgs/BackSpaceArrow.svg";
import TopBottomBarTemplate from "@/components/Template/TopBottomBarPage";
import BasicInput from "@/components/Input/BasicInput";
import Search from "@/svgs/search.svg";
import Button from "@/components/Button/Button";
import Box from "@/components/Box/Box";
import { useEffect, useState } from "react";
import { getSearch } from "@/apis/api";
import { useRouter } from "next/navigation";

const Page = ({ searchParams }: { searchParams: { id: string } }) => {
  const router = useRouter();
  const search = searchParams.id;
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const [data, setData] = useState<any>();

  const fetchData = async (query: string) => {
    const response = await getSearch(query);
    setData(response);
  };

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search]);

  const handleSubmit = async () => {
    router.push(`/search?id=${searchValue}`);
  };

  const highlightSearchTerm = (text: string, term: string) => {
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="text-[#3F65EA]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <TopBottomBarTemplate
        _topNode={
          <div className="relative flex h-full w-full items-center bg-white">
            <div className="absolute left-[22px] [&>svg>path]:stroke-black">
              <BackSpaceArrow onClick={() => router.back()} />
            </div>
            <div className="flex flex-1 justify-center text-[16px] font-bold text-primary-300">
              <Logo width={70} />
            </div>
          </div>
        }
        _bottomNode={<></>}
        _contentDivProps={{ className: "bg-white" }}
      >
        <h1 className="font-semibold text-[22px] py-2">검색결과</h1>

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

        <p className="py-4 text-[16px] font-medium text-[#787878]">
          '{search}'가(이) 포함된 결과입니다.
        </p>
        {data &&
          data.map((item: any) => (
            <>
              <div className="flex justify-between items-center border-b-2 py-4">
                <div className="flex flex-col">
                  <h1 className="text-[18px] font-semibold">
                    {highlightSearchTerm(item.title, search)}
                  </h1>
                  <p>{item.category}</p>
                </div>
                <Box className="flex text-[12px] font-medium justify-center items-center rounded-[8px] w-[73px] h-[32px] text-[#787878] ring-2 ring-[#F4F4F5]">
                  상세보기
                </Box>
              </div>
            </>
          ))}
      </TopBottomBarTemplate>
    </>
  );
};
export default Page;
