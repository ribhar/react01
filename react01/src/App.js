import { useState } from 'react';
import './App.css';

function App() {
//  let counter = 0;
 const [count,setCount] = useState(0)

 const handlechange = (value)=>{
  setCount(count + value)
 }
  return (
    <div className='App'>
      <h3>Counter: {count}</h3>
     <button onClick={()=>handlechange(1)}>ADD 1</button>
     <button onClick={()=>handlechange(-1)}>SUB 1</button>
     <div style={count%2===0? {color:"red"} : {color:"green"}}>Number is {count%2===0? "even" : "odd"}</div>
    </div>
  );
}

export default App;
