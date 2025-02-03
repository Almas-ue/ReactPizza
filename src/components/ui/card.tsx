import { Button } from "./button"
import img from "./../../../public/images/pizza/pizzaTest.svg"
import { FC } from "react";

type typeList = {
    img: any,
    name: string,
    ingredient: string,
    price: number,
}

interface props {
    listProduct: typeList[];
}

const Card: FC<props> = ({ listProduct }) => {
    return (
        listProduct.map((item, index) => (
            <a key={index} href="" className="w-[285px] block">
                <div className="bg-[#FFF7EE] px-9 py-6 rounded-2xl">
                    <img src={item.img} className="w-[210px] bg-[#FFF7EE]" alt="pizzaImage" />
                </div>
                <div className="mt-4">
                    <h4 className="font-bold text-2xl text-black">{item.name}</h4>
                    <p className="text-[#B1B1B1] text-[14px] mt-2 h-[63px] line-clamp-3 overflow-y-hidden">{item.ingredient}</p>
                    <div className="flex justify-between mt-3">
                        <p className="text-xl font-bold">от {item.price} P</p>
                        <Button className="bg-primary font-semibold text-xs">Собрать</Button>
                    </div>
                </div>
            </a>
        ))
    )
}

export default Card
