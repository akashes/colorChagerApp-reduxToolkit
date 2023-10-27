import React from 'react'
import useTimeHook from './customHooks/useTimeHook'
function Home() {
    let time=useTimeHook()
  return (
    <div>{time}</div>
  )
}

export default Home