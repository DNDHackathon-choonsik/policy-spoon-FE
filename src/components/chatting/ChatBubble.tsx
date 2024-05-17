import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

type Props = {
  _from: "me" | "other";
  _text: string;
  _time: Date;
};

const ChatBubble = ({ _from, _text, _time }: Props) => {
  return (
    <div
      className={twMerge(
        "relative w-fit px-4 py-2 font-noto text-[13px] drop-shadow-sm",
        _from === "me"
          ? "rounded-b-xl rounded-tl-3xl bg-[#3F65EA] text-white"
          : "rounded-b-xl rounded-tr-3xl bg-white"
      )}
    >
      {_text}
      <span
        className={twMerge(
          "absolute bottom-0 text-white text-xs",
          _from === "me"
            ? "-left-2 -translate-x-full"
            : "-right-2 translate-x-full text-gray-700"
        )}
      >
        {dayjs(_time).format("HH:mm")}
      </span>
    </div>
  );
};

export default ChatBubble;
