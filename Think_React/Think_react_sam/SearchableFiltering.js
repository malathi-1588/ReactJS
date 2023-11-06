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
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredEmployees = employees.filter((employee) => {
      const searchMatches = employee.department.toLowerCase().includes(searchQuery.toLowerCase());
      return searchMatches;
    });

    return (
      <div>
        <h1>Employee List</h1>
        <input 
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <ul>
          {filteredEmployees.map((employee,index) =>(
            <li key={index}>{employee.name} - {employee.department}</li>
          ))}
        </ul>
      </div>
    );
}

export default App;

/*
Drop Down-List or an Active Clickable Option:
  Pros:
    Predefined Options makes it easier to choose
    Quicker than Typing
  Cons:
    Occupies too much screen especially active clickable if there are too many Options
    Cannot filter using other conditions
Searchable Filtering:
  Pros:
    Can search based on any keyword or part of the name
    More user friendly if there are too many options
  Cons:
    Slower and requires more effort compared to dropdown

Preference:
Searchable Filtering is the general preference if the list size is medium or too large, since it provides an option to search using part of keyword.
If the list is small or limited, then dropdown or active clicking is preferred.
*/