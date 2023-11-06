/* Importing required hook */
import React, { useState } from 'react';

/* Defining data */
const employees = [
  { name: "Tony Stark", department: "IT" },
  { name: "Peter Parker", department: "Pizza Delivery" },
  { name: "Bruce Wayne", department: "IT" },
  { name: "Clark Kent", department: "Editing" },
  { name: "Steve Rogers", department: "Army" },
  { name: "Bucky Barnes", department: "Army" },
  { name: "Bruce Banner", department: "Scientist" },
  { name: "Matt Murdock", department: "Attorney" },
  { name: "Reed Richards", department: "Scientist" },
  { name: "Jake Lockley", department: "Pizza Delivery" },
];

/* Defining employee row */
function EmployeeRow({ employee }) {
  return (
    <tr>
      <td>{employee.name}</td> {/* gets employee name from data employee */}
      <td>{employee.department}</td> {/* gets employee department from data employee */}
    </tr>
  );
}

/* Defining employee table */
function EmployeeTable({ employees, filterDepartment }) {

  /* Checking which department is selected */
  const filteredEmployees = filterDepartment === 'All'
    ? employees
    : employees.filter(employee => employee.department === filterDepartment);

  return (
    <table>
      <thead>
        <tr>
        {/* headers */}
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {/* content in the employee table */}
        {filteredEmployees.map((employee, index) => (
          <EmployeeRow key={index} employee={employee} />
        ))}      </tbody>
    </table>
  );
}

/* Defining filter for department0 */
function DepartmentFilter({ selectedDepartment, departments, onDepartmentChange }) {
  return (
    <div>
      {/* Label for the department filter dropdown */}
      <label htmlFor="departmentFilter">Filter by Department:</label>

      {/* Dropdown select element for choosing a department */}
      <select
        id="departmentFilter"
        value={selectedDepartment}
        onChange={(e) => onDepartmentChange(e.target.value)}>

        {/* Option to show all departments */}
        <option value="All">All Departments</option>

        {/* Map through departments and create options for each */}
        {departments.map((department, index) => (
          <option key={index} value={department}>{department}</option>
        ))}
      </select>
    </div>
  );
}

/* App component, the main component that uses the DepartmentFilter */
function Pricing() {

  /* State to manage the selected department */
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  /* Get a list of unique departments from the employees data */
  const uniqueDepartments = [...new Set(employees.map(employee => employee.department))];

  /* Create an array of department options based on the selected department */
  const departments = selectedDepartment === 'All'
    ? uniqueDepartments
    : [selectedDepartment, ...uniqueDepartments.filter(dep => dep !== selectedDepartment)];

  return (
    <div>
      {/* Header */}
      <h1>Employee List</h1>

       {/* Render the DepartmentFilter component */}
      <DepartmentFilter
        selectedDepartment={selectedDepartment}
        departments={departments}
        onDepartmentChange={setSelectedDepartment}
      />
      {/* Render the EmployeeTable component with the filtered department */}
      <EmployeeTable employees={employees} filterDepartment={selectedDepartment} />
    </div>
  );
}

export default Pricing;

