import React from 'react';
import Header from 'modules/common/Header/Header';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div>Hello World</div>
    </div>
  );
}

export default App;
