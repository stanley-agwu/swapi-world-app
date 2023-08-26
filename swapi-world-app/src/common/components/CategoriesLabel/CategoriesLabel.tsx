import { useAppSelector } from 'common/api/store/hooks';

import { CategoriesEnum } from '../../utils/CategoriesEnum';

import CategoriesLabelItem from './CategoriesLabelItem';

import styles from './CategoriesLabel.module.scss';

const CategoriesLabel = () => {
  const activeCategory = useAppSelector((state) => state.swapi.category.dashboard);

  const categories = [CategoriesEnum.planets, CategoriesEnum.people, CategoriesEnum.starships];

  return (
    <div className={styles.categories}>
      {categories.map((category, idx) => (
        <CategoriesLabelItem activeCategory={activeCategory} category={category} key={idx} />
      ))}
    </div>
  );
};

export default CategoriesLabel;
