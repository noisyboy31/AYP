import React, {useState} from 'react';
import { Employee } from '../typing/index';

interface TableListProps {
  employees: Employee[];
  onUpdate: (employee: Employee) => void;
}

const TableList = ({ employees, onUpdate }: TableListProps) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Active</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(employee => (
            <tr className="text-center" key={employee?.id}>
              <td>{employee?.id}</td>
              <td>{employee?.name}</td>
              <td>{employee?.email}</td>
              <td>{employee?.isActive ? 'Yes' : 'No'}</td>
              <td>
                {employee?.isActive && (
                  <button type="button" className="btn btn-secondary" onClick={() => onUpdate(employee)}>Update</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="d-flex justify-content-end">
          {employees?.length > itemsPerPage &&
            Array.from({ length: Math.ceil(employees?.length / itemsPerPage) })?.map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableList;

