import { Minus, Plus } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface Props {
  text: number;
  firstBtn: () => void;
  secondBtn: () => void;
  className?: string;
}

const PlusMinusBtn: React.FC<Props> = ({
  text,
  className,
  firstBtn,
  secondBtn,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Button
        variant={"outline"}
        className={cn("rounded-[10px] p-0", className)}
        onClick={firstBtn}
      >
        <Minus />
      </Button>
      <p className="font-bold">{text}</p>
      <Button
        variant={"outline"}
        onClick={secondBtn}
        className={cn("rounded-[10px] p-0", className)}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default PlusMinusBtn;
