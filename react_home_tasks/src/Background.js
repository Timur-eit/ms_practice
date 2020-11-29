import React, { useState } from 'react';
import './index.css';

const inputs = ['a', 'b', 'c', 'd'];

function getInitialState() {
  for (let i = 0; i < 2e9; i++);  
  return Object.fromEntries(inputs.map(key => [key, '']));
}

export function Background() {
  const [colors, setColors] = useState(() => getInitialState());
  const [background, setBackground] = useState('');

  function changeColor(event) {
    const { name, value } = event.target;
    setColors(prev => ({ ...prev, [name]: value }));
  }

  function changeBackground(event) {
    event.preventDefault();
    setBackground(`linear-gradient(${inputs.map(key => colors[key]).join(', ')})`);    
  }

  console.log(colors);

  return(
    <form className='color-panel' onSubmit={changeBackground} style={{ background }}>
      <div>
        {inputs.map(key => (
          <input value={colors[key]} key={key} name={key} onChange={changeColor} />
        ))}
        <button type='submit'>Go</button>
      </div>
    </form>
  )
}





// ===========

// class BackgroundColor extends React.Component {
//   state = {
//     color1: '',
//     color2: '',
//   }

//   handleChange1 = (event) => {
//     this.setState({
//       color1: event.target.value,
//     }); // ?
//     console.log(event.target);
//   }

//   handleChange2 = (event) => {
//     this.setState({
//       color2: event.target.value,
//     }); // ?
//     console.log(event.target);
//   }

//   handleSubmit = (event) => {
//     document.body.style.background = `linear-gradient(${this.state.color1}, ${this.state.color2}) no-repeat`;
//     // this.state.value;
//     event.preventDefault(); // ?
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type='text' color1={this.state.color1} onChange={this.handleChange1} />
//         <input type='text' color2={this.state.color2} onChange={this.handleChange2} />
//         <input type='submit' value='Go' />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <BackgroundColor />,
//   document.getElementById('root')
// );

class BackgroundColor extends React.Component {
  state = {
    color1: 'Red',
    color2: 'Blue',
    background: '#fff',
  }

  handleChange1 = (event) => {
    this.setState({
      color1: event.target.value,
    }); // ?
    console.log(`this is first foo`);
    console.log(event.target);
    console.log(event);
  }

  handleChange2 = (event) => {
    this.setState({
      color2: event.target.value,
    }); // ?
    console.log(`this is second foo`);
    console.log(event.target);
  }

  handleSubmit = (event) => {
    this.setState({background: `linear-gradient(${this.state.color1}, ${this.state.color2}) no-repeat`});
    // this.state.value;
    event.preventDefault(); // ?
  }

  render() {
    return (
      <form id='color-form,' className='color-panel' onSubmit={this.handleSubmit} style={{ background: this.state.background }}>
        {/* <a onClick={e => e.preventDefault()} href="https://ya.ru">yayayay</a> */}
        <label htmlFor='color1'>
          Выберете первый цвет
          <input id='color1' type='text' name='color1' color1={this.state.color1} onChange={this.handleChange1}/>
            {/* <option color1='Red'>Red</option>
            <option color1='Gray'>Gray</option>
            <option color1='Silver'>Silver</option>
            <option color1='White'>White</option>
            <option color1='Fuchsia'>Fuchsia</option>
            <option color1='Maroon'>Maroon</option>
            <option color1='Yellow'>Yellow</option>
            <option color1='Olive'>Olive</option>
            <option color1='Lime'>Lime</option>
            <option color1='Green'>Green</option>
            <option color1='Aqua'>Aqua</option>
            <option color1='Teal'>Teal</option>
            <option color1='Blue'>Blue</option>
            <option color1='Navy'>Navy</option> */}
          {/* </select> */}
        </label>
        <label htmlFor='color1'>
          Выберете второй цвет
          <select name='color2' color1={this.state.color2} onChange={this.handleChange2}>
            <option color2='Blue'>Blue</option>
            <option color2='Gray'>Gray</option>
            <option color2='Silver'>Silver</option>
            <option color2='White'>White</option>
            <option color2='Fuchsia'>Fuchsia</option>
            <option color2='Red'>Red</option>
            <option color2='Maroon'>Maroon</option>
            <option color2='Yellow'>Yellow</option>
            <option color2='Olive'>Olive</option>
            <option color2='Lime'>Lime</option>
            <option color2='Green'>Green</option>
            <option color2='Aqua'>Aqua</option>
            <option color2='Teal'>Teal</option>
            <option color2='Navy'>Navy</option>
          </select>
        </label>
        <button className='submit' type='submit'>Go</button>
      </form>
    );
  }
}

