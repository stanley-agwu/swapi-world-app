import { Fragment } from 'react';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabel from 'common/components/CategoriesLabel/CategoriesLabel';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

import CategoriesItem from './CategoriesItem';

const CategoriesContainer = () => {
  const activeCategory: CategoriesEnum = useAppSelector((state) => state.swapi.category);
  return (
    <Fragment>
      <CategoriesLabel />
      <CategoriesItem activeCategory={activeCategory} />
    </Fragment>
  );
};

export default CategoriesContainer;
