import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./menubar";
import { useContext } from "react";
import { SortContext, sortList } from "@/providers/sortCard";

const Sort = () => {
  const sortData = useContext<any>(SortContext);
  const [sortName, setSortName]: any = sortData ? sortData : " ";

  return (
    <Menubar className="border-0 bg-[#F5F5F5] rounded-2xl h-[55px]">
      <MenubarMenu>
        <MenubarTrigger className="py-4 font-semibold text-base">
          <ChevronsUpDown className="size-5 pr-1" />
          Сортировка: <span className="text-[#FE5F00] pl-2">{sortName}</span>
        </MenubarTrigger>
        <MenubarContent>
          {sortList.map((item) => {
            return (
              <MenubarItem onClick={() => setSortName(item)} key={item}>
                <ArrowUp className="size-5 pr-1" />
                По {item}
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Sort;
