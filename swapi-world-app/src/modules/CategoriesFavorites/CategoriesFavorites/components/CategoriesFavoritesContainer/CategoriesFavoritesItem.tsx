import { Route, Routes } from 'react-router-dom';

import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import { coreConfig } from 'common/core/config';
import People from 'modules/CategoriesFavorites/people/components/People/People';
import Planets from 'modules/CategoriesFavorites/planets/components/Planets/Planets';
import Starships from 'modules/CategoriesFavorites/starships/components/Starships/Starships';

const CategoriesFavoritesItem = () => (
  <Routes>
    <Route path={coreConfig.routes.favorites.planets} element={<Planets />} />
    <Route path={coreConfig.routes.favorites.people} element={<People />} />
    <Route path={coreConfig.routes.favorites.starships} element={<Starships />} />
    <Route path="*" element={<GenericNotFound />} />
  </Routes>
);

export default CategoriesFavoritesItem;
