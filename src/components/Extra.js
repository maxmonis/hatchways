import React, { useState, useEffect } from 'react';

const Extra = ({ addTag, grades, id, tags }) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (tags.includes(value)) {
      setMessage('Tags must be unique');
    } else {
      value && addTag(id, value);
      setValue('');
      // Clear error message if new tag added successfully
      setMessage('');
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage('');
    }, 2500);
    // Return a clearTimeout in case component is unmounted after 2500 ms
    return () => clearTimeout(timeout);
  }, [message]);
  return (
    <div>
      <ul className='grades'>
        {grades.map((grade, i) => (
          <li key={i}>{`Test${i + 1}: \xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}</li>
        ))}
      </ul>
      {/* Include the ul even without any children so as to retain spacing */}
      <ul className='tags'>
        {tags.length > 0 && tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className='add-tag-input'
          placeholder='Add a tag'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Extra;
