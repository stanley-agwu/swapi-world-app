import { useAppSelector } from 'common/api/store/hooks';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';
import Planets from 'modules/planets/components/Planets';

const CategoriesContainer = () => {
  const activeCategory = useAppSelector((state) => state.swapi.category);

  if (activeCategory === CategoriesEnum.planets) {
    return <Planets />;
  }
  // if (activeCategory === CategoriesEnum.people) {
  //   return <People />;
  // }
  // return <StarShips />;
  return null;
};

export default CategoriesContainer;
