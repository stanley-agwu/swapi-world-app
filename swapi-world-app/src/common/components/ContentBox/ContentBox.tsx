import { ClassAttributes, forwardRef, HTMLAttributes, MutableRefObject } from 'react';
import classNames from 'classnames';

import { Grid } from '@mui/material';

import styles from './ContentBox.module.scss';

export enum ContentBoxSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  fullWidth = 'fullWidth',
}

type HTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;

interface ContentBoxProps extends HTMLProps<HTMLDivElement> {
  size?: ContentBoxSize;
}

export const ContentBox = forwardRef(
  ({ children, size = ContentBoxSize.fullWidth, className, ...rest }: ContentBoxProps, ref) => (
    <div
      {...rest}
      ref={ref as MutableRefObject<any>}
      className={classNames(styles[size], className)}
    >
      {children}
    </div>
  )
);

ContentBox.displayName = 'ContentBox';

export const ContentContainer = forwardRef(
  ({ children, className, ...rest }: HTMLProps<HTMLDivElement>, ref) => (
    <div
      {...rest}
      ref={ref as MutableRefObject<any>}
      className={classNames(styles.container, className)}
    >
      {children}
    </div>
  )
);

ContentContainer.displayName = 'ContentContainer';

export const GridContent = forwardRef(
  ({ children, className, ...rest }: HTMLProps<HTMLDivElement>, ref) => (
    <Grid
      item
      xs={12}
      {...rest}
      sx={{ padding: { xs: '8px', md: '8px 16px 8px 40px' } }}
      ref={ref as MutableRefObject<any>}
      className={classNames(styles['grid-content'], className)}
    >
      {children}
    </Grid>
  )
);

GridContent.displayName = 'GridContent';

export interface StyledTypographyProps {
  className?: string;
}

export const Typography = styled((props: StyledTypographyProps) => <MuiTypography {...props} />)(
  () => ({
    fontFamily: ['Inter', 'sans-serif'].join(','),
    '&:hover': {
      color: '#b3b3b3',
      opacity: 1,
    },
  })
);

export interface StyledTabsProps {
  children: ReactNode[];
  value: number;
  ref: MutableRefObject<any | null>;
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <MuiTabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#e58fb1',
  },
});

export interface TabsProps extends ComponentProps<'div'> {
  value: number;
  children: ReactNode[];
  handleChange: (event: SyntheticEvent, newValue: number) => void;
  className?: string;
}

export const Tabs = forwardRef<MutableRefObject<any | null>, TabsProps>(
  ({ value, handleChange, children, ...props }: TabsProps, ref) => {
    return (
      <StyledTabs
        sx={{
          width: '100%',
          bgcolor: '#ffffff',
        }}
        {...props}
        ref={ref as MutableRefObject<any | null>}
        value={value}
        onChange={handleChange}
        aria-label="Tabs"
      >
        {children}
      </StyledTabs>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
