import { ButtonHTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';

import { CategoriesEnum } from 'common/utils/categoriesEnum';

import styles from './CategoriesLabel.module.scss';

interface CategoriesLabelItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: CategoriesEnum | undefined;
  activeCategory: string | undefined;
  classname?: string;
  handleCategoryChange?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CategoriesLabelItem = ({
  category,
  activeCategory,
  classname,
  handleCategoryChange,
}: CategoriesLabelItemProps): JSX.Element => (
  <button
    role="button"
    title={category}
    className={classNames(
      styles.categoriesItem,
      classname,
      activeCategory === category ? styles.active : undefined
    )}
    aria-label={category}
    onClick={(e) => (handleCategoryChange ? handleCategoryChange(e) : undefined)}
  >
    {category}
  </button>
);

export default CategoriesLabelItem;
