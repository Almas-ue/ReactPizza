import BoxLabel from "./boxLabel";
import { Button } from "./button";
import { Input } from "./input";

const Filter = () => {
    return (
        <aside className="w-[245px]">
            <h3 className="font-bold text-2xl">Фильтрация</h3>
            <div className="mt-[30px] flex flex-col gap-6">
                <BoxLabel nameBox="Можно собирать" />
                <BoxLabel nameBox="Новинки" />
                <div className="border-b" />
                <div className="price-filter">
                    <p className="font-bold mb-4">Цена от и до: </p>
                    <div className=" flex gap-4">
                        <Input className="outline-none focus:outline-none w-[90px] h-10 " type="text" />
                        <Input className="outline-none w-[90px] h-10 " type="text" />
                    </div>
                </div>
                <div className="border-b" />
                <p className="font-bold">Ингредиенты: </p>
                <div className="ingredients flex flex-col gap-4">
                    <BoxLabel nameBox="Сырный соус" />
                    <BoxLabel nameBox="Моцарелла" />
                    <BoxLabel nameBox="Чеснок" />
                    <BoxLabel nameBox="Солённые огурчики" />
                    <BoxLabel nameBox="Красный лук" />
                    <BoxLabel nameBox="Томаты" />
                    <button className="inline-flex w-max text-primary hover:text-primary/70">+ Показать всё</button>
                </div>
                <Button className="rounded-[18px] text-base font-semibold h-[50px]">Применить</Button>
            </div>

        </aside>
    )
}

export default Filter
