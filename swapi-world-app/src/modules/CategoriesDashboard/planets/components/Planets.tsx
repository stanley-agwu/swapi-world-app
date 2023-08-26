import { SyntheticEvent, useEffect, useState } from 'react';
import { MdArrowForwardIos, MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import moment from 'moment';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetPlanetsQuery } from 'common/api/services/swapi';
import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import {
  addToPlanetsFavorites,
  removeFromPlanetsFavorites,
  setPlanetList,
} from 'common/api/store/slice/swapiSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';
import { coreConfig } from 'common/core/config';
import { IPlanet } from 'common/models';

import styles from './Planets.module.scss';

const Planets = () => {
  const [pageNumber, setPageNumer] = useState(1);
  const { isLoading, data } = useGetPlanetsQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<IPlanet>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoriteList = useAppSelector((state) => state.swapi.favorites.planets);
  const planetList = useAppSelector((state) => state.swapi.planets) as IPlanet[];

  const handleIsInFavoriteList = (name: string): boolean =>
    (favoriteList as string[])?.includes(name);

  const handleAddToFavorite = (name: string) => {
    dispatch(addToPlanetsFavorites(name));
  };

  const handleRemoveFromFavorite = (name: string) => {
    dispatch(removeFromPlanetsFavorites(name));
  };

  const handleAddPlanetToFavorite = (
    e: SyntheticEvent<SVGElement, globalThis.MouseEvent>,
    name: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const isInFavoriteList = handleIsInFavoriteList(name);
    return isInFavoriteList ? handleRemoveFromFavorite(name) : handleAddToFavorite(name);
  };

  const handleLoadNextPage = () => {
    if (data?.next) {
      setPageNumer((prevPage) => prevPage + 1);
    }
  };

  const handleRowClick = (id: string) => {
    navigate(coreConfig.routes.details.planets.format(id));
  };

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
            onClick={(e) => handleAddPlanetToFavorite(e, info.getValue())}
            aria-label="Planets favorite"
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

  useEffect(() => {
    if (data?.results) {
      dispatch(setPlanetList(data?.results));
    }
  }, [data?.results]);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  return (
    <div className={styles.planets}>
      <Table
        tableData={planetList}
        tableColumns={columns}
        hasNextPage={Boolean(data?.next)}
        onLoadNextPage={handleLoadNextPage}
        onHandleRowClick={handleRowClick}
        gridColumnsCustomization="1fr 1fr 1fr 1.5fr 1fr 1fr 0.5fr 0.25fr"
      />
    </div>
  );
};

export default Planets;
