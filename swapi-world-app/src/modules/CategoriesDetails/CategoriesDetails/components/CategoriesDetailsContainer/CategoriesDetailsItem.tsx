import { Route, Routes } from 'react-router-dom';

import { coreConfig } from 'common/core/config';
import Planet from 'modules/CategoriesDetails/planet/components/Planet/Planet';

interface CategoriesDetailsItemProps {
  id: string;
}

const CategoriesDetailsItem = ({ id }: CategoriesDetailsItemProps) => (
  <Routes>
    <Route path={coreConfig.routes.details.planet.format(id)} element={<Planet id={id} />} />
    {/* <Route path={coreConfig.routes.details.person} element={<Person />} /> */}
    {/* <Route path={coreConfig.routes.dashboard.starships} element={<Starship />} /> */}
  </Routes>
);

export default CategoriesDetailsItem;
