import React, {createContext, useState } from "react";
import './App.css';
import Child from './components/Child';

export const GlobalData = createContext();

function App() {
  const [color, setColor] = useState('red');
  return (
    <GlobalData.Provider value={{ AppColor: color }}>
    <div className="App">
      <h1>React context Api
        <Child />
        </h1>
    </div>
    </GlobalData.Provider>
  );
}

export default App;
