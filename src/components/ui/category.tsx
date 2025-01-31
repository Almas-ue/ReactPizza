import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface CategoryName {
    categoryList: string[];
}

const Category: FC<CategoryName> = ({ categoryList }) => {
    const [isActive, setActive] = useState<string>("Все");
    return (
        <div className="inline-flex gap-1 p-[5px] rounded-2xl bg-[#F5F5F5]">
            {categoryList && categoryList.map((name, index) => (
                <>
                    <button
                        key={index}
                        onClick={() => setActive(name)}
                        className={cn("px-6 py-3 rounded-2xl font-semibold", isActive === name ? "bg-white text-[#FE5F00]" : "")}>
                        {name}
                    </button >
                </>
            ))
            }
        </div >

    )
}

export default Category
