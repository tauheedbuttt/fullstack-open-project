import clsx from "clsx";
import TableSkeleton from "./TableSkeleton";

export interface TableColumn<T> {
  label: string;
  field: keyof T;
  onClick?: () => void;
}

interface TableProps<T> {
  isFetching?: boolean;
  rows: { [key in keyof T]: any }[]; // anything can come as value in row
  columns: TableColumn<T>[];
  rowOnClick?: (row: T) => void;
}

const Table = <T,>({
  rows,
  columns,
  isFetching,
  rowOnClick,
}: TableProps<T>) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="border-b">
          {columns.map((column) => (
            <th className="p-2 text-left" key={column.field as string}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableSkeleton isFetching={!!isFetching} columnsLength={columns.length}>
          {rows.map((row, rowIndex) => (
            <tr
              onClick={() => rowOnClick?.(row)}
              key={rowIndex}
              className={clsx(
                "border-b",
                rowOnClick && "cursor-pointer hover:bg-gray-50"
              )}
            >
              {columns.map((column) => (
                <td
                  onClick={column.onClick}
                  className={clsx(
                    "p-2",
                    column.onClick && "cursor-pointer hover:bg-gray-50"
                  )}
                  key={column.field as string}
                >
                  {row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </TableSkeleton>
      </tbody>
    </table>
  );
};

export default Table;
