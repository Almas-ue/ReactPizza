import { FC, useState } from "react"
import { cn } from "@/lib/utils";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface props {
    className: string;
    countPage: number;
    currentPage: number;
    lastPage: number;
    paginate: Function;
}

const PaginationPages: FC<props> = ({ countPage, currentPage, lastPage, paginate, className }) => {
    const countPages: number = countPage;

    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        isActive={currentPage <= 1 ? false : true}
                        onClick={() => paginate((prev: number) => Math.max(prev - 1, 1))}
                        className={cn(currentPage === 1 ? "cursor-not-allowed hover:text-[#888888]" : "border border-primary text-primary")}
                        href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => paginate(1)} href="#" className="hover:text-primary hover:font-bold hover:border-primary">1</PaginationLink>
                </PaginationItem>
                {
                    currentPage >= 4 ? (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : null
                }
                {
                    
                }
                {
                    countPages >= 5 ? (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : null
                }
                <PaginationItem>
                    <PaginationLink onClick={() => paginate(lastPage)} href="#">{lastPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        isActive={currentPage >= lastPage ? false : true}
                        onClick={() => paginate((prev: number) => Math.max(prev + 1, 1))}
                        className={cn(currentPage < lastPage ? "border border-primary text-primary" : "cursor-not-allowed hover:text-[#888888]")}
                        href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationPages
