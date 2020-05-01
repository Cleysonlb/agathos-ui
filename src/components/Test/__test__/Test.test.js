import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Test from '..';

describe('<Test />', () => {
  it('should render Hello World text', () => {
    const titleText = 'Hello World';
    const { getByText } = render(
      <Test />
    );
    const titleElement = getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});