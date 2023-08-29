import { Route, Routes } from 'react-router-dom';

import { coreConfig } from 'common/core/config';
import Person from 'modules/CategoriesDetails/person/components/Person/Person';
import Planet from 'modules/CategoriesDetails/planet/components/Planet/Planet';

interface CategoriesDetailsItemProps {
  id: string;
}

const CategoriesDetailsItem = ({ id }: CategoriesDetailsItemProps) => (
  <Routes>
    <Route path={coreConfig.routes.details.planet.format(id)} element={<Planet id={id} />} />
    <Route path={coreConfig.routes.details.person.format(id)} element={<Person id={id} />} />
    {/* <Route path={coreConfig.routes.dashboard.starships} element={<Starship />} /> */}
  </Routes>
);

export default CategoriesDetailsItem;
