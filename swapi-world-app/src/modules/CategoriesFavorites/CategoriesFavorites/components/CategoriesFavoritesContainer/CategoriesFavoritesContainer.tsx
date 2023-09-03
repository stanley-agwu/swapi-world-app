import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';

import CategoriesFavoritesItem from './CategoriesFavoritesItem';

import styles from './CategoriesFavoritesContainer.module.scss';

const CategoriesFavoritesContainer = () => {
  const { title } = useAppSelector((state) => state.swapi.category);
  return (
    <div className={styles.categoriesFavoritesContainer}>
      <CategoriesLabelItem
        category={title}
        activeCategory={title}
        classname={styles.categoriesFavoritesItem}
      />
      <CategoriesFavoritesItem />
    </div>
  );
};

export default CategoriesFavoritesContainer;
