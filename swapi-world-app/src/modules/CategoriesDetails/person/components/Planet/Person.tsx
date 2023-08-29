import { Grid } from '@mui/material';

import { useGetPersonQuery } from 'common/api/services/swapi';
import PageLoader from 'common/components/Loader/PageLoader';
import { formatUTCDate } from 'modules/CategoriesDetails/utils/common';

import PersonFilmsItem from './components/PersonFilmsItem';
import PersonSpeciesItem from './components/PersonSpeciesItem';
import PersonStarshipsItem from './components/PersonStarshipsItem';
import PersonVehiclesItem from './components/PersonVehiclesItem';

import styles from './Person.module.scss';

interface PersonProps {
  id: string;
}

const Person = ({ id }: PersonProps) => {
  const { isLoading, data } = useGetPersonQuery(id);

  if (isLoading) {
    return <PageLoader width={100} height={100} className={styles.loaderContainer} />;
  }

  return (
    <div className={styles.person}>
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
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Population
            </Grid>
            <Grid item className={styles.value}>
              {data?.homeworld}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Starships</div>
        <PersonStarshipsItem dataList={data?.starships as string[]} type="starships" />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Vehicles</div>
        <PersonVehiclesItem dataList={data?.vehicles as string[]} type="vehicles" />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Films</div>
        <PersonFilmsItem dataList={data?.films as string[]} type="films" />
      </Grid>
      <Grid container>
        <div className={styles.categoryTitle}>Species</div>
        <PersonSpeciesItem dataList={data?.species as string[]} type="species" />
      </Grid>
    </div>
  );
};

export default Person;
