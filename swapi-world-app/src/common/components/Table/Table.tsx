import { useMemo } from 'react';

import { Column, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from './Table.module.scss';

export interface TableProps {
  tableData: string[];
  tableColumns: Column<any>[];
  hasNextPage: boolean;
  initialState: { hidden: boolean };
  onLoadNextPage: () => void;
  onHandleRowClick: (id: string) => void;
}

const Table = ({
  tableData = [],
  tableColumns = [],
  hasNextPage = false,
  initialState = { hidden: false },
  onLoadNextPage,
  onHandleRowClick,
}: TableProps) => {
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const data = useMemo(() => tableData, [tableData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={styles.headerRow} key={headerGroup.id}>
              {headerGroup.headers?.map((header) => (
                <th key={header?.id}>
                  {flexRender(header.column.columnDef?.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className={styles.bodyRow} key={row.id} onClick={() => {}}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
