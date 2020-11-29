import React, { Fragment, useState } from 'react';
import cn from 'classnames';
import { Link, withRouter } from "react-router-dom";
import '../index.css';


export const Title = withRouter(Title_);

function Title_({ id, entities, location }) {
  const pagesGeneral = entities.pages;
  const [displayPagesState, setDisplayPages] = useState(false);
  // const [displayAnchorState, setDisplayAnchors] = useState(false);

  console.log(entities);

  function handleDisplayPagesClick() {
    setDisplayPages(state => !state);    
    // setDisplayAnchors(state => !state);    
  }  

  const { title, pages, url, anchors } = pagesGeneral[id];
  
  console.log(location);

  const className = cn('title__button', displayPagesState && 'button-expanded');
  const currentUrl = location.pathname.slice(1);

  return(
    <li className='entity'>
      <div className='title'>
        {pages && <button className={className} onClick={handleDisplayPagesClick}></button>}
        <Link to={url} className='page'>{title}</Link>
      </div>

      <div className='anchors'>
        <ul>
        {currentUrl === url && anchors && (
          anchors.map(anchor => (
            <li>
              <Link to={`${entities.anchors[anchor].url}${entities.anchors[anchor].anchor}`}>{anchor}</Link>
            </li>
          ))               
        )}
        </ul>
      </div>

      <div className='pages'>
        {displayPagesState && pages && (
        <List ids={pages} entities={entities} />
        )}
      </div>
    </li>
  )
}

export function List({ ids, entities }) {

  return(
    <ul>
      {ids.map(id => (
        <Title
          key={id}
          id={id}
          entities={entities}
        />
      ))}
    </ul>
  )
}

