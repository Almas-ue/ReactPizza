import { Button } from "./button";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import ImgSkeleton from "./imgSkeleton";
import { Link } from "react-router-dom";
import ImageBlock from "./imageBlock";

export type typeList = {
  id: number;
  img: string;
  name: string;
  category?: string[];
  ingredient: string;
  price: number;
};

interface props {
  countList: number;
  keyArr: number;
  card: typeList;
  category?: string;
  onClick?: () => void;
  className?: string;
}

const Card: FC<props> = ({ keyArr, countList, card, onClick, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (keyArr >= countList) return null;

  return (
    <div key={keyArr} className={cn("w-[285px] block", className)}>
      <Link to={`/pizza/${card.id}`} className="bg-[#FFF7EE] relative">
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <ImgSkeleton />
          </div>
        )}
        {/* <img
          key={card.img}
          src={card.img}
          className="w-[210px] h-[212px] bg-[#FFF7EE]"
          alt="pizzaImage"
          onLoad={() => setIsLoading(false)}
        /> */}
        <ImageBlock img={card.img} alt={card.name} imgSetting={setIsLoading} />
      </Link>
      <div className="mt-4">
        <h4 className="font-bold text-2xl text-black">{card.name}</h4>
        <p className="text-[#B1B1B1] text-[14px] mt-2 h-[63px] line-clamp-3 overflow-y-hidden">
          {card.ingredient}
        </p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-xl font-bold">от {card.price} ₽</p>
          <Button
            className="bg-primary font-semibold text-xs"
            onClick={onClick}
          >
            Собрать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
