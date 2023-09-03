import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'common/api/store/hooks';
import { setCategory } from 'common/api/store/slice/swapiSlice';
import { coreConfig } from 'common/core/config';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { getDashboardCategoryFromRoute, getFavoritesCategoryFromRoute } from 'common/utils/common';

const dashboardCategoryMatchRegex = /^\/dashboard\/(planets|people|starships)$/;
const detailsCategoryMatchRegex = /^\/details\/(planets|people|starships)\/(\d+)$/;
const favoritesCategoryMatchRegex = /^\/favorites\/(planets|people|starships)$/;

const useSetCategoriesFromRoute = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (dashboardCategoryMatchRegex.test(location.pathname)) {
      const category = location.pathname.split('/').reverse()[0];
      dispatch(setCategory({ title: getDashboardCategoryFromRoute(category) }));
    }
    if (favoritesCategoryMatchRegex.test(location.pathname)) {
      const category = location.pathname.split('/').reverse()[0];
      dispatch(setCategory({ title: getFavoritesCategoryFromRoute(category) }));
    }
    if (detailsCategoryMatchRegex.test(location.pathname)) {
      const [id, title] = location.pathname.split('/').reverse();
      dispatch(setCategory({ title, id }));
    }
    if (location.pathname === coreConfig.routes.baseUrl) {
      dispatch(setCategory({ title: CategoriesEnum.planets }));
      navigate(coreConfig.routes.dashboard.path.planets);
    }
  }, [location.pathname]);
};

export default useSetCategoriesFromRoute;
