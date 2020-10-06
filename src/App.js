import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './components/404';
import Search from './components/Search';
import Student from './components/Student';
import './App.css';

function App() {
  const [students, setStudents] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data } = await axios.get(
          'https://api.hatchways.io/assessment/students'
        );
        // Immediately add an empty array with a key of tags at the root level...
        setStudents(data.students.map(student => ({ ...student, tags: [] })));
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    getStudents();
  }, []);
  const addTag = (id, tag) => {
    setStudents(
      students.map(student =>
        student.id === id
          ? // ...so that we can spread the empty array upon the first tag creation event
            { ...student, tags: [...student.tags, tag] }
          : student
      )
    );
  };
  return error ? (
    <Error error={error} />
  ) : students ? (
    <div className='container'>
      <Search
        students={students}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      {filtered.length
        ? // Show only filtered students if search has returned results
          filtered.map(student => (
            <Student key={student.id} {...student} addTag={addTag} />
          ))
        : // Otherwise show all students
          students.map(student => (
            <Student key={student.id} {...student} addTag={addTag} />
          ))}
    </div>
  ) : (
    'Loading...'
  );
}

export default App;
