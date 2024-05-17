import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ComponentProps<"div"> {}

const basicClasses = "bg-white rounded-md p-3";
const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <div className={twMerge(basicClasses, className)} {...rest}>
      {children}
    </div>
  );
};

export default Button;
