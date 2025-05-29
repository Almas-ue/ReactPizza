import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface Props {
  text: number;
  MinusBtn: (obj?: any) => void;
  PlusdBtn: (obj?: any) => void;
  className?: string;
}

const PlusMinusBtn: React.FC<Props> = ({
  text,
  className,
  MinusBtn,
  PlusdBtn,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Button
        variant={"outline"}
        className={cn("rounded-[10px] p-0", className)}
        onClick={MinusBtn}
        disabled={text <= 1}
      >
        <Minus />
      </Button>
      <p className="font-bold">{text}</p>
      <Button
        variant={"outline"}
        onClick={PlusdBtn}
        className={cn("rounded-[10px] p-0", className)}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default PlusMinusBtn;
