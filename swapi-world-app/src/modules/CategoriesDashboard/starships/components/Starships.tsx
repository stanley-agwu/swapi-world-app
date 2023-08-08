import { useEffect, useState } from 'react';
import { MdArrowForwardIos, MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetStarshipsQuery } from 'common/api/services/swapi';
import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import {
  addToStarshipFavorites,
  removeFromStarshipFavorites,
  setStarshipList,
} from 'common/api/store/slice/swapiSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';
import { coreConfig } from 'common/core/config';
import { IPlanet, IStarship } from 'common/models';

import styles from './Starships.module.scss';

const Starships = () => {
  const [pageNumber, setPageNumer] = useState(1);
  const { isLoading, data } = useGetStarshipsQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<IStarship>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoriteList = useAppSelector((state) => state.swapi.favorites.starships);
  const starshipList = useAppSelector((state) => state.swapi.starships) as IStarship[];

  const handleIsInFavoriteList = (name: string): boolean =>
    (favoriteList as string[])?.includes(name);

  const handleAddToFavorite = (name: string) => {
    dispatch(addToStarshipFavorites(name));
  };

  const handleRemoveFromFavorite = (name: string) => {
    dispatch(removeFromStarshipFavorites(name));
  };

  const handleAddStarshipsToFavorite = (name: string) => {
    const isInFavoriteList = handleIsInFavoriteList(name);
    return isInFavoriteList ? handleRemoveFromFavorite(name) : handleAddToFavorite(name);
  };

  const handleLoadNextPage = () => {
    if (data?.next) {
      setPageNumer((prevPage) => prevPage + 1);
    }
  };

  const handleRowClick = (name: string) => {
    navigate(coreConfig.routes.starships.format(name));
  };

  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: 'name',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.model, {
      id: 'model',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Model</span>,
    }),
    columnHelper.accessor((row) => row.manufacturer, {
      id: 'manufacturer',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Manufacturer</span>,
    }),
    columnHelper.accessor((row) => row.cost_in_credits, {
      id: 'cost_in_credits',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Cost</span>,
    }),
    columnHelper.accessor((row) => row.cargo_capacity, {
      id: 'cargo_capacity',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Cargo capacity</span>,
    }),
    columnHelper.accessor((row) => row.consumables, {
      id: 'consumables',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Consumables</span>,
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
            onClick={() => handleAddStarshipsToFavorite(info.getValue())}
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
      dispatch(setStarshipList(data?.results));
    }
  }, [data?.results]);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  return (
    <div className={styles.starships}>
      <Table
        tableData={starshipList as unknown as IPlanet[]}
        tableColumns={columns}
        hasNextPage={Boolean(data?.next)}
        onLoadNextPage={handleLoadNextPage}
        onHandleRowClick={handleRowClick}
        gridColumnsCustomization="repeat(6, 1fr) 0.5fr 0.25fr"
      />
    </div>
  );
};

export default Starships;
