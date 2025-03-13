import Category from "@/components/ui/category";
import Container from "@/components/ui/container";
import Sort from "@/components/ui/sort";

const Categorias = () => {
  return (
    <>
      <Container>
        <h1 className="text-[36px] font-bold mt-10">Все пиццы</h1>
        <div className="flex justify-between items-center mt-5">
          <Category />
          <Sort />
        </div>
      </Container>
    </>
  );
};

export default Categorias;
