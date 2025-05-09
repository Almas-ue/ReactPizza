import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./menubar";
import { useDispatch } from "react-redux";
import { useSort } from "@/hooks/useReducer";
import { ListSort, setSort } from "@/store/sortState";

const Sort = () => {
  const nameSort = useSort();
  const dispatch = useDispatch();

  return (
    <Menubar className="border-0 bg-[#F5F5F5] rounded-2xl h-[55px]">
      <MenubarMenu>
        <MenubarTrigger className="py-4 font-semibold text-base">
          <ChevronsUpDown className="size-5 pr-1" />
          Сортировка: <span className="text-[#FE5F00] pl-2">{nameSort}</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => dispatch(setSort(ListSort.DEFAULT))}>
            <ChevronsUpDown className="size-5 pr-1" />
            По {ListSort.DEFAULT}
          </MenubarItem>
          <MenubarItem onClick={() => dispatch(setSort(ListSort.DOWN))}>
            <ArrowDown className="size-5 pr-1" />
            По {ListSort.DOWN}
          </MenubarItem>
          <MenubarItem onClick={() => dispatch(setSort(ListSort.UP))}>
            <ArrowUp className="size-5 pr-1" />
            По {ListSort.UP}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Sort;
