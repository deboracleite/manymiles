import { render, screen } from '@testing-library/react';
import Home from '../../../src/pages/Home/Home';
import '@testing-library/jest-dom';  

test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Discover Your Journey')).toBeInTheDocument();
});
