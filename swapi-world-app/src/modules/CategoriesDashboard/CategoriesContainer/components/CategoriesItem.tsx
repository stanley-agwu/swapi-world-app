import { CategoriesEnum } from 'common/utils/CategoriesEnum';
import People from 'modules/CategoriesDashboard/people/components/People';
import Planets from 'modules/CategoriesDashboard/planets/components/Planets';

interface ICategoriesItem {
  activeCategory: CategoriesEnum;
}

const CategoriesItem = ({ activeCategory }: ICategoriesItem) => {
  if (activeCategory === CategoriesEnum.planets) {
    return <Planets />;
  }
  if (activeCategory === CategoriesEnum.people) {
    return <People />;
  }
  // return <StarShips />;
  return null;
};

export default CategoriesItem;
