import { FC, useState } from "react";

interface CategoryName {
    categoryList: string[];
}

const Category: FC<CategoryName> = ({ categoryList }) => {
    const [isActive, setActive] = useState<string>("Все");
    const btnStyle = "px-6 py-3 rounded-2xl font-semibold";

    return (
        <div className="inline-flex gap-1 p-[5px] rounded-2xl bg-[#F5F5F5]">
            {categoryList && categoryList.map((name, index) => (
                <>
                    <button
                        key={index}
                        onClick={() => setActive(name)}
                        className={`${btnStyle} ${isActive === name ? "bg-white text-primary shadow-sm" : ""}`}>
                        {name}
                    </button >
                </>
            ))
            }
            <button className={`${btnStyle}`}>Ещё</button>
        </div >
    )
}

export default Category
