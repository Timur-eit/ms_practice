import React from 'react';

export class Pokemon extends React.Component {
  // constructor() {
  //   super();
  //   // this.handleClick = this.handleClick.bind(this);
  //   // this.ownHandleClick = this.__proto__.handleClick.bind(this);
  //   // this.ownHandleClick = Pokemon.prototype.handleClick.bind(this);
  //   // this.handleClick = function() {
  //   //   this.props.onToggleCaught(this.props.id);
  //   // }.bind(this);

  // }
  
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.props.onToggleCaught(this.props.id);
  };

  render() {
    const style = {
      background: this.props.caught ? 'red' : 'green',
    };

    console.log(this);

    return (
      <div className='pokemon' style={style}>
        <span className='pokemon__title'>{this.props.name}</span>
        <img name={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt='pokemon'/>
        <button onClick={this.handleClick} type="button" className='pokemon__button'>Поймать</button>
      </div>
    );
  }
}

// function Pokemon() {
//   // ...
// }

// Pokemon.prototype.handleClick = function() {
//     console.log('???', this);
//     this.props.onToggleCaught(this.props.id);
// }

// Pokemon.prototype.render = function() {
//   const style = {
//     background: this.props.caught ? 'red' : 'green',
//   };

//   console.log(this);

//   return (
//     <div className='pokemon' style={style}>
//       <span className='pokemon__title'>{this.props.name}</span>
//       <img name={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt='pokemon'/>
//       <button onClick={this.handleClick} type="button" className='pokemon__button'>Поймать</button>
//     </div>
//   );
// }