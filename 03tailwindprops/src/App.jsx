import './App.css'
import Card from './component/Card'
import Data from './Data'

function App() {
  return (
    <>
      <h1 className='text-3xl bg-emerald-300 p-3 rounded-md'>Vite with Tailwind</h1>
      {Data().map((item, index) => (
        <Card
          key={index}
          name={item.name}
          location={item.location}
          description={item.description}
          imgSrc={item.imgSrc}
        />
      ))}
    </>
  )
}

export default App
