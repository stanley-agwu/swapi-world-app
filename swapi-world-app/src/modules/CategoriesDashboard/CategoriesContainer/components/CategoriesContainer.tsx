import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppSelector } from 'common/api/store/hooks';
import CategoriesLabel from 'common/components/CategoriesLabel/CategoriesLabel';
import { coreConfig } from 'common/core/config';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

import CategoriesItem from './CategoriesItem';

const CategoriesContainer = () => {
  const navigate = useNavigate();
  const activeCategory: CategoriesEnum = useAppSelector((state) => state.swapi.category);

  useEffect(() => {
    if (activeCategory === CategoriesEnum.starships) {
      return navigate(coreConfig.routes.dashboard.starships);
    }
    if (activeCategory === CategoriesEnum.planets) {
      return navigate(coreConfig.routes.dashboard.planets);
    }
    return navigate(coreConfig.routes.dashboard.people);
  }, [activeCategory]);

  return (
    <Fragment>
      <CategoriesLabel />
      <CategoriesItem />
    </Fragment>
  );
};

export default CategoriesContainer;
