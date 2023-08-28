import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'common/api/store/hooks';
import { setCategory } from 'common/api/store/slice/swapiSlice';
import { getDashboardCategoryFromRoute } from 'common/utils/common';

const dashboardCategoryMatchRegex = /^\/dashboard\/(planets|people|starships)$/;
const detailsCategoryMatchRegex = /^\/details\/(planets|people|starships)\/(\d+)$/;

const useSetCategoriesFromRoute = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (dashboardCategoryMatchRegex.test(location.pathname)) {
      const category = location.pathname.split('/').reverse()[0];
      dispatch(setCategory({ title: getDashboardCategoryFromRoute(category) }));
    }
    if (detailsCategoryMatchRegex.test(location.pathname)) {
      const [id, title] = location.pathname.split('/').reverse();
      dispatch(setCategory({ title, id }));
    }
  }, [location.pathname]);
};

export default useSetCategoriesFromRoute;
