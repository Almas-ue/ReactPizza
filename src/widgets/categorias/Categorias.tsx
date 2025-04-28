import Container from "@/components/ui/container";
import Sort from "@/components/ui/sort";
import CategoryBlock from "@/features/category/categoryBlock";

const Categorias = () => {
  return (
    <>
      <Container>
        <h1 className="text-[36px] font-bold mt-10">Все пиццы</h1>
        <div className="flex justify-between items-center mt-5">
          <CategoryBlock />
          <Sort />
        </div>
      </Container>
    </>
  );
};

export default Categorias;
