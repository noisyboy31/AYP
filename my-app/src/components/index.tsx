import React, { useState } from 'react';
import employeesData from './data.json';
import TableList from './TableList';
import TableListForm from './TableListForm';
import { Employee } from '../typing/index';


export default function AypPage() {
  const [employees, setEmployees] = useState<Employee[]>(employeesData?.employees);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const handleUpdate = (employee: Employee) => setSelectedEmployee(employee);
  const handleCancel = () => setSelectedEmployee(null);

  const handleSave = (updatedEmployee: Employee) => {
    const updatedEmployees = employees?.map(emp =>
      emp?.id === updatedEmployee?.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  return (
    <div className="container" data-testid="ayp-page">
      <TableList employees={employees} onUpdate={handleUpdate} />
      {selectedEmployee && (
        <TableListForm
          selectedEmployee={selectedEmployee}
          onUpdateEmployee={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};
