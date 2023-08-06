interface CoreConfig {
  endpoints: {
    root: string;
    people: string;
    planets: string;
    films: string;
    species: string;
    vehicles: string;
    starships: string;
    person: string;
    planet: string;
    film: string;
    specie: string;
    vehicle: string;
    starship: string;
  };
  routes: {
    root: string;
    people: string;
    planets: string;
    films: string;
    species: string;
    vehicles: string;
    starships: string;
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
    root: 'https://swapi.dev/api/',
    people: 'people/?page={0}',
    planets: 'planets/?page={0}',
    films: 'films/?page={0}',
    species: 'species/?page={0}',
    vehicles: 'vehicles/?page={0}',
    starships: 'starships/?page={0}',
    person: 'people/{0}',
    planet: 'planets/{0}',
    film: 'films/{0}',
    specie: 'species/{0}',
    vehicle: 'vehicles/{0}',
    starship: 'starships/{0}',
  },
  routes: {
    root: 'https://swapi.dev/api/',
    people: '',
    planets: '',
    films: '',
    species: '',
    vehicles: '',
    starships: '',
  },
};
