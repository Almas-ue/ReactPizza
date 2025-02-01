import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "./menubar";
import { useState } from "react";

const Sort = () => {
    const [sortName, setSortName] = useState<string>("Рейтингу");

    return (
        <Menubar className="border-0 bg-[#F5F5F5] rounded-2xl h-[55px]">
            <MenubarMenu>
                <MenubarTrigger className="py-4 font-semibold text-base">
                    <ChevronsUpDown className="size-5 pr-1" />Сортировка: <span className="text-[#FE5F00] pl-2">{sortName}</span>
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onClick={() => setSortName("Возрастанию")}>
                        <ArrowUp className="size-5 pr-1" /> По возрастанию
                    </MenubarItem>
                    <MenubarItem onClick={() => setSortName("Убыванию")}>
                        <ArrowDown className="size-5 pr-1" /> По убыванию
                    </MenubarItem>
                    <MenubarItem onClick={() => setSortName("Рейтингу")}>
                        По рейтингу</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    )
}

export default Sort
