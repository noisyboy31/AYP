import React, { useState } from 'react';
import { Employee } from '../typing/index';

interface TableListFormProps {
  selectedEmployee: Employee | null;
  onUpdateEmployee: (employee: Employee) => void;
  onCancel: () => void;
}

export default function TableListForm({ selectedEmployee, onUpdateEmployee, onCancel }: TableListFormProps) {
  const [updatedName, setUpdatedName] = useState<string>(selectedEmployee?.name || '');
  const [updatedEmail, setUpdatedEmail] = useState<string>(selectedEmployee?.email || '');
  const [updatedIsActive, setUpdatedIsActive] = useState<boolean>(selectedEmployee?.isActive || false);

  const handleSave = () => {
    if (selectedEmployee) {
      onUpdateEmployee({
        ...selectedEmployee,
        name: updatedName,
        email: updatedEmail,
        isActive: updatedIsActive
      });
    }
  };

  return (
    <div className="container mt-5">
       <div className="row justify-content-center">
        <form className="form-inline">
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-check mb-2 mr-sm-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="isActiveCheckbox"
              checked={updatedIsActive}
              onChange={(e) => setUpdatedIsActive(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="isActiveCheckbox">
              Active
            </label>
          </div>
          <button type="button" className="btn btn-primary mb-2 ml-5" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="btn btn-secondary mb-2 ml-3" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
