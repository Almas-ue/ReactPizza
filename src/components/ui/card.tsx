import { Button } from "./button";
import { FC, useState } from "react";
import ImgSkeleton from "./imgSkeleton";
import { cn } from "@/lib/utils";

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
  link?: string;
  className?: string;
}

const Card: FC<props> = ({ index, countList, card, link, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (index >= countList) return null;

  return (
    <div key={index} className={cn("w-[285px] block", className)}>
      <a
        href={link}
        className="bg-[#FFF7EE] relative px-9 py-6 rounded-2xl block"
      >
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <ImgSkeleton />
          </div>
        )}
        <img
          key={card.img}
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
