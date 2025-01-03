import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Theme from './Components/Theme/Theme.jsx'
import Card from './Components/Card/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-screen d-flex space-y-3 flex-col ">
        <header className='w-full h-20 flex flex-col items-center px-2' >
          <nav className="navbar h-16 w-full flex items-center fixed mx-2 border-b-2 p-2 gap-3">
            <div className="logo h-full w-fit flex justify-between items-center font-mono  font-extrabold text-2xl">
             <h3>Shopi</h3>
            </div>
            <div className="links h-full w-fit flex justify-between items-center gap-3 ">
              <a href="#" className='w-fit px-2 focus:border-b-black hover:border-b-2 hover:border-black'>All</a>
              <a href="#" className='w-fit px-2 focus:border-b-black hover:border-b-2 hover:border-black'>Clothes</a>
              <a href="#" className='w-fit px-2 focus:border-b-black hover:border-b-2 hover:border-black'>Electronics</a>
              <a href="#" className='w-fit px-2 focus:border-b-black hover:border-b-2 hover:border-black'>Furnitures</a>
              <a href="#" className='w-fit px-2 focus:border-b-black hover:border-b-2 hover:border-black'>Toys</a>
            </div>
            <div className="w-fit h-full ml-auto mr-5 flex items-center justify-center">
               <Theme/>
            </div>
          </nav> 
        </header>

        <main className='w-full min-h-screen flex flex-col justify-center items-center px-2'>
<div className="w-fit h-40 py-4 flex items-center">
  <label htmlFor="search" className='w-fit flex gap-3 items-center'>  
  <input type="search" placeholder="Search for products" className="w-64 border rounded-lg  border-black px-3 py-4 bg-white"/>
   <button className='bg-black text-white px-4 py-2 rounded-lg'>Search</button>
  </label>
</div>

<div className="cards-section w-full min-h-screen">
  <div className="card-box w-full min-h-80 flex flex-wrap space-x-2 space-y-2 justify-center">
    <Card/>
  </div>
</div>
          
        </main>

        <footer>
          <div className="footer-content items-center w-full h-16 flex border-t border-gray-500 ">
            <p className='w-1/2 pl-3 font-semibold'>&copy; 2023 Shopi</p>
            <ul className='w-1/2 justify-center gap-2 items-center h-16 flex space-x-5 '>
              <li><a href="#" className='border-b border-black hover:font-bold'>Home</a></li>
              <li><a href="#" className='border-b border-black hover:font-bold'>About</a></li>
              <li><a href="#" className='border-b border-black hover:font-bold'>Contact</a></li>
            </ul>
          </div>

        </footer>

      </div>
    </>
  )
}

export default App

