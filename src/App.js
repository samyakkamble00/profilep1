import React from 'react'
import BSection from './Component/Body/BSection'
import NavBar from './Component/NavBar/NavBar'
import Education from './Component/Education/Education'

const App = () => {
  return (
    <div className='App'>
    <NavBar/>
    <BSection/>
    <Education/>
    </div>
  )
}

export default App