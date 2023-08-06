import 'common/utils/extensions';

import Categories from 'common/components/Categories/Categories';
import Header from 'common/components/Header/Header';
import CategoriesContainer from 'modules/CategoriesContainer/components/CategoriesContainer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Categories />
      <CategoriesContainer />
    </div>
  );
}

export default App;
