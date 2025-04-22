import { FC } from "react";
import { Skeleton } from "./skeleton";
interface props {
  count?: number;
}

export const CardSkeleton: FC<props> = ({ count }) => {
  return (
    <div className="flex flex-wrap gap-10">
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="flex flex-col space-y-2 rounded-md  w-[285px]">
          <div className="w-full flex justify-center mt-5 bg-[#FDFDFD]">
            <Skeleton className="w-[215px] h-[215px] rounded-full bg-muted my-5" />
          </div>
          <Skeleton className="h-9 w-[257px] rounded-xl bg-muted pt-5 inline-block" />
          <div className="flex flex-col gap-2 pt-3">
            <Skeleton className="h-3 w-11/12 rounded-md bg-muted" />
            <Skeleton className="h-3 w-10/12 rounded-md bg-muted" />
            <Skeleton className="h-3 w-5/12 rounded-md bg-muted" />
          </div>
          <div className="flex justify-between pt-5">
            <Skeleton className="h-9 w-20 rounded-md bg-muted" />
            <Skeleton className="h-11 w-32 rounded-md bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
};
