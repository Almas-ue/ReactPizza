import { Button } from "./button";
import { FC, useState } from "react";
import ImgSkeleton from "./imgSkeleton";

export type typeList = {
  img: string;
  name: string;
  category: string[];
  ingredient: string;
  price: number;
};

interface props {
  countList: number;
  index: number;
  card: typeList;
  category?: string;
}

const Card: FC<props> = ({ index, countList, card }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (index >= countList) return null;

  return (
    <div key={index} className="w-[285px] block">
      <a href="" className="bg-[#FFF7EE] px-9 py-6 rounded-2xl block">
        <img
          src={card.img}
          className="w-[210px] h-[212px] bg-[#FFF7EE]"
          alt="pizzaImage"
          onLoad={() => setIsLoading(false)}
        />
      </a>
      <div className="mt-4">
        <h4 className="font-bold text-2xl text-black">{card.name}</h4>
        <p className="text-[#B1B1B1] text-[14px] mt-2 h-[63px] line-clamp-3 overflow-y-hidden">
          {card.ingredient}
        </p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-xl font-bold">от {card.price} ₽</p>
          <Button className="bg-primary font-semibold text-xs">Собрать</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
