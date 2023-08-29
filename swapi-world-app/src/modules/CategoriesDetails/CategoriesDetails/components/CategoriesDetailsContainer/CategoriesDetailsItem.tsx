import { Route, Routes } from 'react-router-dom';

import { coreConfig } from 'common/core/config';
import Person from 'modules/CategoriesDetails/person/components/Person/Person';
import Planet from 'modules/CategoriesDetails/planet/components/Planet/Planet';
import Starship from 'modules/CategoriesDetails/starship/components/Starship/Starship';

interface CategoriesDetailsItemProps {
  id: string;
}

const CategoriesDetailsItem = ({ id }: CategoriesDetailsItemProps) => (
  <Routes>
    <Route path={coreConfig.routes.details.planet.format(id)} element={<Planet id={id} />} />
    <Route path={coreConfig.routes.details.person.format(id)} element={<Person id={id} />} />
    <Route path={coreConfig.routes.details.starship.format(id)} element={<Starship id={id} />} />
  </Routes>
);

export default CategoriesDetailsItem;
