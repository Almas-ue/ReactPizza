import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "./menubar";

const Sort = () => {
    return (
        <div className="bg-[#F5F5F5] ">
            <Menubar className="p-0 border-0 bg-[#F5F5F5]">
                <MenubarMenu>
                    <MenubarTrigger className=" rounded-2xl">
                        <ChevronsUpDown className="size-5 pr-1" />Сортировка: <span className="text-[#FE5F00] pl-2">Рейтингу</span>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <ArrowUp className="size-5 pr-1" /> По возрастанию
                        </MenubarItem>
                        <MenubarItem>
                            <ArrowDown className="size-5 pr-1" /> По убыванию
                        </MenubarItem>
                        <MenubarItem>По рейтингу убывания</MenubarItem>
                        <MenubarItem>По рейтингу возрастанию</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </div>
    )
}

export default Sort
