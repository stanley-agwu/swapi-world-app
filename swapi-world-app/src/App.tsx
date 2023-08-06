import 'common/utils/extensions';

import Categories from 'common/components/Categories/Categories';
import Header from 'common/components/Header/Header';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Categories />
      <div>Hello World</div>
    </div>
  );
}

export default App;
