import React,{useState,useEffect} from 'react'

function HookMouse() {
const[x,setX]=useState(0)
const[y,setY]=useState(0)

const logMouseMove=e=>{
    setX(e.clientX)
    setY(e.clientY)
}


useEffect(()=>{

window.addEventListener('mousemove',logMouseMove)

return()=>{
    window.removeEventListener('mousemove',logMouseMove)
}
})

  return (
    <div>
      X : {x} Y : {y}
    </div>
  )
}

export default HookMouse
