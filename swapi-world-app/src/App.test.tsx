import store from 'tests/store';
import { render, screen } from 'tests/test-utils';

import App from './App';

describe('App', () => {
  it('render Planets as default view', async () => {
    render(<App />, { store: store() });
    expect(await screen.findByText('Planets')).toBeInTheDocument();
    expect(await screen.findByText('Climate')).toBeInTheDocument();
  });
});
