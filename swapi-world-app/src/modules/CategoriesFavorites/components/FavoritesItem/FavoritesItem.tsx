import { Grid } from '@mui/material';

import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import { IPerson, IPlanet, IStarship } from 'common/models';
import { categoriesTitles } from 'common/utils/categoritesTitleConfig';

import styles from './FavoritesItem.module.scss';

type CategoryType = IPlanet[] | IPerson[] | IStarship[];
type StringKeyValueType = { [key: string]: string }[];

interface FavoritesItemProps {
  categoryDataList: CategoryType & StringKeyValueType;
  dataKeys: string[];
  categoryName: string;
}

const FavoritesItem = ({ categoryDataList, dataKeys, categoryName }: FavoritesItemProps) => {
  if (!categoryDataList.length) {
    return (
      <GenericNotFound
        title={`No ${categoryName} added`}
        message="Consider adding new favorites to your favorites list."
      />
    );
  }

  return (
    <Grid container className={styles.favorites}>
      <Grid container className={styles.detailsItem}>
        <Grid item xs={12} className={styles.item}>
          {dataKeys.map((key, index) => (
            <Grid item xs={12} className={styles.title} key={index}>
              {categoriesTitles[key]}
            </Grid>
          ))}
        </Grid>
        {categoryDataList.map((data, index) => (
          <Grid item xs={12} className={styles.item} key={index}>
            {dataKeys.map((key, idx) => (
              <Grid item xs={12} className={styles.value} key={idx}>
                {data[key]}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default FavoritesItem;
