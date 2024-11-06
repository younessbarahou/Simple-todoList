import { useState } from 'react'
import './App.css'
import Task from './components/tasks/task.jsx'
import dark from './assets/icon-moon.svg'
import light from './assets/icon-sun.svg'
function App() {
  const [darkTheme,change] = useState(false);
   return (
      darkTheme == false ? 
      <>
      <div className="h-screen bg-light-light_grey">
      <div id='div-light' className='h-36 bg-light_mobile bg-no-repeat ssm:bg-light_desktop ssm:h-48 z-0'>
      </div>
      <div className=' relative -top-32 ssm:-top-44 mr-auto ml-auto z-10 w-comp sm:max-w-lg'>
      <h1 className='text-3xl absolute left-0 top-5 text-white font-medium' id='title'>TODO</h1>
      <img className='absolute right-0 top-7' src={dark} onClick={() => {change(true); console.log(darkTheme)}}/>
      </div>
      </div>
      </>
      :
        <>
        <div className="h-screen bg-dark-dark_blue">
      <div id='div-light' className='h-36 bg-dark_mobile bg-no-repeat ssm:bg-dark_desktop ssm:h-48 z-0'>
      </div>
      <div className=' relative -top-32 ssm:-top-44 mr-auto ml-auto z-10 w-comp sm:max-w-lg'>
      <h1 className='text-3xl tracking-widest absolute left-0 top-5 text-white font-medium' id="title">TODO</h1>
      <img className='absolute right-0 top-7' src={dark} onClick={() => {change(false); console.log(darkTheme)}}/>
      <div>

      </div>
      </div>
      <div><Task theme={darkTheme}/></div>
      </div>
        </>
      ) 
}
export default App