import { FC, useEffect, useState } from "react"
import { cn } from "@/lib/utils";
import { ChevronsLeft } from "lucide-react";

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
    const [pagesArr, setPages] = useState<any[]>([]);
    const lastPage: number = countPage;

    useEffect(() => {
        let newPages: number[] = [];
        if (currentPage < lastPage - 1) {
            if (currentPage > 1) {
                newPages.push(currentPage - 1);
            }
            newPages.push(currentPage, currentPage + 1);
            setPages(newPages)
        } else if (currentPage == lastPage) {
            setPages([lastPage - 1 - 1, lastPage - 1])
        }
    }, [currentPage])

    return (
        <Pagination className={className}>
            <PaginationContent>
                {
                    currentPage >= 4 ? (
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => paginate(1)} href="#">
                                <ChevronsLeft />
                            </PaginationLink>
                        </PaginationItem>

                    ) : null
                }
                <PaginationItem>
                    <PaginationPrevious
                        isActive={currentPage <= 1 ? false : true}
                        onClick={() => paginate((prev: number) => Math.max(prev - 1, 1))}
                        className={cn(currentPage === 1 ? "cursor-not-allowed hover:text-[#888888]" : "border border-primary text-white")}
                        href="#" />
                </PaginationItem>
                {
                    pagesArr && pagesArr.map((page) =>
                        <>
                            <PaginationItem
                                key={page}
                            >
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
                {
                    currentPage < lastPage - 1 - 1 ? (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : null
                }
                <PaginationItem>
                    <PaginationLink
                        isActive={currentPage === lastPage ? true : false}
                        className={cn(currentPage === lastPage ? "text-white" : "text-primary")}
                        onClick={() => paginate(lastPage)} href="#">
                        {lastPage}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        isActive={currentPage >= countPage ? false : true}
                        className={cn(currentPage < countPage ? "text-white border border-primary" : "cursor-not-allowed text-[#888888]")}
                        onClick={() => paginate((prev: number) => Math.max(prev + 1, 1))}
                        href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination >
    )
}

export default PaginationPages
