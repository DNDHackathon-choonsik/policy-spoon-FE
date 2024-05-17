import { twMerge } from "tailwind-merge";
import Image from "next/image";
import FABChat from "@/svgs/FABChat.svg";

interface BasicFabProps {
  _imageName?: "chat";
  _bottomNode?: React.ReactNode;
  _onClick(): void;
  className?: string;
}

const Fab = ({
  _imageName,
  _bottomNode,
  _onClick,
  className,
}: BasicFabProps) => {
  const fabClasses = twMerge(
    "align-center flex flex-col items-center",
    className
  );

  return (
    <>
      <div className="fixed bottom-[120px] right-[150px]">
        <button onClick={_onClick} className={fabClasses}>
          {_bottomNode && (
            <div className="flex flex-col items-center pt-1">
              <div className="align-center flex rounded-[27px] bg-[#3F65EA] px-4 py-2  text-[12px] font-bold text-white">
                {_bottomNode}
              </div>
              <div className="h-0 w-0 border-t-[10px] border-l-[10px] border-r-[10px] border-t-[#3F65EA] border-l-transparent border-r-transparent pb-2" />
            </div>
          )}
          <div
            className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#3F65EA]
        shadow-[rgba(0,_0,_0,_0.3)_0px_2px_20px_1px]"
          >
            <FABChat />
          </div>
        </button>
      </div>
    </>
  );
};
export default Fab;
