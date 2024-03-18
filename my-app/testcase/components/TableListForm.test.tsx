// TableListForm.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TableListForm from '../../src/components/TableListForm';


describe('TableListForm component', () => {
  test('renders without crashing', () => {
    render(<TableListForm selectedEmployee={null} onUpdateEmployee={() => {}} onCancel={() => {}} />);
  });
  test('updates name input value correctly', () => {
    const onUpdateEmployee = jest.fn();
    const { getByPlaceholderText } = render(
      <TableListForm 
        selectedEmployee={{ 
          id: 1, 
          name: 'John', 
          email: 'john@example.com', 
          isActive: true 
        }} 
        onUpdateEmployee={onUpdateEmployee} 
        onCancel={() => {}} 
      />
    );
    const nameInput = getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'Doe' } });
    expect(nameInput.value).toBe('Doe');
  });
});