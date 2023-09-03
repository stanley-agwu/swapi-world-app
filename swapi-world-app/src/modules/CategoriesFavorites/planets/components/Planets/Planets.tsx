import { useAppSelector } from 'common/api/store/hooks';
import { IPlanet } from 'common/models';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { categoriesTitlesKeys } from 'common/utils/categoriesTitlesKeys';
import FavoritesItem from 'modules/CategoriesFavorites/components/FavoritesItem/FavoritesItem';

type PlanetsDataListType = IPlanet[] & { [key: string]: string }[];

const Planets = () => {
  const favoritePlanets = useAppSelector((state) => state.swapi.favorites.planets);
  return (
    <FavoritesItem
      categoryDataList={favoritePlanets as PlanetsDataListType}
      dataKeys={categoriesTitlesKeys.planetsKeys}
      categoryName={CategoriesEnum.favoritePlanets}
    />
  );
};

export default Planets;
