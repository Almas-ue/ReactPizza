import { Button } from "./button";
import { FC } from "react";

export type typeList = {
  img: string;
  name: string;
  category: string[];
  ingredient: string;
  price: number;
};

interface props {
  listProduct: typeList[];
  countList: number;
  category?: string;
}

const Card: FC<props> = ({ listProduct, countList }) => {
  return listProduct.map((card, index) => {
    if (index < countList)
      return (
        <div key={index} className="w-[285px] block">
          <a href="" className="bg-[#FFF7EE] px-9 py-6 rounded-2xl block">
            <img
              src={card.img}
              className="w-[210px] bg-[#FFF7EE]"
              alt="pizzaImage"
            />
          </a>
          <div className="mt-4">
            <h4 className="font-bold text-2xl text-black">{card.name}</h4>
            <p className="text-[#B1B1B1] text-[14px] mt-2 h-[63px] line-clamp-3 overflow-y-hidden">
              {card.ingredient}
            </p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-xl font-bold">от {card.price} ₽</p>
              <Button className="bg-primary font-semibold text-xs">
                Собрать
              </Button>
            </div>
          </div>
        </div>
      );
  });
};

export default Card;
