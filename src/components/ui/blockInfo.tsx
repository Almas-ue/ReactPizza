import { cn } from "@/lib/utils";
import { FC } from "react";

interface Blockprops {
  className?: string;
  children: React.ReactNode;
}

type SizeType = {
  miniSize?: boolean;
};

type isBorder = {
  border: boolean;
};

const BlockInfo: FC<Blockprops & SizeType> = ({
  children,
  className,
  miniSize,
}) => {
  return (
    <div
      className={cn(
        miniSize ? "w-[450px]" : "w-[752px]",
        "rounded-[30px] bg-white py-9",
        className
      )}
    >
      {children}
    </div>
  );
};

const HeaderBlockInfo: FC<Blockprops> = ({ children, className }) => {
  return (
    <div className={cn(className)}>
      <div className="px-[34px] pb-[34px]">{children}</div>
      <div className="border-b"></div>
    </div>
  );
};

const ContentBlockInfo: FC<Blockprops & isBorder> = ({
  children,
  className,
  border,
}) => {
  return (
    <>
      <div className={cn("px-9", className)}>{children}</div>
      {border ? <div className="border-b"></div> : ""}
    </>
  );
};

const TitleInfo: FC<Blockprops> = ({ className, children }) => {
  return (
    <h2 className={cn("text-2xl text-black font-bold", className)}>
      {children}
    </h2>
  );
};

export { BlockInfo, HeaderBlockInfo, ContentBlockInfo, TitleInfo };
