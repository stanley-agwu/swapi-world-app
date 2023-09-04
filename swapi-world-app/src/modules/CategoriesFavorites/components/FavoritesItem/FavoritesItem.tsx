import { MdFavorite } from 'react-icons/md';
import { ActionCreator } from 'redux';

import { Grid } from '@mui/material';

import { useAppDispatch } from 'common/api/store/hooks';
import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import { showInformation } from 'common/components/Toast';
import { IPerson, IPlanet, IStarship } from 'common/models';
import { categoriesTitles } from 'common/utils/categoritesTitleConfig';
import { Notification } from 'common/utils/messages';

import styles from './FavoritesItem.module.scss';

type CategoriesType = IPlanet[] | IPerson[] | IStarship[];
type StringKeyValueType = { [key: string]: string };
type CategoryType = (IPlanet | IPerson | IStarship) & StringKeyValueType;

interface FavoritesItemProps {
  categoryDataList: CategoriesType & StringKeyValueType[];
  dataKeys: string[];
  categoryName: string;
  dispatchFunc: ActionCreator<any>;
}

const FavoritesItem = ({
  categoryDataList,
  dataKeys,
  categoryName,
  dispatchFunc,
}: FavoritesItemProps) => {
  const dispatch = useAppDispatch();
  if (!categoryDataList.length) {
    return (
      <GenericNotFound
        title={`No ${categoryName} added`}
        message="Consider adding new favorites to your favorites list."
      />
    );
  }

  const handleRemoveFromFavorite = (category: CategoryType) => {
    dispatch(dispatchFunc(category as IPlanet | IPerson | IStarship));
    showInformation(Notification.info.title, Notification.info.message);
  };

  return (
    <Grid container className={styles.favorites}>
      <Grid container className={styles.detailsItem}>
        <Grid item xs={12} className={styles.item}>
          {dataKeys.map((key, index) => (
            <Grid item xs={12} className={styles.title} key={index}>
              {categoriesTitles[key]}
            </Grid>
          ))}
          <Grid item xs={12} className={styles.title}>
            Remove
          </Grid>
        </Grid>
        {categoryDataList.map((data, index) => (
          <Grid item xs={12} className={styles.item} key={index}>
            {dataKeys.map((key, idx) => (
              <Grid item xs={12} className={styles.value} key={idx}>
                {data[key]}
              </Grid>
            ))}
            <MdFavorite
              className={styles.icon_heart}
              onClick={() => handleRemoveFromFavorite(data as CategoryType)}
              aria-label="People favorite"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default FavoritesItem;
