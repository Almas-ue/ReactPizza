interface SortIngredient {
  getIngredient: string[];
  filterCard: any[];
}

const sortIngredient = ({ getIngredient, filterCard }: SortIngredient) => {
  return filterCard.filter((card: any) =>
    getIngredient.some((ing: string) => card.ingredient.includes(ing))
  );
};

export default sortIngredient;
