import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import "@testing-library/jest-dom";
import { IsOpenLabel } from "../ResCard";

describe('ResCard component', () => {

   const restaurantData = {
        info: {
            name: 'Theobroma',
            cloudinaryImageId: 'sample-image-id',
            avgRating: 4.5,
            sla: {
                slaString: '30 mins'
            },
            cuisines: ['Bakery', 'Desserts'],
            areaName: 'Mumbai'
        }
    };

    const restaurantProp = { restaurant: restaurantData };
    const HOCComponent = IsOpenLabel();

    test('renders restaurant card component with correct information', () => {
        render(<ResCard {...restaurantProp} />);
        
        expect(screen.getByText('Theobroma')).toBeInTheDocument();
        expect(screen.getByText('4.5')).toBeInTheDocument();
        expect(screen.getByText('30 mins')).toBeInTheDocument();
        expect(screen.getByText('Bakery, Desserts')).toBeInTheDocument();
        expect(screen.getByText('Mumbai')).toBeInTheDocument();
       expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('sample-image-id'));
    });

        test('renders isOpenLabel', () => {
        render(<HOCComponent {...restaurantProp} />);

                // Check for the "Open" label
        expect(screen.getByText('Open')).toBeInTheDocument();
        
        expect(screen.getByText('Theobroma')).toBeInTheDocument();
        expect(screen.getByText('4.5')).toBeInTheDocument();
        expect(screen.getByText('30 mins')).toBeInTheDocument();
        expect(screen.getByText('Bakery, Desserts')).toBeInTheDocument();
        expect(screen.getByText('Mumbai')).toBeInTheDocument();
       expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('sample-image-id'));
    });
})