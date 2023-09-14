interface CategoriesTitlesKeys {
  [key: string]: string[];
}

export const categoriesTitlesKeys: CategoriesTitlesKeys = {
  planetsKeys: ['name', 'terrain', 'population', 'climate'],
  filmsKeys: ['title', 'director', 'producer', 'release_date'],
  residentKeys: ['name', 'birth_year', 'gender', 'skin_color'],
  pilotsKeys: ['name', 'birth_year', 'gender', 'skin_color'],
  speciesKeys: ['name', 'classification', 'designation', 'language'],
  starshipsKeys: ['name', 'manufacturer', 'crew', 'passengers'],
  vehiclesKeys: ['name', 'model', 'manufacturer', 'passengers'],
};
