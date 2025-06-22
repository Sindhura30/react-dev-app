import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from '../Contact';

describe('Contact us', () => {
    test('Should load Contact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
    
    test('Should load Contact us input fields', () => {
        render(<Contact />);
        const inputFields = screen.getAllByRole('textbox');
        expect(inputFields.length).toBe(2);
    })
    
    test('Should load Contact us submit button', () => {
        render(<Contact />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})

