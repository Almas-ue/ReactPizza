import { FC } from "react";

interface CategoryName {
    categoryList: string[];
}

const Category: FC<CategoryName> = ({ categoryList }) => {
    return (
        <div className="inline-flex gap-1 p-[5px] rounded-2xl bg-[#F5F5F5]">
            {categoryList && categoryList.map((name, index) => (
                <>
                    <button key={index + 1} className="px-6 py-3 rounded-2xl bg-white text-[#FE5F00]">{name}</button>
                </>
            ))
            }
        </div>

    )
}

export default Category
