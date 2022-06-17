import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import Home from '../../pages';
import { stripe } from '../../services/stripe';
import { getStaticProps } from '../../pages/index';

jest.mock('next/router');
jest.mock('next-auth/react');
jest.mock('../../services/stripe');

describe('Home Page', () => {
	it('renders correctly', () => {
		const useSessionMocked = jest.mocked(useSession);

		useSessionMocked.mockReturnValueOnce({
			data: null,
			status: 'loading',
		});

		render(<Home product={{ amount: '$10.00', priceId: 'fake-id' }} />);

		expect(screen.getByText('for $10.00 month')).toBeInTheDocument();
	});

	it('loads initial data', async () => {
		const stripePricesRetrieveMocked = jest.mocked(stripe.prices.retrieve);

		stripePricesRetrieveMocked.mockResolvedValueOnce({
			id: 'fake-id',
			unit_amount: 1000,
		} as any);

		const response = await getStaticProps({});

		expect(response).toEqual(
			expect.objectContaining({
				props: {
					product: {
						amount: '$10.00',
						priceId: 'fake-id',
					},
				},
				revalidate: 86400,
			})
		);
	});
});