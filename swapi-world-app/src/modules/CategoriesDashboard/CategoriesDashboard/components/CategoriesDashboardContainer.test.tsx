import { createMemoryHistory } from 'history';

import { CategoriesEnum } from 'common/utils/categoriesEnum';
import store, { defaultAppState } from 'tests/store';
import { render, screen, userEvent } from 'tests/test-utils';

import CategoriesDashboardContainer from './CategoriesDashboardContainer';

describe('Categories dashboard', () => {
  it('renders Planets dashboard', async () => {
    render(<CategoriesDashboardContainer />, {
      store: store(),
      routerProps: { initialEntries: ['/planets'] },
    });
    const planetsTab = await screen.findByRole('tab', { name: 'Planets' });

    expect(planetsTab.classList).toContain('Mui-selected');
    expect(await screen.findByRole('columnheader', { name: 'Terrain' })).toBeInTheDocument();
  }, 2000);
  it('renders People dashboard', async () => {
    const history = createMemoryHistory({ initialEntries: ['/people'] });
    const preloadedState = {
      ...defaultAppState,
      swapi: {
        ...defaultAppState.swapi,
        category: {
          title: 'People' as CategoriesEnum,
        },
      },
    };
    render(<CategoriesDashboardContainer />, {
      preloadedState,
      routerProps: { initialEntries: ['/people'] },
    });
    const peopleTab = await screen.findByRole('tab', { name: 'People' });

    expect(peopleTab.classList).toContain('Mui-selected');
    expect(await screen.findByRole('columnheader', { name: 'Skin color' })).toBeInTheDocument();
    expect(history.location.pathname).toBe('/people');
  });
  it('renders Starship dashboard', async () => {
    const history = createMemoryHistory({ initialEntries: ['/starships'] });
    const preloadedState = {
      ...defaultAppState,
      swapi: {
        ...defaultAppState.swapi,
        category: {
          title: 'Starships' as CategoriesEnum,
        },
      },
    };
    render(<CategoriesDashboardContainer />, {
      preloadedState,
      routerProps: { initialEntries: ['/starships'] },
    });
    const starshipsTab = await screen.findByRole('tab', { name: 'Starships' });

    expect(starshipsTab.classList).toContain('Mui-selected');
    expect(await screen.findByRole('columnheader', { name: 'Manufacturer' })).toBeInTheDocument();
    expect(history.location.pathname).toBe('/starships');
  });
  it('adds planet to favorites', async () => {
    render(<CategoriesDashboardContainer />, {
      store: store(),
      routerProps: { initialEntries: ['/planets'] },
    });
    const planetsFavorite = await screen.findAllByLabelText('Planets favorite');

    userEvent.click(planetsFavorite[0]);

    expect(await screen.findByText('Added to favorites list.')).toBeInTheDocument();
  });
  it('adds person to favorites', async () => {
    render(<CategoriesDashboardContainer />, {
      store: store(),
      routerProps: { initialEntries: ['/people'] },
    });
    const peopleFavorite = await screen.findAllByLabelText('People favorite');

    userEvent.click(peopleFavorite[0]);

    expect(await screen.findByText('Added to favorites list.')).toBeInTheDocument();
  });
  it.skip('adds starship to favorites', async () => {
    render(<CategoriesDashboardContainer />, {
      store: store(),
      routerProps: { initialEntries: ['/starships'] },
    });
    const starshipsFavorite = await screen.findAllByLabelText('Starships favorite');

    userEvent.click(starshipsFavorite[0]);

    expect(await screen.findByText('Added to favorites list.')).toBeInTheDocument();
  });
});
