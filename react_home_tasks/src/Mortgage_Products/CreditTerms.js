import React from 'react';
import '../index.css';

export function CreditTermsRowNames(props) {
  return(
    <div className='row-names'>
    {props.displayProductTerms && (
      <div className='terms'>
        <div className='cell'>Первоначальный взнос</div>
        <div className='cell'>Сумма кредита</div>
        <div className='cell'>Подтверждение дохода</div>
        <div className='cell'>Срок кредита</div>
      </div>
    )}
    </div>
  )
}

export function CreditDisplayButton(props) {
  return(
    <div className='row-names'>
      <div className='buttons-blocks' onClick={props.onHideTermsClick}>
          <span>Условия кредита</span>
      </div>
    </div>
  )
}

export function CreditTermsValues(props) {
  return(
    <div className='product' style={{ transform: `translateX(${-props.shift * 100}%)`, backgroundColor: props.caughtId ? '#f4f9fd' : 'white'}}>
      {props.displayProductTerms && (
        <div className='product-terms'>
          <div className='cell' name='credit'>от {props.minDeposit} %</div>
          <div className='cell' name='credit-amount'>от {props.minAmount} р до {props.maxAmount} р</div>
          <div className='cell' name='solvency-proof'>{props.requiresSolvencyProof}</div>
          <div className='cell' name='credit-duration'>???</div>
        </div>
      )}
    </div>
  )
}
