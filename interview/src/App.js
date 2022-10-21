import './App.css';
import Home from "./components/Home";
import UseContext from './components/UseContext';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
function App() {
  return (
    <div className="App">
      <Home />
      <UseEffect />
      <UseRef />
      <UseContext/>
    </div>
  );
}

export default App;
