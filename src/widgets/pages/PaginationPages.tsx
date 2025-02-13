import { FC } from "react"
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
    paginate: Function;
}

const PaginationPages: FC<props> = ({ countPage, currentPage, paginate, className }) => {
    const pagesArr: number[] = [];

    for (let i = 1; i <= countPage; i++) {
        pagesArr.push(i);
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        isActive={currentPage <= 1 ? false : true}
                        onClick={() => paginate((prev: number) => Math.max(prev - 1, 1))}
                        className={cn(currentPage === 1 ? "cursor-not-allowed hover:text-[#888888]" : "border border-primary text-white")}
                        href="#" />
                </PaginationItem>
                {
                    pagesArr.map((page) =>
                        <>
                            <PaginationItem>
                                {
                                    currentPage >= 4 && page > 1 ? (
                                        <PaginationEllipsis />
                                    ) : null
                                }
                            </PaginationItem>
                            <PaginationItem>
                                {
                                    page >= 5 ? (
                                        <PaginationEllipsis />
                                    ) : null
                                }
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    isActive={currentPage === page ? true : false}
                                    className={cn(currentPage === page ? "text-white" : "text-primary")}
                                    onClick={() => paginate(page)} href="#">
                                    {page}
                                </PaginationLink>
                            </PaginationItem>

                        </>
                    )
                }
                <PaginationItem>
                    <PaginationNext
                        isActive={currentPage >= countPage ? false : true}
                        onClick={() => paginate((prev: number) => Math.max(prev + 1, 1))}
                        className={cn(currentPage < countPage ? "text-white border border-primary" : "cursor-not-allowed text-[#888888]")}
                        href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationPages
