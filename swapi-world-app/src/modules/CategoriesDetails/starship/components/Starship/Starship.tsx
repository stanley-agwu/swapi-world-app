import { Grid } from '@mui/material';

import { useGetStarshipQuery } from 'common/api/services/swapi';
import Back from 'common/components/Back/Back';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { categoriesTitlesKeys } from 'common/utils/categoriesTitlesKeys';
import { Notification } from 'common/utils/messages';
import DetailsItem from 'modules/CategoriesDetails/components/DetailsItem/DetailsItem';
import { formatUTCDate } from 'modules/CategoriesDetails/utils/common';

import styles from './Starship.module.scss';

interface StarshipProps {
  id: string;
}

const Starship = ({ id }: StarshipProps) => {
  const { isLoading, data, isError } = useGetStarshipQuery(id);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  if (isError) {
    showError(Notification.error.title, Notification.error.message);
  }

  return (
    <div className={styles.starship}>
      <Back url={coreConfig.routes.dashboard.path.starships} />
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
              Model
            </Grid>
            <Grid item className={styles.value}>
              {data?.model}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Manufacturer
            </Grid>
            <Grid item className={styles.value}>
              {data?.manufacturer}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Crew size
            </Grid>
            <Grid item className={styles.value}>
              {data?.crew}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Passengers size
            </Grid>
            <Grid item className={styles.value}>
              {data?.passengers}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Cargo capacity
            </Grid>
            <Grid item className={styles.value}>
              {data?.cargo_capacity}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Consumables
            </Grid>
            <Grid item className={styles.value}>
              {data?.consumables}
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
              Cost in credits
            </Grid>
            <Grid item className={styles.value}>
              {data?.cost_in_credits}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Films</div>
        <DetailsItem
          dataList={data?.films as string[]}
          dataKeys={categoriesTitlesKeys.filmsKeys}
          category={{ name: 'films', domain: 'starship' }}
        />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Pilots</div>
        <DetailsItem
          dataList={data?.pilots as string[]}
          dataKeys={categoriesTitlesKeys.pilotsKeys}
          category={{ name: 'pilots', domain: 'starship' }}
        />
      </Grid>
    </div>
  );
};

export default Starship;
