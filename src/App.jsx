import { useState } from 'react'
import './App.css'
import Card from './Components/card'
import Welcome from './Components/welcome'
import Profile from './assets/Profile.png'

function App() {
  const [isYes, setIsYes] = useState(false)
  return (
    <>
      <div className='bg-pink-300 w-full h-screen flex items-center justify-center'>

        <div className="flex justify-center items-center flex-col absolute top-3 right-3">
          <a href="https://gauravkumar03.vercel.app"
            target='_blank'
          >
            <img className='cursor-pointer '
              src={Profile} alt="" width={`40px`} />
          </a>
        </div>

        {!isYes && <Card setIsYes={setIsYes} />}
        {isYes && <Welcome />}

      </div>
    </>
  )
}

export default App
