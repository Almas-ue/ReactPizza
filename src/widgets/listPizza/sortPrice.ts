interface SortPrice {
  minPrice: number;
  maxPrice: number;
  filterCard: any[];
}

const sortPrice = ({ minPrice, maxPrice, filterCard }: SortPrice) => {
  return filterCard.filter(
    (card: any) => card.price >= minPrice && card.price <= maxPrice
  );
};

export default sortPrice;
