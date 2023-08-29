import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import Loader from 'common/components/Loader/Loader';
import { ISpecie } from 'common/models';
import { fetchApiInParallel } from 'modules/CategoriesDetails/api/services';

import styles from '../Person.module.scss';

interface PersonVehiclesItemProps {
  dataList: string[];
  type: string;
}

const PersonSpeciesItem = ({ dataList, type }: PersonVehiclesItemProps) => {
  const [species, setSpecies] = useState<ISpecie[] | undefined>();

  if (!dataList || !dataList?.length) {
    return (
      <Grid container className={styles.details}>
        {`There are no ${type} available for this planet.`}
      </Grid>
    );
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const data = dataList.length ? ((await fetchApiInParallel(dataList)) as ISpecie[]) : [];
      return setSpecies(data);
    };
    asyncFunction();
  }, []);

  return (
    <Grid container className={styles.details}>
      {species && species?.length ? (
        <Grid container className={styles.detailsItem}>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Name
            </Grid>
            <Grid item className={styles.title}>
              Classification
            </Grid>
            <Grid item className={styles.title}>
              Designation
            </Grid>
            <Grid item className={styles.title}>
              Average height
            </Grid>
            <Grid item className={styles.title}>
              Language
            </Grid>
          </Grid>
          {species.map((specie, idx) => (
            <Grid item xs={12} key={idx} className={styles.item}>
              <Grid item className={styles.value}>
                {specie?.name}
              </Grid>
              <Grid item className={styles.value}>
                {specie?.classification}
              </Grid>
              <Grid item className={styles.value}>
                {specie?.designation}
              </Grid>
              <Grid item className={styles.value}>
                {specie?.average_height}
              </Grid>
              <Grid item className={styles.value}>
                {specie?.language}
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

export default PersonSpeciesItem;
