import { UIEvent, useMemo } from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityTableState,
} from '@tanstack/react-table';

import { IPerson, IPlanet, IStarship } from 'common/models';

import Loader from '../Loader/Loader';

import styles from './Table.module.scss';

export interface TableProps {
  tableData: IPlanet[] | IPerson[] | IStarship[] | undefined;
  tableColumns: ColumnDef<any, any>[];
  hasNextPage: boolean;
  initialState?: VisibilityTableState;
  onLoadNextPage: () => void;
  onHandleRowClick: (id: string) => void;
  gridColumnsCustomization?: string;
}

const Table = ({
  tableData = [],
  tableColumns = [],
  hasNextPage = false,
  initialState,
  onLoadNextPage,
  onHandleRowClick,
  gridColumnsCustomization = undefined,
}: TableProps): JSX.Element => {
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const data = useMemo(() => tableData, [tableData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState,
  });

  const handleRowClick = (id: string) => onHandleRowClick(id);
  const handleLoadNextpage = () => onLoadNextPage();

  const onScrollEventHandler = (e: UIEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement;
    const isBottom =
      targetElement.scrollTop > 0 &&
      Math.ceil(targetElement.scrollTop + targetElement.clientHeight) >= targetElement.scrollHeight;
    if (isBottom && hasNextPage) {
      handleLoadNextpage();
    }
  };

  return (
    <div className={styles.tableWrapper} onScroll={onScrollEventHandler}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className={styles.headerRow}
              key={headerGroup.id}
              style={{
                gridTemplateColumns:
                  gridColumnsCustomization || 'repeat(auto-fit, minmax(100px, 1fr))',
              }}
            >
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
            <tr
              className={styles.bodyRow}
              key={row.id}
              onClick={() => handleRowClick(`${Number(row.id) + 1}`)}
              style={{
                gridTemplateColumns:
                  gridColumnsCustomization || 'repeat(auto-fit, minmax(100px, 1fr))',
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {hasNextPage ? <Loader width={80} height={80} className={styles.loader} /> : null}
    </div>
  );
};

export default Table;
