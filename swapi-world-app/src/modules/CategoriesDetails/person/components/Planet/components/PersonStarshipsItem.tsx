import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import Loader from 'common/components/Loader/Loader';
import { IStarship } from 'common/models';
import { fetchApiInParallel } from 'modules/CategoriesDetails/api/services';
import { formatUTCDate } from 'modules/CategoriesDetails/planet/utils/common';

import styles from '../Person.module.scss';

interface PersonStarshipsItemProps {
  dataList: string[];
  type: string;
}

const PersonStarshipsItem = ({ dataList, type }: PersonStarshipsItemProps) => {
  const [starships, setStarships] = useState<IStarship[] | undefined>();

  if (!dataList || !dataList?.length) {
    return <div>`There are ${type} available.`</div>;
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const data = dataList.length ? ((await fetchApiInParallel(dataList)) as IStarship[]) : [];
      return setStarships(data);
    };
    asyncFunction();
  }, []);

  return (
    <Grid container className={styles.details}>
      {starships && starships?.length ? (
        <Grid container className={styles.detailsItem}>
          <Grid item xs={12} className={styles.item}>
            <Grid item className={styles.title}>
              Name
            </Grid>
            <Grid item className={styles.title}>
              Manufacturer
            </Grid>
            <Grid item className={styles.title}>
              crew size
            </Grid>
            <Grid item className={styles.title}>
              Passenger size
            </Grid>
          </Grid>
          {starships.map((starship, idx) => (
            <Grid item xs={12} key={idx} className={styles.item}>
              <Grid item className={styles.value}>
                {starship?.name}
              </Grid>
              <Grid item className={styles.value}>
                {starship?.manufacturer}
              </Grid>
              <Grid item className={styles.value}>
                {starship?.crew}
              </Grid>
              <Grid item className={styles.value}>
                {starship?.passengers}
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

export default PersonStarshipsItem;
