import { useState } from 'react'

function App() {
  const [color, setColor ] = useState("purple")

  return (
      <div className = "w-full h-screen "
      style={{backgroundColor:color}}
      >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2"
       >
        <div  className=" flex flex-wrap px-4 py-2 gap-2 justify-center borderRadius-full bg-white rounded-full">
            <button
             onClick = {()=> setColor("red")}
             className="px-4 rounded-full font-bold text-white cursor-pointer "
            style={{backgroundColor:"Red"}}> Red
             </button>

            <button
             onClick = {()=> setColor("Green")}
             className="px-4 rounded-full font-bold text-white cursor-pointer"
             style={{backgroundColor:"Green"}}> Green
             </button>

             <button
                  onClick = {()=> setColor("Blue")}
                  className="px-4 rounded-full font-bold text-white cursor-pointer "
                  style={{backgroundColor:"Blue"}}> Blue
             </button>
             <button
                 onClick = {()=> setColor("Orange")}
                 className="px-4 rounded-full font-bold text-white cursor-pointer"
                 style={{backgroundColor:"Orange"}}> Orange
             </button>
             <button
                onClick = {()=> setColor("Yellow")}
                className="px-4 rounded-full font-bold text-black cursor-pointer"
                style={{backgroundColor:"Yellow"}}> Yellow
             </button>
             <button
                onClick = {()=> setColor("Olive")}
                className="px-4 rounded-full font-bold text-white cursor-pointer "
                style={{backgroundColor:"Olive"}}> Olive
             </button>
             <button
                onClick = {()=> setColor("Pink")}
                className="px-4 rounded-full font-bold text-white cursor-pointer"
                style={{backgroundColor:"Pink"}}> Pink
             </button>
             <button
                onClick = {()=> setColor("Lavender")}
                className="px-4 rounded-full font-bold text-black cursor-pointer"
                style={{backgroundColor:"Lavender"}}> Lavender
             </button>
        </div>

      </div>

      </div>
  )
}

export default App
