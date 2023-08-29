import moment from 'moment';

import { CategoriesEnum } from 'common/utils/categoriesEnum';

export const formatUTCDate = (date: string | undefined) =>
  date ? moment.utc(date).format('DD/MM/YYYY') : date;

export const hasData = (data: string[]) => Boolean(data.length);

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
