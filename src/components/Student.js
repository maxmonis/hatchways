import React from 'react';

const Student = ({
  company,
  email,
  firstName,
  grades,
  lastName,
  pic,
  skill,
}) => {
  const fullName = `${firstName} ${lastName}`;
  const nums = grades.map(grade => parseInt(grade));
  const average = nums.reduce((a, b) => a + b) / grades.length;
  return (
    <div className='student'>
      <img src={pic} alt={fullName} />
      <aside>
        <h1>{fullName}</h1>
        <div>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {average}%</p>
        </div>
      </aside>
    </div>
  );
};

export default Student;
