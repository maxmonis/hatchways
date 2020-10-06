import React, { useState, useEffect } from 'react';

const Search = ({ students, filtered, setFiltered }) => {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const handleChange = e => {
    const { id, value } = e.target;
    id === 'name-input' ? setName(value) : setTag(value);
  };
  useEffect(() => {
    // Reset arguments if no results
    if (!filtered.length) {
      setName('');
      setTag('');
    }
  }, [filtered]);
  useEffect(() => {
    if (!name && !tag) {
      // Reset filtered if no arguments provided
      setFiltered([]);
    } else {
      setFiltered(
        students.filter(({ firstName, lastName, tags }) => {
          const fullName = firstName + lastName;
          const nameRegExp = new RegExp(name, 'gi');
          const tagRegExp = new RegExp(tag, 'gi');
          return name && tag
            ? // Tags and name must include a match if both arguments provided
              tags &&
                tags.some(tag => tag.match(tagRegExp)) &&
                fullName.match(nameRegExp)
            : name
            ? // Only name must match if no tag argument
              fullName.match(nameRegExp)
            : // Tag must be in tags array if no name argument
              tags && tags.some(tag => tag.match(tagRegExp));
        })
      );
    }
    // eslint-disable-next-line
  }, [name, tag]);
  return (
    <div className='search'>
      <input
        id='name-input'
        value={name}
        type='text'
        placeholder='Search by name'
        onChange={handleChange}
      />
      <input
        id='tag-input'
        value={tag}
        type='text'
        placeholder='Search by tags'
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
