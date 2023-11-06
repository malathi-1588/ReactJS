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

function EmployeeTable({ employees, filterText }) {
  /* Filter employees based on the text entered in the search bar */
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filterText.toLowerCase()) ||
    employee.department.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          {/* Headers */}
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {/* Content */}
        {filteredEmployees.map((employee, index) => (
          <EmployeeRow key={index} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}

/* Defining Search Bar */
function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      {/* Label for the search bar */}
      <label htmlFor="searchBar">Search by Name or Department:</label>

      {/* Input field for entering search text */}
      <input
        type="text"
        id="searchBar"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
}

function Features() {
  /* State to manage the text entered in the search bar*/
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <h1>Employee List</h1>

      {/* Render the SearchBar component */}
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />

      {/* Render the EmployeeTable component with the filtered text */}
      <EmployeeTable employees={employees} filterText={filterText} />
    </div>
  );
}

export default Features;
