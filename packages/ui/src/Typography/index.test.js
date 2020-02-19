import React from 'react';
import { render, cleanup } from 'test-utils';
import { Typography } from './index';

afterEach(cleanup);

describe('Typography Component', () => {
  it('should be render only one span', () => {
    const { container, debug } = render(<Typography>Agrostar</Typography>);
    expect(container.querySelector('p').textContent).toBe('Agrostar');
  });

  it('should be render text', () => {
    const { getByText } = render(<Typography>Agrostar</Typography>);
    expect(getByText('Agrostar').textContent).toBe('Agrostar');
  });
});
