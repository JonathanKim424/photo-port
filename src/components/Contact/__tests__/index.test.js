import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('renders snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Contact component visible', () => {
    it('renders contact me', () => {
        render(<Contact />);
        expect(screen.getByTestId('h1tag')).toHaveTextContent('Contact Me');
    });

    it('renders submit button', () => {
        render(<Contact />);
        expect(screen.getByTestId('button')).toHaveTextContent('Submit');
    });
})