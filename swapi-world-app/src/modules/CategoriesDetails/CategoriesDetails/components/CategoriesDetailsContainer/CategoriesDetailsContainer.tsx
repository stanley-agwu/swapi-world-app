import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';
import PageLoader from 'common/components/Loader/PageLoader';

import CategoriesDetailsItem from './CategoriesDetailsItem';

import styles from './CategoriesDetailsContainer.module.scss';

const CategoriesDetailsContainer = () => {
  const { id, title } = useAppSelector((state) => state.swapi.category);
  return (
    <div className={styles.categoriesDetailsContainer}>
      <CategoriesLabelItem
        category={title}
        activeCategory={title}
        classname={styles.categoriesDetailsItem}
      />
      {id ? <CategoriesDetailsItem id={id} /> : <PageLoader className={styles.loaderContainer} />}
    </div>
  );
};

export default CategoriesDetailsContainer;
