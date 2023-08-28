import { Fragment } from 'react';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabelItem from 'common/components/CategoriesLabel/CategoriesLabelItem';

import CategoriesDetailsItem from './CategoriesDetailsItem';

const CategoriesDetailsContainer = () => {
  const { id, title } = useAppSelector((state) => state.swapi.category);
  return (
    <Fragment>
      <CategoriesLabelItem category={title} activeCategory={title} />
      {id ? <CategoriesDetailsItem id={id} /> : null}
    </Fragment>
  );
};

export default CategoriesDetailsContainer;
