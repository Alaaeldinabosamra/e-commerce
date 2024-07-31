import React from 'react'

import next from '../../assets/images/next.png'
import previous from '../../assets/images/prev.png'
function LeftButton(onClick) {
  return (
    <img 
        src={next}
        alt=''
        onClick={onClick}
        width="35px"
        height="35px"
        style={{float: "left", marginTop: "220px", cursor:"pointer"}}
    />

  )
}

function RightButton(onClick) {
  return (
    <img 
        src={previous}
        alt=''
        onClick={onClick}
        width="35px"
        height="35px"
        style={{float: "right", marginTop: "220px", cursor:"pointer"}}
    />

  )
}

export {LeftButton , RightButton} 
