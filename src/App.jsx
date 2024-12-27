import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import Theme from './Components/Theme/Theme.jsx'
import Card from './Components/Card/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container w-full min-h-screen d-flex flex-col">
        <header className='w-full h-20 flex flex-col items-center px-2' >
          <nav className="navbar h-16 w-full flex items-center fixed mx-2 border-b-2 p-2 gap-3 bg-white">
            <div className="logo h-full w-fit flex justify-between items-center font-mono  font-extrabold text-2xl">
             <h3>Shopi</h3>
            </div>
            <div className="links h-full w-fit flex justify-between items-center gap-3 ">
              <a href="#" className='w-fit px-2 focus:border-b-black '>All</a>
              <a href="#" className='w-fit px-2 focus:border-b-black '>Clothes</a>
              <a href="#" className='w-fit px-2 focus:border-b-black '>Electronics</a>
              <a href="#" className='w-fit px-2 focus:border-b-black '>Furnitures</a>
              <a href="#" className='w-fit px-2 focus:border-b-black '>Toys</a>
            </div>
            <div className="w-fit h-full ml-auto mr-5 flex items-center justify-center">
               <img src="" alt=""/>img
               {/* <Theme/> */}
            </div>
          </nav> 
        </header>

        <main className='w-full min-h-screen flex flex-col justify-center items-center px-2'>
<div className="w-fit h-80 py-4">
  <label htmlFor="search" className='w-fit flex gap-3 items-center'>  
  <input type="search" placeholder="Search for products" className="w-64 border rounded-lg  border-black px-3 py-4 bg-white"/>
   <button className='bg-black text-white px-4 py-2 rounded-lg'>Search</button>
  </label>
</div>

<div className="cards-section w-full min-h-screen">
  <div className="card-box w-full h-full flex flex-wrap gap-5 justify-center">
    <Card/>
  </div>
</div>
          
        </main>

        <footer>
          <div className="footer-content">
            <p>&copy; 2023 Greenify</p>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </footer>

      </div>
    </>
  )
}

export default App
