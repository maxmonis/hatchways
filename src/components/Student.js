import React, { useState, useEffect } from 'react';

const Student = ({
  company,
  email,
  firstName,
  grades,
  lastName,
  pic,
  skill,
  id,
  tags,
  addTag,
}) => {
  const [showExtra, setShowExtra] = useState(false);
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    value && addTag(id, value);
    setValue('');
  };
  const fullName = `${firstName} ${lastName}`;
  const nums = grades.map(grade => parseInt(grade));
  const average = nums.reduce((a, b) => a + b) / grades.length;
  return (
    <div className='student-container'>
      <div className='student'>
        <img src={pic} alt={fullName} />
        <div>
          <h1>{fullName}</h1>
          <aside>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average}%</p>
            {showExtra && (
              <div>
                <ul className='grades'>
                  {grades.map((grade, i) => (
                    <li key={i}>
                      {`Test${i + 1}: \xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                    </li>
                  ))}
                </ul>
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
              </div>
            )}
          </aside>
        </div>
      </div>
      <button className='expand-btn' onClick={() => setShowExtra(!showExtra)}>
        {showExtra ? '-' : '+'}
      </button>
    </div>
  );
};

export default Student;
