import React from 'react';
import AgeSelect from './AgeSelect.jsx';

function AgeSelectArea({ numberOfChildren }) {
  const content = [];

  for (let i = 0; i < numberOfChildren; i += 1) {
    content.push(<AgeSelect key={i} />);
  }

  return (
    <div className={numberOfChildren === 0 ? 'children-age-wrap unactive' : 'children-age-wrap'}>
      <p className="children-age-text">What is the age of the child you’re travelling with?</p>
      {content}
    </div>
  );
}

export default AgeSelectArea;
