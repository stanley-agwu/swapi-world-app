import { ReactComponent as DocumentIcon } from './assets/document.svg';

import styles from './GenericNotFound.module.scss';

interface GenericNotFoundProps {
  title?: string;
  message?: string;
}

const GenericNotFound = ({ title, message }: GenericNotFoundProps) => (
  <div className={styles.genericNotFound}>
    <div className={styles.icon}>
      <DocumentIcon />
    </div>
    <div className={styles.text}>
      <div className={styles.title}>{title || 'No resources found'}</div>
      <div>{message || 'There are no resources for this url, please select another view.'}</div>
    </div>
  </div>
);

export default GenericNotFound;
