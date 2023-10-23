import { ComponentProps, forwardRef, MutableRefObject, ReactNode, SyntheticEvent } from 'react';

import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';

export interface StyledTabProps {
  label: string;
  className?: string;
  disabled?: boolean;
}

export const Tab = styled((props: StyledTabProps) => <MuiTab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'uppercase',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '16px',
    padding: '12px 0',
    marginRight: theme.spacing(4),
    color: '#858585',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    '&:hover': {
      color: '#b3b3b3',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#E58FB1',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#cccccc',
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
