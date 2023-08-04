interface CoreConfig {
  endpoints: {
    root: string;
    planets: string;
    people: string;
    spaceShip: string;
  };
  routes: {
    planets: string;
    people: string;
    spaceShip: string;
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
    root: '',
    planets: '',
    people: '',
    spaceShip: '',
  },
  routes: {
    planets: '',
    people: '',
    spaceShip: '',
  },
};
