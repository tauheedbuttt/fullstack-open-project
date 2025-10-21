import clsx from "clsx";
import Button from "../Button";
import TableSkeleton from "./TableSkeleton";
import { Action } from "../../types";

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
  actions?: Action<T>[];
  className?: string;
}

const Table = <T,>({
  rows,
  columns,
  isFetching,
  rowOnClick,
  actions,
  className,
}: TableProps<T>) => {
  return (
    <table className={clsx("w-full table-auto", className)}>
      <thead>
        <tr className="border-b">
          {columns.map((column) => (
            <th
              className="p-2 text-left text-sm font-medium"
              key={column.field as string}
            >
              {column.label}
            </th>
          ))}
          {actions && (
            <th className="p-2 text-left text-sm font-medium">Actions</th>
          )}
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
                    "p-2 text-sm ",
                    column.onClick && "cursor-pointer hover:bg-gray-50"
                  )}
                  key={column.field as string}
                >
                  {row[column.field]}
                </td>
              ))}
              {actions && (
                <td className="p-2 text-sm  block">
                  <div className="flex gap-1">
                    {actions.map((action, actionIndex) => (
                      <Button
                        key={actionIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(row);
                        }}
                        icon={action.icon}
                        text={action.text}
                        variant="text"
                        className="!p-2"
                      />
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </TableSkeleton>
      </tbody>
    </table>
  );
};

export default Table;
