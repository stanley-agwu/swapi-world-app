import { Link } from 'react-router-dom';

import { ReactComponent as BackArrow } from './assets/arrow.svg';

import styles from './Back.module.scss';

interface BackProps {
  url: string;
}

const Back = ({ url }: BackProps) => (
  <div className={styles.back}>
    <Link to={url} className={styles.link}>
      <BackArrow />
      <span className={styles.text}>Back</span>
    </Link>
  </div>
);

export default Back;
