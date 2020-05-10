import React from 'react';
import Button from './Button'

import './Notice.css'

const Notice = props => {
  return (
    <div>
      <div className='notice-text'>
        <h1>Tu sais pas quoi faire ce soir ?</h1>
      </div>
      <div className="notice-button">
        <div onClick={props.isClicked} >
          <Button text={props.text} />
        </div>
        <span>ou</span>
        <div onClick={props.isClickedFilter} >
          <Button text={props.textFilter} />
        </div>
      </div>
    </div>
  );
};

export default Notice;