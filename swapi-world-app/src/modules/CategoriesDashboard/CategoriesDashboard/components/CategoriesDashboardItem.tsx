import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from 'common/components/Loader/PageLoader';
import { coreConfig } from 'common/core/config';

const People = lazy(() => import('modules/CategoriesDashboard/people/components/People'));
const Planets = lazy(() => import('modules/CategoriesDashboard/planets/components/Planets'));
const Starships = lazy(() => import('modules/CategoriesDashboard/starships/components/Starships'));
const GenericNotFound = lazy(() => import('common/components/GenericNotFound/GenericNotFound'));

const CategoriesDashboardItem = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path={coreConfig.routes.dashboard.planets} element={<Planets />} />
      <Route path={coreConfig.routes.dashboard.people} element={<People />} />
      <Route path={coreConfig.routes.dashboard.starships} element={<Starships />} />
      <Route path="*" element={<GenericNotFound />} />
    </Routes>
  </Suspense>
);

export default CategoriesDashboardItem;
