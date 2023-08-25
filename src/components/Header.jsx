import React, { useEffect, useRef } from 'react'

function Header({timeline, ease}) {

  let logo = useRef(null);
  let btn = useRef(null);

  useEffect(()=>{
    timeline.from(logo, 1.5, { opacity: 0, y: "-100%",})
    .from(btn, 1 , {opacity: 0, y: "-200%", delay: -.3,ease: ease,})
  }, [])

  return (
    <div id="nav">
      <a href="https://openagent.dev/" target='_blank' ref={el => logo = el} ><h2><b>OPEN</b>AGENT*</h2> </a>
        
        <button ref={el => btn = el} className='navbtn'>AUGEST 2023</button>
    </div> 
  )
}

export default Header