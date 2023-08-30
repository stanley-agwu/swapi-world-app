import { MouseEvent } from 'react';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';
import PageLoader from 'common/components/Loader/PageLoader';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { getCategoriesDetailsTitle } from 'modules/CategoriesDetails/utils/common';

import CategoriesDetailsItem from './CategoriesDetailsItem';

import styles from './CategoriesDetailsContainer.module.scss';

const CategoriesDetailsContainer = () => {
  const { id, title } = useAppSelector((state) => state.swapi.category);
  const handleCategoryChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.categoriesDetailsContainer}>
      <CategoriesLabelItem
        category={getCategoriesDetailsTitle(title as CategoriesEnum)}
        activeCategory={title}
        handleCategoryChange={handleCategoryChange}
        classname={styles.categoriesDetailsItem}
      />
      {id ? (
        <CategoriesDetailsItem id={id} />
      ) : (
        <PageLoader width={100} height={100} className={styles.loaderContainer} />
      )}
    </div>
  );
};

export default CategoriesDetailsContainer;
