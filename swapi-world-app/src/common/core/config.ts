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
      planets: string;
      people: string;
      starships: string;
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
      root: '/dashboard',
      planets: '/dashboard/planets',
      people: '/dashboard/people',
      starships: '/dashboard/starships',
    },
    details: {
      root: '/details',
      planets: '/details/planets/{0}',
      people: '/details/people/{0}',
      starships: '/details/starships/{0}',
    },
  },
};
