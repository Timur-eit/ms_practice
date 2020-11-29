import React from 'react';
import '../index.css';

export function DifferenceCheck(props) {
  return(
    <div className='row-names'>
      <div className='check'>
        <label htmlFor='difference'>Только различия</label>
        <input type='checkbox' name='difference'/>
      </div>      
    </div>
  )
}
