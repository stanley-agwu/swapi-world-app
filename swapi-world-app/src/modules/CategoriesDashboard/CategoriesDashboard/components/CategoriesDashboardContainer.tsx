import { Fragment } from 'react';

import CategoriesLabel from 'common/components/CategoriesLabel/CategoriesLabel';

import CategoriesDashboardItem from './CategoriesDashboardItem';

const CategoriesDashboardContainer = () => (
  <Fragment>
    <CategoriesLabel />
    <CategoriesDashboardItem />
  </Fragment>
);

export default CategoriesDashboardContainer;
