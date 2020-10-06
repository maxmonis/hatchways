import React, { useRef, useEffect } from 'react';

const Search = ({ students, filtered, setFiltered }) => {
  const text = useRef('');
  useEffect(() => {
    if (!filtered.length) {
      text.current.value = '';
    }
  });
  const handleChange = e => {
    text.current.value = text.current.value.replace(/[^a-z]/gi, '');
    if (text.current.value !== '') {
      setFiltered(
        students.filter(student => {
          const fullName = student.firstName + student.lastName;
          const regexp = new RegExp(e.target.value, 'gi');
          return fullName.match(regexp);
        })
      );
    } else {
      setFiltered([]);
    }
  };
  return (
    <form onSubmit={e => e.preventDefault} className='search'>
      <input
        id='name-input'
        ref={text}
        type='text'
        placeholder='Search by name'
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
