import React, { useState } from 'react';
import Extra from './Extra';

const Student = ({
  addTag,
  company,
  email,
  firstName,
  grades,
  id,
  lastName,
  pic,
  skill,
  tags,
}) => {
  const [showExtra, setShowExtra] = useState(false);
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
              // Extra content hidden unless toggled by user
              <Extra addTag={addTag} grades={grades} id={id} tags={tags} />
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
