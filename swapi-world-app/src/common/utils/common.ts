import { coreConfig } from 'common/core/config';
import { CategoriesEnum } from 'common/utils/categoriesEnum';

export const getDashboardCategoryFromRoute = (category: string) => {
  switch (true) {
    case category === coreConfig.routes.dashboard.planets:
      return CategoriesEnum.planets;
    case category === coreConfig.routes.dashboard.people:
      return CategoriesEnum.people;
    case category === coreConfig.routes.dashboard.starships:
      return CategoriesEnum.starships;
    default:
      return null;
  }
};

export const getDashboardCategoryRoute = (category: string) => {
  if (category === CategoriesEnum.starships) {
    return coreConfig.routes.dashboard.starships;
  }
  if (category === CategoriesEnum.planets) {
    return coreConfig.routes.dashboard.planets;
  }
  if (category === CategoriesEnum.people) {
    return coreConfig.routes.dashboard.people;
  }
  return '';
};

interface RouteProps {
  title?: CategoriesEnum;
  id?: string;
}

export const getRedirectRoute = ({ title, id }: RouteProps) => {
  if (title && id) {
    return coreConfig.routes.details.route.format(title, id);
  }
  if (title) {
    return coreConfig.routes.dashboard.route.format(title);
  }
  return null;
};
