import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

const PaginationPages = () => {
    const [defPage, setDefPage] = useState(1);
    return (
        <Pagination className="">
            <PaginationContent>
                <PaginationItem className="">
                    <PaginationPrevious isActive={defPage === 1 ? false : true} href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink isActive={false} href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationPages
