import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { listNav } from "./HeaderBtnNav";
import { Button } from "./button";
import { User } from "lucide-react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const NavigateBtnHeader: FC<Props> = ({ children, className }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Button
      onClick={() => {
        setVisible(!visible);
      }}
      className={cn("relative py-[22px] px-[14px] font-semibold")}
      variant="primary"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <User /> Профиль
      <div
        className={cn(
          `absolute top-full p-5} py-2`,
          visible ? "visible" : "invisible",
          className
        )}
      >
        <div
          className={cn(
            "rounded-[10px] pt-2 flex flex-col bg-white border border-[#F4F1EE] w-[130px] "
          )}
        >
          {listNav.map((item, index) => (
            <a
              key={index}
              className={cn(
                "text-center py-[8px] text-black hover:text-primary hover:bg-primary/10 font-semibold rounded-b-[10px]",
                item.styleLink
              )}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
          {children}
        </div>
      </div>
    </Button>
  );
};

export default NavigateBtnHeader;
