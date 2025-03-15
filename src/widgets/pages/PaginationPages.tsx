import { FC, useEffect, useState } from "react";
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
} from "@/components/ui/pagination";

interface props {
  className: string;
  countPage: number;
  currentPage: number;
  paginate: Function;
}

const PaginationPages: FC<props> = ({
  countPage,
  currentPage,
  paginate,
  className,
}) => {
  const [pagesArr, setPages] = useState<number[]>([]);
  const lastPage: number = countPage;

  useEffect(() => {
    let newPages: number[] = [];

    if (countPage <= 5) {
      newPages = Array.from({ length: countPage }, (_, i) => i + 1);
    } else {
      switch (currentPage) {
        case 1:
          newPages = [1, 2, 3];
          break;
        case lastPage:
          newPages = [lastPage - 1];
          break;
        case lastPage - 3:
          newPages.push(
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2
          );
          break;
        default:
          newPages.push(currentPage - 1, currentPage);
          currentPage < lastPage - 1 ? newPages.push(currentPage + 1) : null;
          break;
      }
    }

    setPages(newPages);
  }, [currentPage, countPage]);

  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage >= 3 && countPage > 5 && (
          <PaginationItem>
            <PaginationLink
              onClick={currentPage > 1 ? () => paginate(1) : undefined}
              href="#"
            >
              <ChevronsLeft />
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationPrevious
            isActive={currentPage > 1}
            onClick={() => paginate((prev: number) => Math.max(prev - 1, 1))}
            className={cn(
              currentPage === 1
                ? "cursor-not-allowed hover:text-[#888888]"
                : "border border-primary text-white"
            )}
            href="#"
          />
        </PaginationItem>

        {pagesArr.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              className={cn(
                currentPage === page ? "text-white" : "text-primary"
              )}
              onClick={() => paginate(page)}
              href="#"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < lastPage - 3 && countPage > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {countPage > 5 && (
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === lastPage}
              className={cn(
                currentPage === lastPage ? "text-white" : "text-primary"
              )}
              onClick={() => paginate(lastPage)}
              href="#"
            >
              {lastPage}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            isActive={currentPage < countPage}
            className={cn(
              currentPage < countPage
                ? "text-white border border-primary"
                : "cursor-not-allowed text-[#888888]"
            )}
            onClick={() =>
              paginate((prev: number) => Math.min(prev + 1, lastPage))
            }
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPages;
