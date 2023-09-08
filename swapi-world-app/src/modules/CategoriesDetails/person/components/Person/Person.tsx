import { Grid } from '@mui/material';

import { useGetPersonQuery } from 'common/api/services/swapi';
import Back from 'common/components/Back/Back';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { categoriesTitlesKeys } from 'common/utils/categoriesTitlesKeys';
import { Notification } from 'common/utils/messages';
import DetailsItem from 'modules/CategoriesDetails/components/DetailsItem/DetailsItem';
import { formatUTCDate } from 'modules/CategoriesDetails/utils/common';

import styles from './Person.module.scss';

interface PersonProps {
  id: string;
}

const Person = ({ id }: PersonProps) => {
  const { isLoading, data, isError } = useGetPersonQuery(id);

  if (isLoading) {
    return <PageLoader className={styles.loaderContainer} />;
  }

  if (isError) {
    showError(Notification.error.title, Notification.error.message);
  }

  return (
    <div className={styles.person}>
      <Back url={coreConfig.routes.dashboard.path.people} />
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
              Birth year
            </Grid>
            <Grid item className={styles.value}>
              {data?.birth_year}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Gender
            </Grid>
            <Grid item className={styles.value}>
              {data?.gender}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Skin color
            </Grid>
            <Grid item className={styles.value}>
              {data?.skin_color}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Hair color
            </Grid>
            <Grid item className={styles.value}>
              {data?.hair_color}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Height
            </Grid>
            <Grid item className={styles.value}>
              {data?.height}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Mass
            </Grid>
            <Grid item className={styles.value}>
              {data?.mass}
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
        </Grid>
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Starships</div>
        <DetailsItem
          dataList={data?.starships as string[]}
          dataKeys={categoriesTitlesKeys.starshipsKeys}
          category={{ name: 'starships', domain: 'person' }}
        />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Vehicles</div>
        <DetailsItem
          dataList={data?.vehicles as string[]}
          dataKeys={categoriesTitlesKeys.vehiclesKeys}
          category={{ name: 'vehicles', domain: 'person' }}
        />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Films</div>
        <DetailsItem
          dataList={data?.films as string[]}
          dataKeys={categoriesTitlesKeys.filmsKeys}
          category={{ name: 'films', domain: 'person' }}
        />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Species</div>
        <DetailsItem
          dataList={data?.species as string[]}
          dataKeys={categoriesTitlesKeys.speciesKeys}
          category={{ name: 'species', domain: 'person' }}
        />
      </Grid>
    </div>
  );
};

export default Person;
