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
    baseUrl: string;
    dashboard: {
      root: string;
      route: string;
      planets: string;
      people: string;
      starships: string;
      path: {
        planets: string;
        people: string;
        starships: string;
      };
    };
    details: {
      root: string;
      route: string;
      planet: string;
      person: string;
      starship: string;
      path: {
        planet: string;
        person: string;
        starship: string;
      };
    };
    favorites: {
      root: string;
      route: string;
      planets: string;
      people: string;
      starships: string;
      path: {
        planets: string;
        people: string;
        starships: string;
      };
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
    baseUrl: '/',
    dashboard: {
      root: 'dashboard/*',
      route: '/dashboard/{0}',
      planets: 'planets',
      people: 'people',
      starships: 'starships',
      path: {
        planets: '/dashboard/planets',
        people: '/dashboard/people',
        starships: '/dashboard/starships',
      },
    },
    details: {
      root: 'details/*',
      route: '/details/{0}/{1}',
      planet: 'planets/{0}',
      person: 'people/{0}',
      starship: 'starships/{0}',
      path: {
        planet: '/details/planets/{0}',
        person: '/details/people/{0}',
        starship: '/details/starships/{0}',
      },
    },
    favorites: {
      root: 'favorites/*',
      route: '/favorites/{0}',
      planets: 'planets',
      people: 'people',
      starships: 'starships',
      path: {
        planets: '/favorites/planets',
        people: '/favorites/people',
        starships: '/favorites/starships',
      },
    },
  },
};
