import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from 'react';
import ResContainer from "../ResContainer";
import { mockData } from "../../mockData/mockData";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the hook that uses fetch, if applicable
jest.mock('../../hooks/useRestaurantContainer', () => ({
    __esModule: true,
    default: () => ({
        restaurants: mockData,
    }),
}));

// Mock the global fetch method
beforeAll(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ restaurants: mockData }),
        })
    );
});

test('Loads ResContainer Component', async () => {
        render(
        <BrowserRouter>
                <ResContainer />
        </BrowserRouter>
    )

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(20);
    const searchBtn = screen.getByRole('button', { name: 'Search' });
    const searchInput = screen.getByTestId('search');

    // Simulate searching for "burger"
    fireEvent.change(searchInput, { target: { value: 'pizza' } });
    fireEvent.click(searchBtn);

    // Wait for the component to update with filtered results
    await waitFor(() => {
        const cards = screen.getAllByTestId('card');
        expect(cards.length).toBe(1);
        expect(screen.getByText('Burger Joint')).toBeInTheDocument();
    });
   
})
