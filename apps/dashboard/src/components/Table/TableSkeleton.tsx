import Skeleton from "../Skeleton";

interface TableSkeletonProps {
  isFetching: boolean;
  columnsLength: number;
  children: React.ReactNode;
}

const TableSkeleton = ({
  isFetching,
  columnsLength,
  children,
}: TableSkeletonProps) => {
  return isFetching
    ? Array(5)
        .fill(null)
        .map((_, index) => (
          <tr className="border-b" key={index}>
            {Array(columnsLength)
              .fill(null)
              .map((_, index) => (
                <td className="p-2" key={index}>
                  <Skeleton className="w-[60%]" isFetching={isFetching} />
                </td>
              ))}
          </tr>
        ))
    : children;
};

export default TableSkeleton;
