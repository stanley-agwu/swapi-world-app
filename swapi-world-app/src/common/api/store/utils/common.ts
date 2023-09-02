import { IPerson, IPlanet, IStarship } from 'common/models';

type CategoriesType = IPlanet[] | IPerson[] | IStarship[];

export const getCategoryWithoutFavorites = (
  categoryList: CategoriesType,
  favoritesList: string[]
) => {
  if (favoritesList.length === 0) {
    return categoryList;
  }
  const favoritesSet = new Set(favoritesList);
  return categoryList
    .map((category) => {
      return favoritesSet.has(category.name) ? null : category;
    })
    .filter((result) => result);
};
