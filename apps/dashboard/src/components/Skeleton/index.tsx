import clsx from "clsx";

interface SkeletonProps {
  children?: React.ReactNode;
  isFetching?: boolean;
  className?: string;
}
const Skeleton = ({ children, isFetching, className }: SkeletonProps) => {
  return !isFetching ? (
    children
  ) : (
    <div
      className={clsx("animate-pulse h-4 bg-gray-200 rounded mb-2", className)}
    ></div>
  );
};

export default Skeleton;
