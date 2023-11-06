import React, { useState } from 'react';

const employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" },
    { name: "Diana Prince", department: "Politics"},
    { name: "Clint Barton", department: "Security"},
    { name: "Dr Strange", department: "Medicine"},
    { name: "Natasha Romanoff", department: "Security"},
    { name: "T'Challa", department: "Politics"},
    { name: "Charles Xavier", department: "Professor"}
];

function App() {
    const [selectedDepartment, setSelectedDepartment] = useState('All');

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const filteredEmployees = employees.filter((employee) => {
      const departmentMatches = selectedDepartment === 'All' || employee.department === selectedDepartment;
      return departmentMatches;
    });

    return (
      <div>
        <h1>Employee List</h1>

        <label htmlFor="departmentFilter">Filter:</label>
        <select id="departmentFilter" onChange={handleDepartmentChange} value={selectedDepartment}>
          <option value="All">All</option>
          <option value="IT">IT</option>
          <option value="Pizza Delivery">Pizza Delivery</option>
          <option value="Editing">Editing</option>
          <option value="Security">Security</option>
          <option value="Politics">Politics</option>
          <option value="Medicine">Medicine</option>
          <option value="Professor">Professor</option>
        </select>

        <ul>
          {filteredEmployees.map((employee,index) =>(
            <li key={index}>{employee.name} - {employee.department}</li>
          ))}
        </ul>
      </div>
    );
}

export default App;