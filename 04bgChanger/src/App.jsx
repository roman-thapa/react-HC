import { useState } from 'react'

function App() {
  const [color, setColor] = useState('grey')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('black')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'black'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('red')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'red'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('blue')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'blue'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('green')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'green'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('yellow')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'yellow'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('brown')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'brown'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Brown</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('pink')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'pink'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' onClick={() => setColor('white')} onMouseEnter={(e) =>  e.target.style.backgroundColor = 'white'} onMouseLeave={(e) =>  e.target.style.backgroundColor = 'white'}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
