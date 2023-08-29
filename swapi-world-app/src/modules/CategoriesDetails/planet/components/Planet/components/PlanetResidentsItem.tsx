import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import Loader from 'common/components/Loader/Loader';
import { IPerson } from 'common/models';
import { fetchApiInParallel } from 'modules/CategoriesDetails/api/services';

import styles from '../Planet.module.scss';

interface PlanetResidentsItemProps {
  dataList: string[];
  type: string;
}

const PlanetResidentsItem = ({ dataList, type }: PlanetResidentsItemProps) => {
  const [residents, setResidents] = useState<IPerson[] | undefined>();

  if (!dataList || !dataList?.length) {
    return (
      <Grid container className={styles.details}>
        {`There are no ${type} available for this planet.`}
      </Grid>
    );
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const data = dataList.length ? ((await fetchApiInParallel(dataList)) as IPerson[]) : [];
      return setResidents(data);
    };
    asyncFunction();
  }, []);

  return (
    <Grid container className={styles.details}>
      {residents && residents?.length ? (
        <Grid container className={styles.detailsItem}>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Name
            </Grid>
            <Grid item className={styles.title}>
              Birth year
            </Grid>
            <Grid item className={styles.title}>
              Gender
            </Grid>
            <Grid item className={styles.title}>
              Skin color
            </Grid>
            <Grid item className={styles.title}>
              Hair color
            </Grid>
          </Grid>
          {residents.map((resident, idx) => (
            <Grid item xs={12} key={idx} className={styles.item}>
              <Grid item className={styles.value}>
                {resident?.name}
              </Grid>
              <Grid item className={styles.value}>
                {resident?.birth_year}
              </Grid>
              <Grid item className={styles.value}>
                {resident?.gender}
              </Grid>
              <Grid item className={styles.value}>
                {resident?.skin_color}
              </Grid>
              <Grid item className={styles.value}>
                {resident?.hair_color}
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

export default PlanetResidentsItem;
