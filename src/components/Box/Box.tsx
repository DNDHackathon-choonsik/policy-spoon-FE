import { twMerge } from "tailwind-merge";

interface BoxProps extends React.ComponentProps<"div"> {
  // 향후 필요시 추가
}

const basicClasses = "bg-white rounded-md p-3";
const Box = ({ children, className, ...rest }: BoxProps) => {
  return (
    <div className={twMerge(basicClasses, className)} {...rest}>
      {children}
    </div>
  );
};

export default Box;
