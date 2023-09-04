import { Route, Routes } from 'react-router-dom';

import 'common/utils/extensions';

import Header from 'common/components/Header/Header';
import Toast from 'common/components/Toast/Toast';
import { coreConfig } from 'common/core/config';
import useSetCategoriesFromRoute from 'common/hooks/useSetCategoriesFromRoute';
import CategoriesDashboardContainer from 'modules/CategoriesDashboard/CategoriesDashboard/components/CategoriesDashboardContainer';
import CategoriesDetailsContainer from 'modules/CategoriesDetails/CategoriesDetails/components/CategoriesDetailsContainer/CategoriesDetailsContainer';
import CategoriesFavoritesContainer from 'modules/CategoriesFavorites/CategoriesFavorites/components/CategoriesFavoritesContainer/CategoriesFavoritesContainer';

import styles from './App.module.scss';

function App() {
  useSetCategoriesFromRoute();
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path={coreConfig.routes.dashboard.root} element={<CategoriesDashboardContainer />} />
        <Route path={coreConfig.routes.details.root} element={<CategoriesDetailsContainer />} />
        <Route path={coreConfig.routes.favorites.root} element={<CategoriesFavoritesContainer />} />
        <Route path="*" element={<CategoriesDashboardContainer />} />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
