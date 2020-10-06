import React, { useState, useEffect } from 'react';

const Search = ({ students, filtered, setFiltered }) => {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const handleChange = e => {
    const { id, value } = e.target;
    id === 'name-input' ? setName(value) : setTag(value);
  };
  useEffect(() => {
    if (name || tag) {
      setFiltered(
        students.filter(({ firstName, lastName, tags }) => {
          const fullName = firstName + lastName;
          const nameRegExp = new RegExp(name, 'gi');
          const tagRegExp = new RegExp(tag, 'gi');
          return name && tag
            ? tags &&
                tags.some(tag => tag.match(tagRegExp)) &&
                fullName.match(nameRegExp)
            : name
            ? fullName.match(nameRegExp)
            : tags && tags.some(tag => tag.match(tagRegExp));
        })
      );
    } else {
      setFiltered([]);
    }
  }, [name, tag]);
  useEffect(() => {
    if (!filtered.length) {
      setName('');
      setTag('');
    }
  }, [filtered]);
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
