import React from 'react';
import '../index.css';

export function Product({
  shift,
  name,
  realtyTypes,
  minRate,
  minDeposit,
  minAmount,
  maxAmount,
  requiresSolvencyProof,

  displayProductBasic,
  displayProductTerms,

  onMouseOver,
  backgroundColor,
  
  onMouseOut,

}) {
  return(
    <div className='table product' style={{ transform: `translateX(${-shift * 100}%)`, backgroundColor: backgroundColor}}>
      <div className='cell name' name='product-name' onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>{name}</div>
      {displayProductBasic && (
        <div className='product-basic'>
          <div className='cell realty-type' name='realty-type'>{realtyTypes}</div>
          <div className='cell' name='rate'>{minRate}</div>
          <div className='cell' name='payment-amount'>paymentAmountValue</div>
          <div className='cell' name='min-deposit-value'>minDepositValue</div>
          <div className='cell' name='loan-amount-value'>loanAmountVlaue</div>
          <div className='cell' name='pct-amount'>pctAmount</div>
        </div>
      )}
      <div className='product-terms' style={{display: `${displayProductTerms}`}}>
        <div className='cell' name='credit'>от {minDeposit} %</div>
        <div className='cell' name='credit-amount'>от {minAmount} р до {maxAmount} р</div>
        <div className='cell' name='solvency-proof'>{requiresSolvencyProof}</div>
        <div className='cell' name='credit-duration'>???</div>
      </div>
    </div>
  )
}