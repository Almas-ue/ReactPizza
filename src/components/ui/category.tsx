import { CategoryContext } from "@/providers/categoryProvider";
import { useContext } from "react";
import { categoryNames } from "@/providers/categoryProvider";

const Category = () => {
  const categoryData = useContext(CategoryContext);

  const [category, setCategory]: any = categoryData ? categoryData : " ";
  const categoryList = categoryNames;
  const btnStyle = "px-6 py-3 rounded-2xl font-semibold";

  return (
    <div className="inline-flex gap-1 p-[5px] rounded-2xl bg-[#F5F5F5]">
      {categoryList &&
        categoryList.map((name, index) => (
          <button
            key={index}
            onClick={() => setCategory(name)}
            className={`${btnStyle} ${
              category === name ? "bg-white text-primary shadow-sm" : ""
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
