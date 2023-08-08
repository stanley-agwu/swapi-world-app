import React from 'react';
import classNames from 'classnames';

import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import ListItem from './components/ListItem';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <NavigationMenu.Root className={styles.NavigationMenuRoot}>
        <NavigationMenu.List className={styles.NavigationMenuList}>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
              Learn <CaretDownIcon className={styles.CaretDown} aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.NavigationMenuContent}>
              <ul className={classNames(styles.List, styles.one)}>
                <ListItem href="/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <span className={styles.Seperator}>|</span>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
              Overview <CaretDownIcon className={styles.CaretDown} aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.NavigationMenuContent}>
              <ul className={classNames(styles.List, styles.two)}>
                <ListItem title="Introduction" href="/">
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem title="Getting started" href="/">
                  A quick tutorial to get you up and running with Radix Primitives.
                </ListItem>
                <ListItem title="Styling" href="/">
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem title="Animation" href="/">
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem title="Accessibility" href="/">
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem title="Releases" href="/">
                  Radix Primitives releases and their changelogs.
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
};

export default Header;
