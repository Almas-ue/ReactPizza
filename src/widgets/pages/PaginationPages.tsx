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
    lastPage: number;
}

const PaginationPages: FC<props> = ({ countPage, lastPage, className }) => {
    const [defPage, setDefPage] = useState<number>(1);
    const countPages: number = countPage;

    return (
        <Pagination className={className}>
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
                {
                    countPages > 4 ? (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : null
                }
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
