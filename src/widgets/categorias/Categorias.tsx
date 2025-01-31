import Category from '@/components/ui/category';
import Container from '@/components/ui/container';
import Sort from '@/components/ui/sort';

const Categorias = () => {
    const names = ["Все", "Мясные", "Острые", "Сладкие", "Веган", "С курицей"]
    return (
        <>
            <Container>
                <h1 className="text-[36px] font-bold mt-10">Все пиццы</h1>
                <div className="flex justify-between mt-5">
                    <Category categoryList={names} />
                    <Sort />
                </div>
            </Container>
        </>
    )
}

export default Categorias
