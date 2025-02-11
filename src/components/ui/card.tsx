import { Button } from "./button"
import { FC } from "react";

type typeList = {
    img: string,
    name: string,
    ingredient: string,
    price: number,
}

interface props {
    listProduct: typeList[];
    countList: number;
}

const Card: FC<props> = ({ listProduct, countList }) => {
    return (
        listProduct.map((item, index) => {
            if (index < countList) return (
                <div key={index} className="w-[285px] block">
                    <a href="" className="bg-[#FFF7EE] px-9 py-6 rounded-2xl block">
                        <img src={item.img} className="w-[210px] bg-[#FFF7EE]" alt="pizzaImage" />
                    </a>
                    <div className="mt-4">
                        <h4 className="font-bold text-2xl text-black">{item.name}</h4>
                        <p className="text-[#B1B1B1] text-[14px] mt-2 h-[63px] line-clamp-3 overflow-y-hidden">{item.ingredient}</p>
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-xl font-bold">от {item.price} ₽</p>
                            <Button className="bg-primary font-semibold text-xs">Собрать</Button>
                        </div>
                    </div>
                </div>
            )
        }
        )
    )
}

export default Card
