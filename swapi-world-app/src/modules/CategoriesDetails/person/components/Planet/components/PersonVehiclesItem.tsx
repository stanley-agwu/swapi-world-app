import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import Loader from 'common/components/Loader/Loader';
import { IVehicle } from 'common/models';
import { fetchApiInParallel } from 'modules/CategoriesDetails/api/services';

import styles from '../Person.module.scss';

interface PersonVehiclesItemProps {
  dataList: string[];
  type: string;
}

const PersonVehiclesItem = ({ dataList, type }: PersonVehiclesItemProps) => {
  const [vehicles, setVehicles] = useState<IVehicle[] | undefined>();

  if (!dataList || !dataList?.length) {
    return (
      <Grid container className={styles.details}>
        {`There are no ${type} available for this planet.`}
      </Grid>
    );
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const data = dataList.length ? ((await fetchApiInParallel(dataList)) as IVehicle[]) : [];
      return setVehicles(data);
    };
    asyncFunction();
  }, []);

  return (
    <Grid container className={styles.details}>
      {vehicles && vehicles?.length ? (
        <Grid container className={styles.detailsItem}>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Name
            </Grid>
            <Grid item className={styles.title}>
              Model
            </Grid>
            <Grid item className={styles.title}>
              Manufacturer
            </Grid>
            <Grid item className={styles.title}>
              Crew
            </Grid>
            <Grid item className={styles.title}>
              Passengers
            </Grid>
            <Grid item className={styles.title}>
              Consumables
            </Grid>
          </Grid>
          {vehicles.map((vehicle, idx) => (
            <Grid item xs={12} key={idx} className={styles.item}>
              <Grid item className={styles.value}>
                {vehicle?.name}
              </Grid>
              <Grid item className={styles.value}>
                {vehicle?.model}
              </Grid>
              <Grid item className={styles.value}>
                {vehicle?.manufacturer}
              </Grid>
              <Grid item className={styles.value}>
                {vehicle?.crew}
              </Grid>
              <Grid item className={styles.value}>
                {vehicle?.passengers}
              </Grid>
              <Grid item className={styles.value}>
                {vehicle?.consumables}
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

export default PersonVehiclesItem;
