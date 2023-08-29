import { Grid } from '@mui/material';

import { useGetPlanetQuery } from 'common/api/services/swapi';
import PageLoader from 'common/components/Loader/PageLoader';

import { formatUTCDate } from '../../utils/common';

import PlanetFilmsItem from './components/PlanetFilmsItem';
import PlanetResidentsItem from './components/PlanetResidentsItem';

import styles from './Planet.module.scss';

interface PlanetProps {
  id: string;
}

const Planet = ({ id }: PlanetProps) => {
  const { isLoading, data } = useGetPlanetQuery(id);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  return (
    <div className={styles.planet}>
      <Grid container>
        <div className={styles.categoryTitle}>Details</div>
        <Grid container className={styles.details}>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Name
            </Grid>
            <Grid item className={styles.value}>
              {data?.name}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Terrain
            </Grid>
            <Grid item className={styles.value}>
              {data?.terrain}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Climate
            </Grid>
            <Grid item className={styles.value}>
              {data?.climate}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Date created
            </Grid>
            <Grid item className={styles.value}>
              {formatUTCDate(data?.created)}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Gravity
            </Grid>
            <Grid item className={styles.value}>
              {data?.gravity}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Surface water
            </Grid>
            <Grid item className={styles.value}>
              {data?.surface_water}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Diameter
            </Grid>
            <Grid item className={styles.value}>
              {data?.diameter}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Orbiter period
            </Grid>
            <Grid item className={styles.value}>
              {data?.orbital_period}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Population
            </Grid>
            <Grid item className={styles.value}>
              {data?.population}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Films</div>
        <PlanetFilmsItem dataList={data?.films as string[]} type="films" />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Residents</div>
        <PlanetResidentsItem dataList={data?.residents as string[]} type="residents" />
      </Grid>
    </div>
  );
};

export default Planet;
