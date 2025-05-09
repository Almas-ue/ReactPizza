import Sort from "@/components/ui/sort";
import CategoryBlock from "@/features/category/categoryBlock";

interface Props {
  className?: string;
}

const Categorias: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1 className="text-[36px] font-bold mt-10">Все пиццы</h1>
        <div className="flex justify-between items-center mt-5">
          <CategoryBlock />
          <Sort />
        </div>
      </div>
    </>
  );
};

export default Categorias;
