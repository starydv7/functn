import React, { useRef} from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
    }
  return (
      <div>UseRef
          <h1>Pawan</h1>
          <input type="text" placeholder="Enter your input..." ref={inputRef} />
          <button onClick={onClick }>Chnage the current</button>
    </div>
  )
}

export default UseRef