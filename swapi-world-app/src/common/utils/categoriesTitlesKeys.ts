interface CategoriesTitlesKeys {
  [key: string]: string[];
}

export const categoriesTitlesKeys: CategoriesTitlesKeys = {
  planetsKeys: ['name', 'terrain', 'population', 'climate'],
  filmsKeys: ['title', 'director', 'producer', 'release_date'],
  residentKeys: ['name', 'birth_year', 'gender', 'skin_color', 'hair_color'],
  pilotsKeys: ['name', 'birth_year', 'gender', 'skin_color', 'hair_color'],
  speciesKeys: ['name', 'classification', 'designation', 'average_height', 'language'],
  starshipsKeys: ['name', 'manufacturer', 'crew', 'passengers'],
  vehiclesKeys: ['name', 'model', 'manufacturer', 'crew', 'passengers', 'consumables'],
};
