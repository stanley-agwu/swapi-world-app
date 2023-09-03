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

export const getFavoritesCategoryFromRoute = (category: string) => {
  switch (true) {
    case category === coreConfig.routes.favorites.planets:
      return CategoriesEnum.favoritePlanets;
    case category === coreConfig.routes.favorites.people:
      return CategoriesEnum.favoritePeople;
    case category === coreConfig.routes.favorites.starships:
      return CategoriesEnum.favoriteStarships;
    default:
      return null;
  }
};

export const getCategoriesDetailsFromRoute = (category: string) => {
  switch (true) {
    case category === coreConfig.routes.dashboard.planets:
      return CategoriesEnum.planet;
    case category === coreConfig.routes.dashboard.people:
      return CategoriesEnum.person;
    case category === coreConfig.routes.dashboard.starships:
      return CategoriesEnum.starship;
    default:
      return undefined;
  }
};

export const getDashboardCategoryRoute = (category: string) => {
  if (category === CategoriesEnum.starships) {
    return coreConfig.routes.dashboard.path.starships;
  }
  if (category === CategoriesEnum.planets) {
    return coreConfig.routes.dashboard.path.planets;
  }
  if (category === CategoriesEnum.people) {
    return coreConfig.routes.dashboard.path.people;
  }
  return '';
};
