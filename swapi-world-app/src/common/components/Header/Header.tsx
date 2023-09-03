import classNames from 'classnames';

import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { coreConfig } from 'common/core/config';

import ListItem from './components/ListItem';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header}>
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <NavigationMenu.List className={styles.NavigationMenuList}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
            Dashboard <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>
            <ul className={classNames(styles.List, styles.one)}>
              <ListItem path={coreConfig.routes.dashboard.path.planets} title="Planets">
                A large mass, planet or planetoid in the Star Wars Universe.
              </ListItem>
              <ListItem path={coreConfig.routes.dashboard.path.people} title="People">
                An individual person or character within the Star Wars universe.
              </ListItem>
              <ListItem path={coreConfig.routes.dashboard.path.starships} title="Starships">
                A single transport craft that has hyperdrive capability.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <span className={styles.Seperator}>|</span>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
            Favorites <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>
            <ul className={classNames(styles.List, styles.one)}>
              <ListItem path={coreConfig.routes.favorites.path.planets} title="Planets">
                Favorite planet or planetoid in the Star Wars Universe.
              </ListItem>
              <ListItem path={coreConfig.routes.favorites.path.people} title="People">
                Favorite person or character within the Star Wars universe.
              </ListItem>
              <ListItem path={coreConfig.routes.favorites.path.starships} title="Starships">
                Favorite transport craft that has hyperdrive capability.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  </div>
);

export default Header;
