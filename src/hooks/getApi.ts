import { apiConnect } from "@/api/apiPizza";
import { useEffect, useState } from "react";

export const getPizza = () => {
  const [pizza, setPizza] = useState<any>([]);

  useEffect(() => {
    apiConnect("pizza").then((data) => setPizza(data));
  }, []);

  return pizza;
};

export const getIngredient = () => {
  const [ingredient, setIngredient] = useState<any>([]);

  useEffect(() => {
    apiConnect("ingredients").then((data) => setIngredient(data));
  }, []);

  return ingredient;
};
