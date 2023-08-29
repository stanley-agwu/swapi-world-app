import { CategoriesEnum } from 'common/utils/categoriesEnum';

export const getCategoriesDetailsTitle = (category: CategoriesEnum) => {
  switch (true) {
    case category === CategoriesEnum.planets:
      return CategoriesEnum.planet;
    case category === CategoriesEnum.people:
      return CategoriesEnum.person;
    case category === CategoriesEnum.starships:
      return CategoriesEnum.starship;
    default:
      return undefined;
  }
};
