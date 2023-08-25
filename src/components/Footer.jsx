import React, { useEffect, useRef } from 'react'

function Footer({timeline, ease}) {

  let github = useRef(null);
  let made = useRef(null);

  useEffect(()=>{
    timeline.from(github, 1, { opacity: 0, y: "100%",})
    .from(made, 1 , {opacity: 0, y: "200%", delay: -.3,ease: ease,})
  }, [])

  return (
    <div className=' f_style'>
        <div className='f_inner'>
            <a href="https://github.com/JaskaranSingh20" target="_blank" ref={el => github = el}>
                <p>GITHUB</p>
            </a>
            <a href="https://github.com/JaskaranSingh20/Assignment" target="_blank" ref={el => made = el}>
                <p>MADE WITH &#128150;</p>
            </a>
        </div>
    </div>
  )
}

export default Footer