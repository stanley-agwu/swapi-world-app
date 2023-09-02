import { SyntheticEvent, useEffect, useState } from 'react';
import { MdArrowForwardIos, MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { createColumnHelper } from '@tanstack/react-table';

import { useGetPeopleQuery } from 'common/api/services/swapi';
import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import {
  addToPeopleFavorites,
  removeFromPeopleFavorites,
  setPeopleListFromFavorites,
  setPeopleListFromPagination,
} from 'common/api/store/slice/swapiSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import Table from 'common/components/Table/Table';
import { coreConfig } from 'common/core/config';
import { IPerson, IPlanet } from 'common/models';

import Avatar from './NameTag/Avatar';

import styles from './People.module.scss';

const People = () => {
  const [pageNumber, setPageNumer] = useState<number>(
    useAppSelector((state) => state.swapi.people.pageNumber) || 1
  );
  const { isLoading, data } = useGetPeopleQuery(`${pageNumber}`);
  const columnHelper = createColumnHelper<IPerson>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoriteList = useAppSelector((state) => state.swapi.favorites.people) as string[];
  const peopleList = useAppSelector((state) => state.swapi.people.peopleList) as IPerson[];

  const handleIsInFavoriteList = (name: string): boolean => favoriteList.includes(name);

  const handleAddToFavorite = (name: string) => {
    dispatch(addToPeopleFavorites(name));
    dispatch(setPeopleListFromFavorites({ isFavoriteSelected: true }));
  };

  const handleRemoveFromFavorite = (name: string) => {
    dispatch(removeFromPeopleFavorites(name));
  };

  const handleAddPeopleToFavorite = (
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
    navigate(coreConfig.routes.details.path.person.format(id));
  };

  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: 'name',
      cell: (info) => {
        const name = info.getValue();
        return (
          <i>
            <Avatar name={name} />
            {name}
          </i>
        );
      },
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.height, {
      id: 'height',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Height</span>,
    }),
    columnHelper.accessor((row) => row.birth_year, {
      id: 'birth_year',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Birth year</span>,
    }),
    columnHelper.accessor((row) => row.skin_color, {
      id: 'skin_color',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Skin color</span>,
    }),
    columnHelper.accessor((row) => row.hair_color, {
      id: 'hair_color',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Hair color</span>,
    }),
    columnHelper.accessor((row) => row.eye_color, {
      id: 'eye_color',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Eye color</span>,
    }),
    columnHelper.accessor((row) => row.mass, {
      id: 'mass',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Body mass</span>,
    }),
    columnHelper.accessor((row) => row.gender, {
      id: 'gender',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Gender</span>,
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
            onClick={(e) => handleAddPeopleToFavorite(e, info.getValue())}
            aria-label="People favorite"
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
      dispatch(setPeopleListFromPagination({ data: data?.results, pageNumber }));
    }
  }, [data?.results]);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  return (
    <div className={styles.people}>
      <Table
        tableData={peopleList as unknown as IPlanet[]}
        tableColumns={columns}
        hasNextPage={Boolean(data?.next)}
        onLoadNextPage={handleLoadNextPage}
        onHandleRowClick={handleRowClick}
        gridColumnsCustomization="2fr repeat(7, 1fr) 0.5fr 0.25fr"
      />
    </div>
  );
};

export default People;
