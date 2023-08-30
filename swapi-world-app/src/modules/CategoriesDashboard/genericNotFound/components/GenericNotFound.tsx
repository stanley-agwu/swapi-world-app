import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'common/api/store/hooks';
import { getRedirectRoute } from 'common/utils/common';

import { ReactComponent as DocumentIcon } from '../assets/document.svg';

import styles from './GenericNotFound.module.scss';

const GenericNotFound = () => {
  const navigate = useNavigate();
  const { category } = useAppSelector((state) => state.swapi);
  const redirectRoute = getRedirectRoute(category);

  useEffect(() => {
    if (redirectRoute) {
      navigate(redirectRoute);
    }
  }, [redirectRoute]);

  return (
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
};

export default GenericNotFound;
