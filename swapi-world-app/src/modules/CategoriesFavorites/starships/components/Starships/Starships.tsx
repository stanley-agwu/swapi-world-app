import { useAppSelector } from 'common/api/store/hooks';
import { IStarship } from 'common/models';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { categoriesTitlesKeys } from 'common/utils/categoriesTitlesKeys';
import FavoritesItem from 'modules/CategoriesFavorites/components/FavoritesItem/FavoritesItem';

type PlanetsDataListType = IStarship[] & { [key: string]: string }[];

const Starships = () => {
  const favoriteStarships = useAppSelector((state) => state.swapi.favorites.starships);
  return (
    <FavoritesItem
      categoryDataList={favoriteStarships as PlanetsDataListType}
      dataKeys={categoriesTitlesKeys.starshipsKeys}
      categoryName={CategoriesEnum.favoriteStarships}
    />
  );
};

export default Starships;
