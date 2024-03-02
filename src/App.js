import { useState } from 'react';
import './App.css';
import ColorBlock from './ColorBlock';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    );
  });
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
      {colorMap((color, i) => (
        <ColorForm addColor={addColor}/>
      ))};
    </div>
  );
};

function ColorForm(props) {
  let [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addColor(input)
  } 
  return (
    <div>
      <form onsubmit={handleSubmit}>
        <input type='text'
        onChange={(e) => setInput(e.target.value)} />
        <button>Submit!</button>
      </form>
    </div>
  )
}

export default App;
