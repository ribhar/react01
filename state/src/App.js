import {useState} from 'react'
import './App.css';

function App() {
  // const data = "Hello c1";
  // const newData = "Hello c2";

  const handleChange = (value)=>{
    console.log("hello",value)
  }

  return (
    <>
      <First2 datafun={handleChange}/>
    </>
    
  )
  // return (
  //   <div className="App">
  //     <First data={data}/>
  //     <Second/>


  //   </div>
  // );
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


// child to parent...................

function First2({datafun}){
  const data = "test";
  datafun(data);
  return <div>First Child</div>
}
