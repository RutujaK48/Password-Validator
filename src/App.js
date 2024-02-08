import './App.css';
import $ from 'jquery';
function App() {
  
  return (
    <div className="App">
     <div className="slidecontainer">
      <input type="range" min="1" max="10" value="5" className="slider" id="myRange" onChange={Changeslider} />
      <p>Value: <span id="demo"></span></p>
    </div>
    </div>
  );
}

function Changeslider(){
  debugger
  $("#demo").text($("#myRange").value)
  
}
export default App;
