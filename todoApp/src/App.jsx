import { useState } from 'react'
import TC from './components/Tasks Container/TC.jsx'
import './App.css'
import dark from './assets/icon-moon.svg'
import light from './assets/icon-sun.svg'
function App() {
  const [darkTheme,change] = useState(false);
    return (
      darkTheme == false ?
      <>
      <div className="min-h-screen bg-light-very_light_grayish_blue ">
      <div id='div-light' className='h-60 bg-light_mobile bg-no-repeat ssm:bg-light_desktop z-0'>
      </div>
      <div className='relative -top-56 mr-auto ml-auto z-10 w-comp sm:max-w-lg rounded-md'>
      <h1 className='text-3xl absolute left-0 top-5 text-white font-medium' id='title'>TODO</h1>
      <img className='absolute right-0 top-7' src={dark} onClick={() => {change(true); console.log('dark')}}/>
      <TC theme={darkTheme}/>
      </div>
      </div>
      </>
      :
        <>
        <div className="min-h-screen bg-dark-dark_blue">
      <div id='div-light' className='h-60 bg-dark_mobile bg-no-repeat ssm:bg-dark_desktop z-0'>
      </div>
      <div className='relative -top-56 mr-auto ml-auto z-10 w-comp sm:max-w-lg '>
      <h1 className='text-3xl absolute left-0 top-5 text-white font-medium' id="title">TODO</h1>
      <img className='absolute right-0 top-7' src={light} onClick={() => {change(false); console.log('light')}}/>
      <TC theme={darkTheme}/>
      </div>
      </div>
        </>
      ) 
}
export default App