import { useState } from 'react'
import './App.css'
import Card from './Components/card'
import Welcome from './Components/welcome'

function App() {
  const [isYes, setIsYes] = useState(false)
  return (
    <>
      <div className='bg-pink-300 w-full h-screen flex items-center justify-center'>

        {!isYes && <Card setIsYes={setIsYes}/>}
        {isYes && <Welcome />}

      </div>
    </>
  )
}

export default App
