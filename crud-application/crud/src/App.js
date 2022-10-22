import './App.css';
import Main from './components/Main';
import { Router,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Main/>
    </div>
  );
}

export default App;
