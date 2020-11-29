import React from 'react';
import '../index.css';

export function Plug(props) {
  return(
    <div className='product' style={{ transform: `translateX(${-props.shift * 100}%)`, backgroundColor: props.caughtId ? '#f4f9fd' : 'white'}}>
      <div className='cell'>{props.plug}</div>
    </div>
  )
}
