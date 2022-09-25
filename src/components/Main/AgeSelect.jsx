import React from 'react';

function AgeSelect() {
  const content = [];

  for (let i = 0; i < 18; i += 1) {
    content.push(
      <option className="ageOption" key={i}>
        {`${i} years old`}
      </option>
    );
  }

  return <select className="select-children-age">{content}</select>;
}

export default AgeSelect;
