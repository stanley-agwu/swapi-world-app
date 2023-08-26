import { MouseEvent } from 'react';
import classNames from 'classnames';

import { useAppDispatch } from 'common/api/store/hooks';
import { setCategory } from 'common/api/store/slice/swapiSlice';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

import styles from './CategoriesLabel.module.scss';

interface CategoriesLabelItemProps {
  category: CategoriesEnum;
  activeCategory: string;
}

const CategoriesLabelItem = ({
  category,
  activeCategory,
}: CategoriesLabelItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCategoryChange = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setCategory(e.currentTarget.title));
  };

  return (
    <div
      role="button"
      title={category}
      className={classNames(
        styles.categoriesItem,
        activeCategory === category ? styles.active : undefined
      )}
      aria-label={category}
      onClick={(e) => handleCategoryChange(e)}
    >
      {category}
    </div>
  );
};

export default CategoriesLabelItem;
