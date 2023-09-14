import { Fragment } from 'react';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';
import { ContentBox, ContentContainer } from 'common/components/ContentBox/ContentBox';

import CategoriesDetailsItem from './CategoriesDetailsItem';

import styles from './CategoriesDetailsContainer.module.scss';

const CategoriesDetailsContainer = () => {
  const { id, title } = useAppSelector((state) => state.swapi.category);
  return (
    <Fragment>
      <ContentContainer className={styles.categoriesLabelItemWrapper}>
        <CategoriesLabelItem
          category={title}
          activeCategory={title}
          classname={styles.categoriesLabelItem}
        />
      </ContentContainer>
      <ContentContainer className={styles.categoriesDetailsItemWrapper}>
        <ContentBox>
          <CategoriesDetailsItem id={id as string} />
        </ContentBox>
      </ContentContainer>
    </Fragment>
  );
};

export default CategoriesDetailsContainer;
