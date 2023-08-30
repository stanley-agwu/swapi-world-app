import { Route, Routes } from 'react-router-dom';

import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import { coreConfig } from 'common/core/config';
import People from 'modules/CategoriesDashboard/people/components/People';
import Planets from 'modules/CategoriesDashboard/planets/components/Planets';
import Starships from 'modules/CategoriesDashboard/starships/components/Starships';

const CategoriesDashboardItem = () => (
  <Routes>
    <Route path={coreConfig.routes.dashboard.planets} element={<Planets />} />
    <Route path={coreConfig.routes.dashboard.people} element={<People />} />
    <Route path={coreConfig.routes.dashboard.starships} element={<Starships />} />
    <Route path="*" element={<GenericNotFound />} />
  </Routes>
);

export default CategoriesDashboardItem;
