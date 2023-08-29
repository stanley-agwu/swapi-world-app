import React, { Ref } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import styles from '../Header.module.scss';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  path: string;
}

const ListItem = React.forwardRef(
  (
    { className, children, title, path }: ListItemProps,
    forwardedRef: Ref<HTMLAnchorElement> | undefined
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link to={path} className={classNames(styles.ListItemLink, className)} ref={forwardedRef}>
          <div className={styles.ListItemHeading}>{title}</div>
          <p className={styles.ListItemText}>{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = 'ListItem';

export default ListItem;
