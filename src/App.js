import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './components/Student';
import './App.css';
import Search from './components/Search';

function App() {
  const [students, setStudents] = useState(null);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      const { data } = await axios.get(
        'https://api.hatchways.io/assessment/students'
      );
      setStudents(data.students);
    };
    getStudents();
  }, []);
  const updateFiltered = names => setFiltered(names);
  return students ? (
    <div className='container'>
      <Search
        students={students}
        filtered={filtered}
        updateFiltered={updateFiltered}
      />
      {filtered.length
        ? filtered.map(student => <Student key={student.id} {...student} />)
        : students.map(student => <Student key={student.id} {...student} />)}
    </div>
  ) : (
    'Loading...'
  );
}

export default App;
