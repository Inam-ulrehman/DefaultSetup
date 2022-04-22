import React from 'react'
import { useGlobalContext } from '../contex/contextapi'

const Home = () => {
  const { addClass } = useGlobalContext()
  console.log(addClass)

  return (
    <div>
      <p>hello</p>
    </div>
  )
}

export default Home
