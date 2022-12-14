import React, { useState } from 'react';
const ERR_MSG="Age is less enter more age.";
const NotErr="Great";
const Main = () => {
     const[text,settext]=useState("");
    const [isError, setError] = useState(false);
    const handleInput=(e)=>{
    setError(false);
    console.log(e.target.value);
    settext(e.target.value);
    if(e.target.value<18){
      setError(true);
    }
  }
  return (
    <div>
      <input value={text} onChange={handleInput} type="number"/>
      {isError ? ERR_MSG : NotErr}
    </div>
  );
}

export default Main;
