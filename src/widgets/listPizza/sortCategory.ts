const getCategory = (category: string, pizza: any[]) => {
  return category !== "Все" && pizza.length > 0
    ? pizza.filter(
        (card: { category: string[] }) =>
          Array.isArray(card.category) &&
          card.category.some((c: string) => category.includes(c))
      )
    : pizza.slice();
};

export default getCategory;
