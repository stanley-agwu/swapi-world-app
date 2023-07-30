import React, { AnchorHTMLAttributes, LegacyRef } from 'react';
import classNames from 'classnames';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import styles from '../Header.module.scss';

interface ListItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const ListItem = React.forwardRef(
  (
    { className, children, title, ...props }: ListItemProps,
    forwardedRef: LegacyRef<HTMLAnchorElement> | undefined
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <a className={classNames(styles.ListItemLink, className)} {...props} ref={forwardedRef}>
          <div className={styles.ListItemHeading}>{title}</div>
          <p className={styles.ListItemText}>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = 'ListItem';

export default ListItem;
