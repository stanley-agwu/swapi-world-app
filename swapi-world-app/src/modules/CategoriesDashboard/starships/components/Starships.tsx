import { SyntheticEvent, useEffect, useState } from 'react';
import { MdArrowForwardIos, MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetStarshipsQuery } from 'common/api/services/swapi';
import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import {
  addToStarshipFavorites,
  setStarshipListFromFavorites,
  setStarshipListFromPagination,
} from 'common/api/store/slice/swapiSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';
import { showError, showSuccess } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { IPlanet, IStarship } from 'common/models';
import { Notification } from 'common/utils/messages';

import styles from './Starships.module.scss';

const Starships = () => {
  const [shouldLoadNextPage, setShouldLoadNextPage] = useState(false);
  const [pageNumber, setPageNumer] = useState<number>(
    useAppSelector((state) => state.swapi.starships.pageNumber) || 1
  );
  const { isLoading, data, isError } = useGetStarshipsQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<IStarship>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const starshipList = useAppSelector((state) => state.swapi.starships.starshipList) as IStarship[];

  const handleAddToFavorite = (starship: IStarship) => {
    dispatch(addToStarshipFavorites(starship));
    dispatch(setStarshipListFromFavorites({ isFavoriteSelected: true }));
    showSuccess(Notification.success.title, Notification.success.message);
  };

  const handleAddStarshipsToFavorite = (
    e: SyntheticEvent<SVGElement, globalThis.MouseEvent>,
    starship: IStarship
  ) => {
    e.preventDefault();
    e.stopPropagation();
    return handleAddToFavorite(starship);
  };

  const handleLoadNextPage = () => {
    if (data?.next) {
      setPageNumer((prevPage) => prevPage + 1);
    }
  };

  const handleRowClick = (id: string) => {
    navigate(coreConfig.routes.details.path.starship.format(id));
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
    columnHelper.accessor((row) => row.consumables, {
      id: 'consumables',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Consumables</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: 'icon_heart',
      cell: (info) => (
        <i>
          <MdFavorite
            className={styles.icon_heart}
            onClick={(e) => handleAddStarshipsToFavorite(e, info.row.original)}
            aria-label="Starships favorite"
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
    if (Boolean(data?.next) && starshipList.length < 9) {
      setShouldLoadNextPage(true);
    }
    if (starshipList.length >= 9) {
      setShouldLoadNextPage(false);
    }
    if (data?.results) {
      dispatch(setStarshipListFromPagination({ data: data?.results, pageNumber }));
    }
  }, [data?.results, starshipList.length]);

  if (isLoading) {
    return <PageLoader className={styles.loaderContainer} />;
  }

  if (isError) {
    showError(Notification.error.title, Notification.error.message);
  }

  return (
    <div className={styles.starships}>
      <Table
        tableData={starshipList as unknown as IPlanet[]}
        tableColumns={columns}
        hasNextPage={Boolean(data?.next)}
        shouldLoadNextPage={shouldLoadNextPage}
        onLoadNextPage={handleLoadNextPage}
        onHandleRowClick={handleRowClick}
        gridColumnsCustomization="repeat(5, 1fr) 0.5fr 0.25fr"
      />
    </div>
  );
};

export default Starships;
