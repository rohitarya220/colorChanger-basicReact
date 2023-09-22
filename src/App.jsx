import { useState } from "react"


function App() {
  const [ color, setColor] = useState('black')


  return (
    <div className=" h-screen w-full duration-200 text-white" style={{backgroundColor: color }}>
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className=" bg-white flex flex-wrap justify-center rounded-lg px-3 py-1 gap-3 ">
          <button onClick={ () => setColor('red')} className=" bg-red-500 px-4 py-1 rounded-full">Red</button>
          <button onClick={ () => setColor('blue')} className=" bg-blue-500 px-4 py-1 rounded-full">blue</button>
          <button onClick={ () => setColor('green')} className=" bg-green-500 px-4 py-1 rounded-full">Green</button>
          <button onClick={ () => setColor('orange')} className=" bg-orange-500 px-4 py-1 rounded-full">Orange</button>
          <button onClick={ () => setColor('cyan')} className=" bg-cyan-400 px-4 py-1 rounded-full">Cyan</button>
          <button onClick={ () => setColor('pink')} className=" bg-pink-500 px-4 py-1 rounded-full">Pink</button>
          <button onClick={ () => setColor('yellow')} className=" bg-yellow-600 px-4 py-1 rounded-full">Yellow</button>
        </div>
      </div>
    </div>
  )
  
}

export default App
