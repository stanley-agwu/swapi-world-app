import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'common/api/store/hooks';
import { getDashboardCategoryRoute } from 'common/utils/common';

import { CategoriesEnum } from '../../utils/categoriesEnum';

import CategoriesLabelItem from './CategoriesLabelItem';

import styles from './CategoriesLabel.module.scss';

const CategoriesLabel = () => {
  const navigate = useNavigate();
  const activeCategory = useAppSelector((state) => state.swapi.category.title);

  const categories = [CategoriesEnum.planets, CategoriesEnum.people, CategoriesEnum.starships];

  const handleCategoryChange = (e: MouseEvent<HTMLButtonElement>) => {
    const { title } = e.currentTarget;
    if (title) {
      navigate(getDashboardCategoryRoute(title));
    }
  };

  return (
    <div className={styles.categories}>
      {categories.map((category, idx) => (
        <CategoriesLabelItem
          activeCategory={activeCategory}
          category={category}
          handleCategoryChange={handleCategoryChange}
          key={idx}
        />
      ))}
    </div>
  );
};

export default CategoriesLabel;
