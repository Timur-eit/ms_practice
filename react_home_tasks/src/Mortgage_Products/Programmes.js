import React from 'react';
import '../index.css';

export function ProgrammeRowName(props) {
  return(
    <div className='row-names'>
      <div>Программы: {props.programsQuantity}</div>
      <div>
        <button name='back' disabled={props.leftButtonDisabled} onClick={props.onLeftClick}>&lt;</button>
        <button name='forward' disabled={props.rightButtonDisabled} onClick={props.onRightClick}>&gt;</button>
      </div>      
    </div>
  )
}

export function ProgrammeName(props) {  
  
  function handleMouseEnterColumn() {
    props.onToggleColor(props.id);
  }

  function handleMouseLeaveColumn() {
    props.onToggleColor(null);
  }
  
  
  return(
    <div className='product' style={{ transform: `translateX(${-props.shift * 100}%)`, backgroundColor: props.caughtId ? '#f4f9fd' : 'white'}}>
      <div className='cell' name='product-name' id={props.id} onMouseEnter={handleMouseEnterColumn} onMouseLeave={handleMouseLeaveColumn}>{props.name}</div>      
      {/* <div className='cell name' name='product-name' >{name}</div> */}
    </div>
  )
}
