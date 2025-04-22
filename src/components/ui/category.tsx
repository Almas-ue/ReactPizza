import { categoryNames } from "@/providers/categoryProvider";
import { CategoryState } from "@/state/categoryState";

const Category = () => {
  const categoryList = categoryNames;
  const btnStyle = "px-6 py-3 rounded-2xl font-semibold";
  const activeCatgory = CategoryState((state) => state.stateCategory);
  const setactiveCatgory = CategoryState((state) => state.setActiveId);

  return (
    <div className="inline-flex gap-1 p-[5px] rounded-2xl bg-[#F5F5F5]">
      {categoryList &&
        categoryList.map((name, index) => (
          <button
            key={index}
            onClick={() => setactiveCatgory(name)}
            className={`${btnStyle} ${
              activeCatgory === name ? "bg-white text-primary shadow-sm" : ""
            }`}
          >
            {name}
          </button>
        ))}
      <button className={btnStyle}>Ещё</button>
    </div>
  );
};

export default Category;
