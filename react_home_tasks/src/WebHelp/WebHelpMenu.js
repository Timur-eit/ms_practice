import React, { useState } from 'react';
import { List } from './List.js';
import data from './HelpTOC.json';
import { BrowserRouter } from "react-router-dom";

// console.log(data);

export function WebHelpMenu () {   
  return(
    <BrowserRouter>
      <List ids={data.topLevelIds} entities={data.entities} />
    </BrowserRouter>
  )
}
