import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TableList from '../../src/components/TableList';


const mockEmployees = [
  {
    "id": 1,
    "name": "John Smith",
    "email": "john@ayp-group.com",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@ayp-group.com",
    "isActive": false
  }
];

describe('TableList component', () => {
  it('renders employee data correctly', () => {
    const { getByText } = render(<TableList employees={mockEmployees} />);
    expect(getByText('John Smith')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
  });

  it('updates employee when Update button is clicked', () => {
    const onUpdateMock = jest.fn();
    const { getByText } = render(<TableList employees={mockEmployees} onUpdate={onUpdateMock} />);

    fireEvent.click(getByText('Update'));

    expect(onUpdateMock).toHaveBeenCalledTimes(1);
    expect(onUpdateMock).toHaveBeenCalledWith(mockEmployees[0]); // Assuming Update button is for the first employee
  });

  it('correctly paginates employee data', () => {
    const { getByText, queryByText } = render(<TableList employees={mockEmployees} />);
    expect(getByText('John Smith')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();

    fireEvent.click(getByText('2')); // Clicking on second page
    expect(getByText('John Smith', { exact: false })).toBeTruthy(); // Assuming John Smith is in the second page
    expect(getByText('Jane Smith', { exact: false })).toBeTruthy(); // Assuming Jane Smith is in the second page
  });
});
