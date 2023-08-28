import { Fragment } from 'react';

import CategoriesLabel from 'common/components/CategoriesLabel/CategoriesLabel';

import CategoriesItem from './CategoriesItem';

const CategoriesContainer = () => (
  <Fragment>
    <CategoriesLabel />
    <CategoriesItem />
  </Fragment>
);

export default CategoriesContainer;
