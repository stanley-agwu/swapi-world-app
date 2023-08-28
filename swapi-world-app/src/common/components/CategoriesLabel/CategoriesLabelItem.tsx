import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { getDashboardCategoryRoute } from 'common/utils/common';

import styles from './CategoriesLabel.module.scss';

interface CategoriesLabelItemProps {
  category: CategoriesEnum | undefined;
  activeCategory: string | undefined;
}

const CategoriesLabelItem = ({
  category,
  activeCategory,
}: CategoriesLabelItemProps): JSX.Element => {
  const navigate = useNavigate();
  const handleCategoryChange = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    if (title) {
      navigate(getDashboardCategoryRoute(title) as string);
    }
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
