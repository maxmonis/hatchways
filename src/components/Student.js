import React, { useState } from 'react';

const Student = ({
  company,
  email,
  firstName,
  grades,
  lastName,
  pic,
  skill,
}) => {
  const [showExtra, setShowExtra] = useState(false);
  const toggle = () => setShowExtra(!showExtra);
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
              <div className='extra'>
                <ul>
                  {grades.map((grade, i) => (
                    <li key={i}>
                      {`Test${i + 1}: \xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
      <button className='expand-btn' onClick={toggle}>
        {showExtra ? '-' : '+'}
      </button>
    </div>
  );
};

export default Student;
