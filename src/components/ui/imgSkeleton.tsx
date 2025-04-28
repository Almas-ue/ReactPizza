import { Skeleton } from "./skeleton";

const ImgSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-full rounded-2xl bg-muted animate-pulse" />
    </div>
  );
};

export default ImgSkeleton;
