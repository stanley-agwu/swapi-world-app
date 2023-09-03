import { useAppSelector } from 'common/api/store/hooks';
import { IPerson } from 'common/models';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { categoriesTitlesKeys } from 'common/utils/categoriesTitlesKeys';
import FavoritesItem from 'modules/CategoriesFavorites/components/FavoritesItem/FavoritesItem';

type PlanetsDataListType = IPerson[] & { [key: string]: string }[];

const People = () => {
  const favoritePeople = useAppSelector((state) => state.swapi.favorites.people);
  return (
    <FavoritesItem
      categoryDataList={favoritePeople as PlanetsDataListType}
      dataKeys={categoriesTitlesKeys.residentKeys}
      categoryName={CategoriesEnum.favoritePeople}
    />
  );
};

export default People;
