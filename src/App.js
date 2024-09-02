


import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  
  const data = [
    { id: 1, name: 'Dhanan', mail: 'devajith930@gmail.com', age: 25 },
    { id: 2, name: 'Chezhiyan', mail: 'chezhiyan@gmail.com', age: 24 },
    { id: 3, name: 'Monish', mail: 'monishraj@gmail.com', age: 22 },
    { id: 4, name: 'Devaraj', mail: 'devaraj@gmail.com', age: 52 },
    { id: 5, name: 'Amutha', mail: 'amutha@gmail.com', age: 45 },
    { id: 6, name: 'Saranya', mail: 'saranya@gmail.com', age: 23 },
    { id: 7, name: 'Satheesh', mail: 'satheesh@mail.com', age: 29 },
    { id: 8, name: 'Vignesh', mail: 'vignesh@gmail.com', age: 27 },
    { id: 9, name: 'Praveen', mail: 'praveen@gmail.com', age: 31 },
    { id: 10, name: 'Kavya', mail: 'kavya@gmail.com', age: 28 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter(
      (item) => 
        (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.mail && item.mail.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.age && item.age.toString().includes(searchTerm.toLowerCase()))
    );

    // Sort the filtered results in ascending order by name
    const sortedFilteredDatas = filtered.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredData(sortedFilteredDatas);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search and Sort Data</h1>

      <input
        type="text"
        placeholder="Search by name, mail, or age..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: '8px', marginBottom: '20px', width: '100%' }}
      />

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Mail:</strong> {item.mail} <br />
            <strong>Age:</strong> {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
