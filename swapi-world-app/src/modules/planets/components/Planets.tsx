import { useState } from 'react';
import { MdArrowForwardIos, MdFavorite } from 'react-icons/md';
import classNames from 'classnames';
import moment from 'moment';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetPlanetsQuery } from 'common/api/services/swapi';
import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { addToFavorites, removeFromFavorites } from 'common/api/store/slice/swapiSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';

import styles from './Planets.module.scss';

const Planets = () => {
  const [pageNumber, setPageNumer] = useState(1);
  const { isLoading, isSuccess, isError, data } = useGetPlanetsQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<any>();
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector((state) => state.swapi.favorites);

  const handleIsInFavoriteList = (name: string): boolean =>
    (favoriteList as string[])?.includes(name);

  const handleAddToFavorite = (name: string) => {
    dispatch(addToFavorites(name));
  };

  const handleRemoveFromFavorite = (name: string) => {
    dispatch(removeFromFavorites(name));
  };

  const handleAddPlanetToFavorite = (name: string) => {
    const isInFavoriteList = handleIsInFavoriteList(name);
    return isInFavoriteList ? handleRemoveFromFavorite(name) : handleAddToFavorite(name);
  };

  const hasNextPage = false;

  const handleLoadNextPage = () => {};

  const handleRowClick = () => {};

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
    columnHelper.accessor((row) => row.name, {
      id: 'icon_heart',
      cell: (info) => (
        <i>
          <MdFavorite
            className={classNames(
              styles.icon_heart,
              handleIsInFavoriteList(info.getValue()) ? styles.selected : undefined
            )}
            onClick={() => handleAddPlanetToFavorite(info.getValue())}
          />
        </i>
      ),
      header: () => <span>Favorite</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: 'icon_arrow',
      cell: () => (
        <i>
          <MdArrowForwardIos className={styles.icon_arrow} />
        </i>
      ),
      header: () => <span></span>,
    }),
  ];

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
        gridColumnsCustomization="1fr 1fr 1fr 1.5fr 1fr 1fr 0.5fr 0.25fr"
      />
    </div>
  );
};

export default Planets;
