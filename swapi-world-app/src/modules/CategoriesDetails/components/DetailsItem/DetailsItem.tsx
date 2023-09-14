import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import { ContentContainer, GridContent } from 'common/components/ContentBox/ContentBox';
import Loader from 'common/components/Loader/Loader';
import { showError } from 'common/components/Toast';
import { IFilm, IPerson, ISpecie, IStarship, IVehicle } from 'common/models';
import { categoriesTitles } from 'common/utils/categoritesTitleConfig';
import { Notification } from 'common/utils/messages';
import { fetchApiInParallel } from 'modules/CategoriesDetails/api/services';

import styles from './DetailsItem.module.scss';

interface DetailsItemProps {
  dataList: string[];
  dataKeys: string[];
  category: {
    name: string;
    domain: string;
  };
}

type CategoryType = IFilm[] | IPerson[] | IStarship[] | IVehicle[] | ISpecie[];
type StringKeyType = { [key: string]: string }[];
type ResponseListType = StringKeyType & CategoryType;

const DetailsItem = ({ dataList, dataKeys, category }: DetailsItemProps) => {
  const [dataItems, setDataItems] = useState<ResponseListType | undefined>();
  const { name, domain } = category;

  if (!dataList || !dataList?.length) {
    return (
      <ContentContainer className={styles.noItems}>
        <GridContent>{`There are no ${name} available for this ${domain}.`}</GridContent>
      </ContentContainer>
    );
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const { results, errors } = dataList.length
        ? await fetchApiInParallel(dataList)
        : { results: null, errors: null };
      if (results) {
        setDataItems(results as ResponseListType);
      }
      if (errors) {
        showError(Notification.error.title, Notification.error.message);
      }
    };
    asyncFunction();
  }, []);

  return (
    <Grid container className={styles.details}>
      {dataItems && dataItems?.length ? (
        <Grid container className={styles.detailsItem}>
          <GridContent className={styles.item}>
            {dataKeys.map((key, index) => (
              <Grid item xs={12} className={styles.title} key={index}>
                {categoriesTitles[key]}
              </Grid>
            ))}
          </GridContent>
          {dataItems.map((data, index) => (
            <GridContent className={styles.item} key={index}>
              {dataKeys.map((key, idx) => (
                <Grid item xs={12} className={styles.value} key={idx}>
                  {data[key]}
                </Grid>
              ))}
            </GridContent>
          ))}
        </Grid>
      ) : (
        <Loader width={60} height={60} />
      )}
    </Grid>
  );
};

export default DetailsItem;
