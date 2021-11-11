
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Gibellina"/>
       <footer><a href="https://github.com/edriophthalma/forecast-react.git" alt="Giulia's code">Open-source code by Giulia D'Angelo</a></footer>
      </div>
    </div>
  );
}

export default App;
