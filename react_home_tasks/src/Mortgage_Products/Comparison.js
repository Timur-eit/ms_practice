import React, { useState } from 'react';
import { products as products1 } from './products.js';

import { ProgrammeRowName, ProgrammeName } from './Programmes.js';
import { BasicRowName, BasicValues, BasicDisplayButton } from './Basic.js';
import { CreditTermsRowNames, CreditTermsValues, CreditDisplayButton } from './CreditTerms.js';
import { DifferenceCheck } from './DifferenceCheck.js';
import { Plug } from './Plug.js';

const products = products1.slice(0, 5);

const realtyTypes = {
  'flatNew': 'Квартира в новостройке',
  'flatSecondary': 'Квартира на вторичном рынке',
  'houseOrTownhouse': 'Дом или таунхаус',
  'garage': 'Гараж',
  'houseBuilding': 'Строительство дома',
  'repair': 'Квартира в строящемся доме',
}

// const elementsNames = ['realty-type', 'rate'];

const COLUMNS_COUNT = 3;

export function Comparison() {
  const [column, setColumn] = useState(0);
  const [displayBasic, setDisplayBasic] = useState(true);
  const [displayTerms, setTermsDisplay] = useState(true);
  const [caughtId, setCaughtIds] = useState(null);
  // const [caughtName, setCaughtName] = useState([]);


  function handleRightClick() {
    setColumn(x => x - 1);
  }

  function handleLeftClick() {
    setColumn(x => x + 1);
  }

  function handleDisplayBasicClick() {
    setDisplayBasic(state => !state);
  }

  function handleDisplayTermsClick() {
    setTermsDisplay(state => !state);
  }

  function isSolvencyProof(product) {
    return product.requiresSolvencyProof ? 'C подтверждением дохода' : 'Без подтверждения дохода';
  }

  function getRealtyTypes(product) {
    return product.realtyTypes
      .map(type => realtyTypes[type]).join(', ');
  }

  function chanheColumnColor(id) {    
    setCaughtIds(id);

    console.log(caughtId);
  }  
  
  return(

  <div className='comparison'>

    <div className='row upper'>
      <ProgrammeRowName
        programsQuantity={products.length}
        leftButtonDisabled={column === products.length - COLUMNS_COUNT}
        onLeftClick={handleLeftClick}
        rightButtonDisabled={column === 0}
        onRightClick={handleRightClick}
      />
      {products.map(product => (
        <ProgrammeName
          shift={column}
          name={product.name}
          key={product.id}
          onToggleColor={chanheColumnColor}
          id={product.id}
          caughtId={caughtId === product.id}
        />
      ))}
    </div>

    <div className='row'>
      <DifferenceCheck />
      {products.map(product => (
        <Plug
          shift={column}
          key={product.id}
          caughtId={caughtId === product.id}
        />
      ))}
    </div>

    <div className='row'>
      <BasicDisplayButton onHideBasicClick={handleDisplayBasicClick} />
      {products.map(product => (
        <Plug
          shift={column}
          key={product.id}
          caughtId={caughtId === product.id}
        />
      ))}
    </div>

    <div className='row'>
      <BasicRowName
        displayProductBasic={displayBasic}        
      />
      {products.map(product => (
        <BasicValues
          shift={column}
          displayProductBasic={displayBasic}
          realtyTypes={getRealtyTypes(product)}
          minRate={product.minRate}
          key={product.id}
          id={product.id}
          caughtId={caughtId === product.id}
        />
      ))}
    </div>

    <div className='row'>
      <CreditDisplayButton onHideTermsClick={handleDisplayTermsClick} />
      {products.map(product => (
        <Plug
          shift={column}
          key={product.id}
          caughtId={caughtId === product.id}
        />
      ))}
    </div>

    <div className='row'>
      <CreditTermsRowNames
        displayProductTerms={displayTerms}
      />
      {products.map(product => (
        <CreditTermsValues
          shift={column}
          displayProductTerms={displayTerms}
          minDeposit={product.minDeposit}
          minAmount={product.minAmount}
          maxAmount={product.maxAmount}
          requiresSolvencyProof={isSolvencyProof(product)}
          key={product.id}
          id={product.id}
          caughtId={caughtId === product.id}
        />
      ))}
    </div>

  </div>
  )
}
