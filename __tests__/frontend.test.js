import React from 'react';
import { render } from '@testing-library/react';
import QuizContainer from '../client/containers/QuizContainer'; // Import your component

describe('MyComponent Tests', () => {
  it('renders without crashing', () => {
    render(<QuizContainer />);
  });
});
