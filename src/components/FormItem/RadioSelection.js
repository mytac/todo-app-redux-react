import React from 'react';

import './style.less';

export default function RadioSelection({ selectItem }) {
  /* eslint-disable max-len */
  return (
    <div className="radio-select">
      <span><input type="radio" name="category" value="Personal" onChange={selectItem} />Personal</span>
      <span><input type="radio" name="category" value="Business" onChange={selectItem} />Business</span>
    </div>
  );
}
