import { SyntheticEvent, useEffect, useState } from 'react';
import { MdArrowForwardIos, MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetPlanetsQuery } from 'common/api/services/swapi';
import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import {
  addToPlanetsFavorites,
  setPlanetListFromFavorites,
  setPlanetListFromPagination,
} from 'common/api/store/slice/swapiSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';
import { showError, showSuccess } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { IPlanet } from 'common/models';
import { Notification } from 'common/utils/messages';

import styles from './Planets.module.scss';

const Planets = () => {
  const [shouldLoadNextPage, setShouldLoadNextPage] = useState(false);
  const [pageNumber, setPageNumer] = useState<number>(
    useAppSelector((state) => state.swapi.planets.pageNumber) || 1
  );
  const { isLoading, data, isError } = useGetPlanetsQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<IPlanet>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const planetList = useAppSelector((state) => state.swapi.planets.planetList) as IPlanet[];

  const handleAddToFavorite = (planet: IPlanet) => {
    dispatch(addToPlanetsFavorites(planet));
    dispatch(setPlanetListFromFavorites({ isFavoriteSelected: true }));
    showSuccess(Notification.success.title, Notification.success.message);
  };

  const handleAddPlanetToFavorite = (
    e: SyntheticEvent<SVGElement, globalThis.MouseEvent>,
    planet: IPlanet
  ) => {
    e.preventDefault();
    e.stopPropagation();
    return handleAddToFavorite(planet);
  };

  const handleLoadNextPage = () => {
    if (data?.next) {
      setPageNumer((prevPage) => prevPage + 1);
    }
  };

  const handleRowClick = (id: string) => {
    navigate(coreConfig.routes.details.path.planet.format(id));
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
    columnHelper.accessor((row) => row, {
      id: 'icon_heart',
      cell: (info) => (
        <i>
          <MdFavorite
            className={styles.icon_heart}
            onClick={(e) => handleAddPlanetToFavorite(e, info.row.original)}
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
    if (Boolean(data?.next) && planetList.length < 9) {
      setShouldLoadNextPage(true);
    }
    if (planetList.length >= 9) {
      setShouldLoadNextPage(false);
    }
    if (data?.results) {
      dispatch(setPlanetListFromPagination({ data: data?.results, pageNumber }));
    }
  }, [data?.results, planetList.length]);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  if (isError) {
    showError(Notification.error.title, Notification.error.message);
  }

  return (
    <div className={styles.planets}>
      <Table
        tableData={planetList}
        tableColumns={columns}
        hasNextPage={Boolean(data?.next)}
        onLoadNextPage={handleLoadNextPage}
        shouldLoadNextPage={shouldLoadNextPage}
        onHandleRowClick={handleRowClick}
        gridColumnsCustomization="1fr 1fr 1fr 1.5fr 1fr 1fr 0.5fr 0.25fr"
      />
    </div>
  );
};

export default Planets;
