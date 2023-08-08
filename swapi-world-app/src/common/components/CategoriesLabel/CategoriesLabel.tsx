import { MouseEvent } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { setCategory } from 'common/api/store/slice/swapiSlice';

import { CategoriesEnum } from '../../utils/CategoriesEnum';

import styles from './CategoriesLabel.module.scss';

const Categories = () => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector((state) => state.swapi.category);

  const categories = [CategoriesEnum.planets, CategoriesEnum.people, CategoriesEnum.starships];

  const handleCategoryChange = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setCategory(e.currentTarget.title));
  };
  return (
    <div className={styles.categories}>
      {categories.map((category, idx) => (
        <div
          role="button"
          title={category}
          className={classNames(
            styles.categoriesItem,
            activeCategory === category ? styles.active : undefined
          )}
          aria-label={category}
          onClick={(e) => handleCategoryChange(e)}
          key={idx}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
