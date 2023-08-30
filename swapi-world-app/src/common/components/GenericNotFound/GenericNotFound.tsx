import { ReactComponent as DocumentIcon } from './assets/document.svg';

import styles from './GenericNotFound.module.scss';

const GenericNotFound = () => (
  <div className={styles.genericNotFound}>
    <div className={styles.icon}>
      <DocumentIcon />
    </div>
    <div className={styles.text}>
      <div className={styles.title}>No resources found</div>
      <div>There are no resources for this url, please select another view.</div>
    </div>
  </div>
);

export default GenericNotFound;
