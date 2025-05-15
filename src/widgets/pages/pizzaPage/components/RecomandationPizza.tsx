import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const testarr = [
  {
    id: 1,
    name: "Маргарита",
    ingredient:
      "Классическая Neapolitan pizza, с томатной начинкой, сыром Моцарелла, листьями базилика",
    price: 500,
    img: "https://pizzaitaly.com.ua/wp-content/uploads/2019/11/Margarita.jpg",
  },
  {
    id: 2,
    name: "Квadro",
    ingredient:
      "Пицца с начинкой из четырех видов сыра: Моцарелла, Пармезан, Рикотта, Горгонзола",
    price: 700,
    img: "https://pizzaitaly.com.ua/wp-content/uploads/2019/11/Kvadro.jpg",
  },
  {
    id: 3,
    name: "Прошутто",
    ingredient:
      "Пицца с начинкой из пряного сала, Моцареллы, листьев рока, помидора",
    price: 600,
    img: "https://pizzaitaly.com.ua/wp-content/uploads/2019/11/Proshutto.jpg",
  },
  {
    id: 4,
    name: "Кинг",
    ingredient:
      "Пицца с начинкой из нежного краба, Моцареллы, помидора, зелени",
    price: 800,
    img: "https://pizzaitaly.com.ua/wp-content/uploads/2019/11/King.jpg",
  },
];

const RecomandationPizza: FC<Props> = ({ className }) => {
  return (
    <>
      <div className="mt-20 pb-10">
        <h2 className="text-3xl">Рекомендуем</h2>
        <div className={cn("mt-7 flex gap-[25px]", className)}>
          {testarr.map((item, index) => (
            <Card key={item.name} keyArr={index} countList={2} card={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecomandationPizza;
