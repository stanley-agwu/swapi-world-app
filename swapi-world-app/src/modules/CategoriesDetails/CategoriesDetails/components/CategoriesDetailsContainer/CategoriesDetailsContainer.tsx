import { MouseEvent } from 'react';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';
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
      {id ? <CategoriesDetailsItem id={id} /> : null}
    </div>
  );
};

export default CategoriesDetailsContainer;
