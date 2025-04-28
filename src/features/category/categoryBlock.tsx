import CategoryBtn from "@/components/ui/categoryBtn";
import { useCategory } from "@/hooks/useReducer";
import { cn } from "@/lib/utils";
import { cate, setCategory } from "@/store/category/catogoryRedux";
import { FC } from "react";
import { useDispatch } from "react-redux";

type props = {
  className?: string;
};

const CategoryBlock: FC<props> = ({ className }) => {
  const category = useCategory();
  const dispatch = useDispatch();

  return (
    <div
      className={cn(
        "inline-flex gap-1 p-[5px] rounded-2xl bg-[#F5F5F5]",
        className
      )}
    >
      {cate.map((name, index) => (
        <CategoryBtn
          key={index}
          name={name}
          active={category === name}
          FuncBtn={() => dispatch(setCategory(name))}
        />
      ))}
    </div>
  );
};

export default CategoryBlock;
