import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  name: string;
  FuncBtn?: () => void;
  active?: boolean;
  className?: string;
}

const CategoryBtn: FC<Props> = ({ name, FuncBtn, active, className }) => {
  return (
    <button
      onClick={FuncBtn}
      className={cn(
        "px-6 py-3 rounded-2xl font-semibold ",
        active && "bg-white text-primary shadow-sm",
        className
      )}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
