import { useState } from "react"

function Card({ setIsYes }) {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const moveButton = () => {
        const x = Math.random() * 200 - 100
        const y = Math.random() * 200 - 100

        setPosition({ x, y })
    }


    return (
        <div className="w-[95%] sm:w-[70%] h-[75%] sm:h-[80%] bg-amber-50 rounded-xl p-8.5 text-center">

            <h1 className='text-4xl font-bold mt-3 sm:mt-7'>Hello Love 💞</h1>

            <h1 className='text-3xl font-bold text-green-500 mt-10 sm:mt-5'>Will you be my Valentine?</h1>

            <div className='text-center'>

                <img src="https://media1.tenor.com/m/lcdpMePlPYMAAAAd/mikonay.gif" alt="" className='w-[55%] sm:w-[20%] rounded-4xl block mx-auto mt-5' />
            </div>

            <div className='text-center mt-20 sm:mt-10 space-x-27'>
                <button className='border-2 border-gray-800 py-1 px-4 rounded-lg  text-white bg-red-500 cursor-pointer hover:scale-110 duration-200'
                    onClick={() => setIsYes(true)}
                >
                    Yes
                </button>
                <button
                    onMouseEnter={moveButton}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`
                    }}
                    className='border-2 py-1 px-4 rounded-lg bg-white transition-transform duration-200'
                >
                    No
                </button>

            </div>
        </div>
    )
}

export default Card
