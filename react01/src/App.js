
import './App.css';

function App() {
  const arr = [
    {name: "HTC", style: "Square"},
    {name: "Micromax", style: "Circle"}
  ]
  // const arr = [1,2,3,4];

  return (
    <div className="App">
     {arr.map(el=>
     <li className={el.style}>{el.name}</li>
     )}
    </div>
  );
}

export default App;
