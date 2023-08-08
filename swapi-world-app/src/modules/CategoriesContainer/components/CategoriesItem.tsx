import { CategoriesEnum } from 'common/utils/CategoriesEnum';
import Planets from 'modules/planets/components/Planets';

interface ICategoriesItem {
  activeCategory: CategoriesEnum;
}

const CategoriesItem = ({ activeCategory }: ICategoriesItem) => {
  if (activeCategory === CategoriesEnum.planets) {
    return <Planets />;
  }
  // if (activeCategory === CategoriesEnum.people) {
  //   return <People />;
  // }
  // return <StarShips />;
  return null;
};

export default CategoriesItem;
