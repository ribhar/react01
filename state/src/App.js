import {useState} from 'react'
import './App.css';

function App() {
  const data = "Hello c1";
  // const newData = "Hello c2";

  const cb = (value)=>{
    console.log("hellow",value)
  }

  return First2(cb)
  return (
    <div className="App">
      <First data={data}/>
      <Second/>


    </div>
  );
}

export default App;


// parent to child
function First({data}){
  console.log("received from parent", data);
  // console.log("received from parent", data2);
  const [x,setX] = useState(30)
  return <div>First Child {x}</div>
}


function Second(){
  return <div>Second Child</div>
}


// child to parent

function First2(cb){
  const data = "test";
  cb(data);
}
