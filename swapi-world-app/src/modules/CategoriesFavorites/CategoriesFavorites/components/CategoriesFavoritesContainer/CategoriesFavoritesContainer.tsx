import { Fragment } from 'react';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';
import { ContentContainer } from 'common/components/ContentBox/ContentBox';

import CategoriesFavoritesItem from './CategoriesFavoritesItem';

import styles from './CategoriesFavoritesContainer.module.scss';

const CategoriesFavoritesContainer = () => {
  const { title } = useAppSelector((state) => state.swapi.category);
  return (
    <Fragment>
      <ContentContainer className={styles.categoriesFavoritesItemWrapper}>
        <CategoriesLabelItem
          category={title}
          activeCategory={title}
          classname={styles.categoriesFavoritesItem}
        />
      </ContentContainer>
      <ContentContainer>
        <CategoriesFavoritesItem />
      </ContentContainer>
    </Fragment>
  );
};

export default CategoriesFavoritesContainer;
