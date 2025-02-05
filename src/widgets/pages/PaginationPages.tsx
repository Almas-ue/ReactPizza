import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils";
import { useState } from "react"

const PaginationPages = () => {
    const [defPage, setDefPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(5);

    return (
        <Pagination className="">
            <PaginationContent>
                <PaginationItem className="">
                    <PaginationPrevious
                        isActive={defPage <= 1 ? false : true}
                        className={cn(defPage === 1 ? "cursor-not-allowed hover:text-[#888888]" : "border border-primary text-primary")}
                        href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => setDefPage(1)} href="#" className="hover:text-primary hover:font-bold hover:border-primary">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => setDefPage(lastPage)} href="#">{lastPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        isActive={defPage >= lastPage ? false : true}
                        className={cn(defPage < lastPage ? "border border-primary text-primary" : "cursor-not-allowed hover:text-[#888888]")}
                        href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationPages
