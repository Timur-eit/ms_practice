import React from 'react';
import '../index.css';

export function RowNames(props) {
  return(    
    <div className='table row-names'>      
      <div className='cell programmes'>
        <div>Программы: {props.programsQuantity}</div>
        <div>
          <button name='back' disabled={props.leftButtonDisabled} onClick={props.onLeftClick}>&lt;</button>
          <button name='forward' disabled={props.rightButtonDisabled} onClick={props.onRightClick}>&gt;</button>
        </div>
      </div>
      
      <div className='cell'>
        <div className='buttons-blocks'>
          <label htmlFor='difference'>Только различия</label>
          <input type='checkbox' name='difference'/>
        </div>
        <div className='cell'></div>
        <div className='buttons-blocks' onClick={props.onHideBasicClick}>
          <span>Основное</span>
          <div className='display-basic-button'style={{transform: props.displayProductBasic ? 'scale(-1, 1)' : 'scale(1, -1)'}}></div>
        </div>
      </div>

      {props.displayProductBasic && (
        <div className='basic'>
          <div className='cell realty-type'>Тип недвижимости</div>
          <div className='cell'>Процентная ставка</div>
          <div className='cell'>Ежемесячный платеж</div>
          <div className='cell'>Первоначальный взнос</div>
          <div className='cell'>Сумма кредита</div>
          <div className='cell'>Сумма процентов</div>
        </div>
      )}

      <div className='cell'>
        <div className='buttons-blocks' onClick={props.onHideTermsClick}>
          <span>Условия кредита</span>
          <div className='display-terms-button' style={{transform: props.transformTermsButton}}></div>
        </div>
      </div>

      <div className='credit-terms' style={{display: props.displayProductTerms}}>
          <div className='cell'>Первоначальный взнос</div>
          <div className='cell'>Сумма кредита</div>
          <div className='cell'>Подтверждение дохода</div>
          <div className='cell'>Срок кредита</div>
      </div>
    </div>
  )
}
