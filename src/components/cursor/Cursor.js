import React from 'react';
import './Cursor.css';

function Cursor() {
  const cursorRef=React.useRef(null)
  React.useEffect(()=>{
      document.addEventListener("mousemove" , (event)=>{
          const {clientX  , clientY} = event 
          const mouseX = clientX - cursorRef.current.clientWidth/2
          const mousey = clientY - cursorRef.current.clientHeight/2
          cursorRef.current.style.transform = `translate3d(${mouseX}px,${mousey}px,0)`
console.log("meryem")
      })
  }

  ,[])
  return (
    <div className='Cursor' ref={cursorRef}>
        
    </div>
  );
}

export default Cursor;
