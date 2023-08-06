import React, { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import moment from 'moment';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetPlanetsQuery } from 'common/api/services/swapi';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';

import styles from './Planets.module.scss';

const Planets = () => {
  const [pageNumber, setPageNumer] = useState(1);
  const { isLoading, isSuccess, isError, data } = useGetPlanetsQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: 'name',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.climate, {
      id: 'climate',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Climate</span>,
    }),
    columnHelper.accessor((row) => row.gravity, {
      id: 'gravity',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Gravity</span>,
    }),
    columnHelper.accessor((row) => row.terrain, {
      id: 'terrain',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Terrain</span>,
    }),
    columnHelper.accessor((row) => row.population, {
      id: 'population',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Population</span>,
    }),
    columnHelper.accessor((row) => row.created, {
      id: 'created',
      cell: (info) => (
        <i>{info.getValue() ? moment.utc(info.getValue()).format('DD/MM/YYYY') : null}</i>
      ),
      header: () => <span>Date created</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: 'icon',
      cell: () => (
        <i>
          <MdArrowForwardIos className={styles.icon} />
        </i>
      ),
      header: () => <span></span>,
    }),
  ];

  const hasNextPage = false;

  const handleLoadNextPage = () => {};

  const handleRowClick = () => {};

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  return (
    <div className={styles.planets}>
      <Table
        tableData={data?.results}
        tableColumns={columns}
        hasNextPage={hasNextPage}
        onLoadNextPage={handleLoadNextPage}
        onHandleRowClick={handleRowClick}
        gridColumnsCustomization="1fr 1fr 1.5fr 1.5fr 1fr 1fr 0.25fr"
      />
    </div>
  );
};

export default Planets;
