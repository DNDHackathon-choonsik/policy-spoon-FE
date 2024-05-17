import React from "react";
import BotProfile from "@/svgs/BotProfile.svg";

type Props = {
  _profileSrc: string;
  _name: string;
  children?: React.ReactNode;
};

const OtherChatBox = ({ children, _profileSrc, _name }: Props) => {
  return (
    <div className="flex gap-3">
      <BotProfile />
      <div className="flex flex-col gap-2">
        <div className="font-noto text-xs">{_name}</div>
        {children}
      </div>
    </div>
  );
};

export default OtherChatBox;
