import { useState } from 'react'
import TC from './components/Tasks Container/TC.jsx'
import './App.css'
import dark from './assets/icon-moon.svg'
import light from './assets/icon-sun.svg'
import data from './quotes.json'
function App() {
  const [darkTheme,change] = useState(true);
  let dt = new Date();
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = ["Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];  
    return (
      darkTheme == false ?
      <>
      <div className="min-h-screen bg-light-very_light_grayish_blue ">
      <div id='div-light' className='h-60 bg-light_mobile bg-no-repeat ssm:bg-light_desktop z-0'>
      </div>
      <div className='relative -top-56 mr-auto ml-auto z-10 w-comp sm:max-w-lg'>
      <h1 className='text-3xl absolute left-0 top-5 text-white font-medium' id='title'>TODO</h1>
      <img className='absolute right-0 top-7' src={dark} onClick={() => {change(true); console.log('dark')}}/>
      <div className='relative top-24 text-center text-white'><span id="date">{day[dt.getDay()]} { month[dt.getMonth()]} {dt.getFullYear()} </span> <br></br><i className='text-sm relative top-1'>"{data[Math.floor(Math.random() * 10)].quote}"</i></div>
      <TC theme={darkTheme}/>
      </div>
      <footer className="text-center text-ddd relative -top-20">Made By <a className="hover:text-red duration-500" href="https://github.com/younessbarahou"><b>Youness Barahou</b></a> &#128567;</footer>
      </div>
      </>
      :
        <>
        <div className="min-h-screen bg-dark-dark_blue">
      <div id='div-light' className='h-60 bg-dark_mobile bg-no-repeat ssm:bg-dark_desktop ssm:min-w-fit z-0'>
      </div>
      <div className='relative -top-56 mr-auto ml-auto z-10 w-comp sm:max-w-lg '>
      <h1 className='text-3xl absolute left-0 top-5 text-white font-medium' id="title">TODO</h1>
      <img className='absolute right-0 top-7' src={light} onClick={() => {change(false); console.log('light')}}/>
      <div className='relative top-24 text-center text-white'><span id="date">{day[dt.getDay()]} { month[dt.getMonth()]} {dt.getFullYear()} </span> <br></br><i className='text-sm relative top-1'>"{data[Math.floor(Math.random() * 10)].quote}"</i></div>
      <TC theme={darkTheme}/>
      </div>
      <footer className="text-center text-grey relative -top-20">Made By <a className="hover:text-red duration-500" href="https://github.com/younessbarahou"><b>Youness Barahou</b></a> &#128567;</footer>
      </div>
        </>
      ) 
}
export default App