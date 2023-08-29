import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import Loader from 'common/components/Loader/Loader';
import { IFilm } from 'common/models';
import { fetchApiInParallel } from 'modules/CategoriesDetails/api/services';
import { formatUTCDate } from 'modules/CategoriesDetails/planet/utils/common';

import styles from '../Planet.module.scss';

interface PlanetFilmsItemProps {
  dataList: string[];
  type: string;
}

const PlanetFilmsItem = ({ dataList, type }: PlanetFilmsItemProps) => {
  const [films, setFilms] = useState<IFilm[] | undefined>();

  if (!dataList || !dataList?.length) {
    return <div>`There are ${type} available.`</div>;
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const data = dataList.length ? ((await fetchApiInParallel(dataList)) as IFilm[]) : [];
      return setFilms(data);
    };
    asyncFunction();
  }, []);

  return (
    <Grid container className={styles.details}>
      {films && films?.length ? (
        <Grid container className={styles.detailsItem}>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Title
            </Grid>
            <Grid item className={styles.title}>
              Director
            </Grid>
            <Grid item className={styles.title}>
              Producer
            </Grid>
            <Grid item className={styles.title}>
              Release date
            </Grid>
          </Grid>
          {films.map((film, idx) => (
            <Grid item xs={12} key={idx} className={styles.item}>
              <Grid item className={styles.value}>
                {film?.title}
              </Grid>
              <Grid item className={styles.value}>
                {film?.director}
              </Grid>
              <Grid item className={styles.value}>
                {film?.producer}
              </Grid>
              <Grid item className={styles.value}>
                {formatUTCDate(film?.release_date)}
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loader width={60} height={60} />
      )}
    </Grid>
  );
};

export default PlanetFilmsItem;
