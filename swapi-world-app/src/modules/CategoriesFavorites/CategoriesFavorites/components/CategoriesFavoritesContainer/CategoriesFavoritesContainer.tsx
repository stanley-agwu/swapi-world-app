import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { getCategoriesDetailsTitle } from 'modules/CategoriesDetails/utils/common';

import CategoriesFavoritesItem from './CategoriesFavoritesItem';

import styles from './CategoriesFavoritesContainer.module.scss';

const CategoriesFavoritesContainer = () => {
  const { title } = useAppSelector((state) => state.swapi.category);
  return (
    <div className={styles.categoriesFavoritesContainer}>
      <CategoriesLabelItem
        category={getCategoriesDetailsTitle(title as CategoriesEnum)}
        activeCategory={title}
        classname={styles.categoriesFavoritesItem}
      />
      <CategoriesFavoritesItem />
    </div>
  );
};

export default CategoriesFavoritesContainer;
