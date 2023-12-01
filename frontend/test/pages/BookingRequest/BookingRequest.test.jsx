import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import BookingRequest from '../../../src/pages/BookingRequest/BookingRequest';
import { act } from 'react-dom/test-utils';
import api from '../../../src/services/api';
import { useToast } from '../../../src/hooks/toast';

// Mocking the useToast hook
jest.mock('../../../src/hooks/toast');

// Mocking the API module
jest.mock('../../../src/services/api');

const mockedUseToast = useToast;

describe('BookingRequest Page', () => {
  test('renders BookingRequest component with empty list', async () => {
    // Mocking the API response for an empty booking list
    api.get.mockResolvedValueOnce({ data: [] });

    render(<BookingRequest />);

    // Verify that the component renders the empty list image
    const emptyImage = screen.getByAltText('Empty List');
    expect(emptyImage).toBeInTheDocument();

    // Make sure that the title is not rendered
    expect(screen.queryByText('Review Booking')).toBeNull();
  });

  test('renders BookingRequest component with booking list', async () => {
    // Mocking the API response for a non-empty booking list
    api.get.mockResolvedValueOnce({
      data: [
        { id: 1, title: 'Car 1', from: '2023-12-01', until: '2023-12-05', price: 100 },
        { id: 2, title: 'Car 2', from: '2023-12-10', until: '2023-12-15', price: 150 },
      ],
    });

    render(<BookingRequest />);

    // Verify that the title is rendered
    const title = screen.getByText('Review Booking');
    expect(title).toBeInTheDocument();

    // Verify that each booking card is rendered
    await waitFor(() => {
      expect(screen.getByText('Car 1')).toBeInTheDocument();
      expect(screen.getByText('Car 2')).toBeInTheDocument();
    });
  });

  test('handles decision for booking approval', async () => {
    // Mocking the API response for a non-empty booking list
    api.get.mockResolvedValueOnce({
      data: [{ id: 1, title: 'Car 1', from: '2023-12-01', until: '2023-12-05', price: 100 }],
    });

    // Mocking the API response for the decision
    api.put.mockResolvedValueOnce();

    // Mocking the useToast hook
    mockedUseToast.mockReturnValue({
      addToast: jest.fn(),
    });

    render(<BookingRequest />);

    // Find and click the "Approve" button
    const approveButton = screen.getByText('Approve');
    fireEvent.click(approveButton);

    // Verify that the API is called with the correct parameters
    await waitFor(() => {
      expect(api.put).toHaveBeenCalledWith('/requestBooking/1', { decision: 'approve' });
    });
  });

  test('handles decision for booking decline', async () => {
    // Mocking the API response for a non-empty booking list
    api.get.mockResolvedValueOnce({
      data: [{ id: 1, title: 'Car 1', from: '2023-12-01', until: '2023-12-05', price: 100 }],
    });

    // Mocking the API response for the decision
    api.put.mockResolvedValueOnce();

    // Mocking the useToast hook
    mockedUseToast.mockReturnValue({
      addToast: jest.fn(),
    });

    render(<BookingRequest />);

    // Find and click the "Decline" button
    const declineButton = screen.getByText('Decline');
    fireEvent.click(declineButton);

    // Verify that the API is called with the correct parameters
    await waitFor(() => {
      expect(api.put).toHaveBeenCalledWith('/requestBooking/1', { decision: 'decline' });
    });
  });
});
