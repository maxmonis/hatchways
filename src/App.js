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
      setStudents(data.students.map(student => ({ ...student, tags: [] })));
    };
    getStudents();
  }, []);
  const addTag = (id, tag) => {
    setStudents(
      students.map(student =>
        student.id === id
          ? { ...student, tags: [...student.tags, tag] }
          : student
      )
    );
  };
  return students ? (
    <div className='container'>
      <Search
        students={students}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      {filtered.length
        ? filtered.map(student => (
            <Student key={student.id} {...student} addTag={addTag} />
          ))
        : students.map(student => (
            <Student key={student.id} {...student} addTag={addTag} />
          ))}
    </div>
  ) : (
    'Loading...'
  );
}

export default App;
