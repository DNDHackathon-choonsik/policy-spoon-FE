import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import ReactQueryClientProvider from "./ReactQueryClientProvider";

const mainFont = localFont({
  src: "../../public/font/PretendardVariable.ttf",
  display: "swap",
});

export const metadata = {
  title: "정책 스푼",
  description: "DND 해커톤 - 복잡한 정책 정보를 청년들에게 쉽게 떠먹여주자!",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko" className="h-screen w-screen bg-white">
      <body
        className={twMerge(
          `${mainFont.className}`,
          "relative m-auto h-full min-h-full min-w-[378px] max-w-[378px] bg-white"
        )}
      >
        <ReactQueryClientProvider>
          {children}
          <div id="modal-root" className="z-40 " />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
