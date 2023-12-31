import { Grid } from '@mui/material';

import { useGetPlanetQuery } from 'common/api/services/swapi';
import Back from 'common/components/Back/Back';
import { GridContent } from 'common/components/ContentBox/ContentBox';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { categoriesTitlesKeys } from 'common/utils/categoriesTitlesKeys';
import { Notification } from 'common/utils/messages';
import DetailsItem from 'modules/CategoriesDetails/components/DetailsItem/DetailsItem';
import { formatUTCDate } from 'modules/CategoriesDetails/utils/common';

import styles from './Planet.module.scss';

interface PlanetProps {
  id: string;
}

const Planet = ({ id }: PlanetProps) => {
  const { isLoading, data, isError } = useGetPlanetQuery(id);

  if (isLoading) {
    return <PageLoader className={styles.loaderContainer} />;
  }

  if (isError) {
    showError(Notification.error.title, Notification.error.message);
  }

  return (
    <div className={styles.planet}>
      <Back url={coreConfig.routes.dashboard.path.planets} />
      <Grid container>
        <div className={styles.categoryTitle}>Details</div>
        <Grid container className={styles.details}>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Name
            </Grid>
            <Grid item className={styles.value}>
              {data?.name}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Terrain
            </Grid>
            <Grid item className={styles.value}>
              {data?.terrain}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Climate
            </Grid>
            <Grid item className={styles.value}>
              {data?.climate}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Date created
            </Grid>
            <Grid item className={styles.value}>
              {formatUTCDate(data?.created)}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Gravity
            </Grid>
            <Grid item className={styles.value}>
              {data?.gravity}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Surface water
            </Grid>
            <Grid item className={styles.value}>
              {data?.surface_water}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Diameter
            </Grid>
            <Grid item className={styles.value}>
              {data?.diameter}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Orbiter period
            </Grid>
            <Grid item className={styles.value}>
              {data?.orbital_period}
            </Grid>
          </GridContent>
          <GridContent className={styles.item}>
            <Grid item className={styles.title}>
              Population
            </Grid>
            <Grid item className={styles.value}>
              {data?.population}
            </Grid>
          </GridContent>
        </Grid>
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Films</div>
        <DetailsItem
          dataList={data?.films as string[]}
          dataKeys={categoriesTitlesKeys.filmsKeys}
          category={{ name: 'films', domain: 'planet' }}
        />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Residents</div>
        <DetailsItem
          dataList={data?.residents as string[]}
          dataKeys={categoriesTitlesKeys.residentKeys}
          category={{ name: 'residents', domain: 'planet' }}
        />
      </Grid>
    </div>
  );
};

export default Planet;
