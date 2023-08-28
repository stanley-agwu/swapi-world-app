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
    dashboard: {
      root: string;
      planets: string;
      people: string;
      starships: string;
    };
    details: {
      root: string;
      planet: string;
      person: string;
      starship: string;
      planetUrl: string;
      personUrl: string;
      starshipUrl: string;
    };
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
    dashboard: {
      root: 'dashboard/*',
      planets: 'planets',
      people: 'people',
      starships: 'starships',
    },
    details: {
      root: 'details/*',
      planet: 'planets/{0}',
      person: 'people/{0}',
      starship: 'starships/{0}',
      planetUrl: '/details/planets/{0}',
      personUrl: '/details/people/{0}',
      starshipUrl: '/details/starships/{0}',
    },
  },
};
