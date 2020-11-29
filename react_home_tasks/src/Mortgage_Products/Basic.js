import React from 'react';
import '../index.css';

export function BasicRowName(props) {    
  return(
    <div className='row-names'>
      {props.displayProductBasic && (
        <div className='basic'>          
          <div className='cell realty-type'>Тип недвижимости</div>          
          <div className='cell'>Процентная ставка</div>          
          <div className='cell'>Ежемесячный платёж</div>          
          <div className='cell'>Первоначальный взнос</div>          
          <div className='cell'>Сумма кредита</div>          
          <div className='cell'>Сумма процентов</div>
        </div>
      )}
    </div> 
  )
}

export function BasicDisplayButton(props) {
  return(
    <div className='row-names'>
      <div className='buttons-blocks' onClick={props.onHideBasicClick}>
          <span>Основное</span>
      </div>
    </div>
  )
}

export function BasicValues(props) {  
  return(
    <div className='product' style={{ transform: `translateX(${-props.shift * 100}%)`, backgroundColor: props.caughtId ? '#f4f9fd' : 'white'}}>
      {props.displayProductBasic && (
        <div className='product-terms' id={props.id}>
          <div className='cell realty-type' name='realty-type'>{props.realtyTypes}</div>
          <div className='cell' name='rate'>{props.minRate}</div>
          <div className='cell' name='payment-amount'>paymentAmountValue</div>
          <div className='cell' name='min-deposit-value'>minDepositValue</div>
          <div className='cell' name='loan-amount-value'>loanAmountVlaue</div>
          <div className='cell' name='pct-amount'>pctAmount</div>
        </div>
      )}
    </div>
  )
}



