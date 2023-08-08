import { Route, Routes } from 'react-router-dom';

import 'common/utils/extensions';

import Header from 'common/components/Header/Header';
import { coreConfig } from 'common/core/config';
import CategoriesContainer from 'modules/CategoriesDashboard/CategoriesContainer/components/CategoriesContainer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path={coreConfig.routes.root} element={<CategoriesContainer />} />
        {/* <Route path={coreConfig.routes.planets} element={<Planet />} /> */}
      </Routes>
    </div>
  );
}

export default App;
