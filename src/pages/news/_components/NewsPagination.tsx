import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type Props = {
  pageNumber: number;
  totalPages: number;
};

const NewsPagination = ({ pageNumber, totalPages }: Props) => {
  return (
    <Pagination className="mt-20">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pageNumber === 1}
            tabIndex={pageNumber === 1 ? -1 : undefined}
            className={cn(
              pageNumber === 1 ? "pointer-events-none opacity-50" : undefined,
            )}
            href={cn(pageNumber > 1 ? `/news?page=${pageNumber - 1}` : "")}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={`/news?page=${i + 1}`}
              isActive={i + 1 === pageNumber}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            aria-disabled={pageNumber === totalPages}
            tabIndex={pageNumber === totalPages ? -1 : undefined}
            className={cn(
              pageNumber === totalPages
                ? "pointer-events-none opacity-50"
                : undefined,
            )}
            href={cn(
              pageNumber < totalPages ? `/news?page=${pageNumber + 1}` : "",
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default NewsPagination;
