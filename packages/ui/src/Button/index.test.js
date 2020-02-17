import React from 'react';
import { render, cleanup } from 'test-utils';
import { Button } from './index';

afterEach(cleanup);

describe('UI|Button', () => {
  it('should be render only one button with text Agorstar', () => {
    const { getByText, container, debug } = render(<Button>Agrostar</Button>);
    expect(container.querySelectorAll('button')).toHaveLength(1);
    expect(getByText('Agrostar').textContent).toBe('Agrostar');
    expect(container.querySelectorAll('svg')).toHaveLength(0);    
  });

  it('should render button with loading', () => {
    const { queryAllByTestId } = render(<Button loading>Agrostar</Button>);
    expect(queryAllByTestId('loading')).toHaveLength(1);
  });
});
