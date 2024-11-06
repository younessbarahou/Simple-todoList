import img from '../../assets/icon-cross.svg'
import check from '../../assets/icon-check.svg'
import './task.css'
import { useState } from "react"

export default function Task(){
    // main state (bool)
    const [status,ok] = useState(false)
    return (
        status == false ? 
        // case 1: task is not completed (status == false)
        <div className="relative top-24 bg-yellow-400 flex text-black justify-between sm:justify-normal gap-3 sm:gap-0  pt-5 pb-5 pl-3 pr-4 rounded-lg ml-4 mr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
            <input type="checkbox" id = "input"  className = "shrink-0 sm:mr-8" onChange = {
                () => {
                    ok(!status) ; console.log(status);
            }
            }>
            </input>
            <p className='shrink-1 sm:pr-4'>Lorem ipsum dolor sit, amet consego</p> 
            <img src={img} className='w-2 h-4 shrink-0 mt-1 sm:absolute sm:right-4'/> 
        </div>
        :
        // case 2: task is completed (status == true)
        <div className="relative top-24 bg-yellow-400 flex text-black justify-between sm:justify-normal gap-3 sm:gap-0  pt-5 pb-5 pl-3 pr-4 rounded-lg ml-4 mr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
            <input type="checkbox" id="input" className="gradient shrink-0 sm:mr-8" onChange = {
                () => {
                    ok(!status) ; console.log(status);
            }
            }>
            </input>
                <img src={check} className="check_mark" onClick={() => {ok(!status) ;console.log(status)}}/> 
                <p className="line-through opacity-60 shrink-1 sm:pr-4">Lorem ipsum dolor sit, amet consego</p>
            <img src={img} className='w-2 h-4 shrink-0 mt-1 sm:absolute sm:right-4'/>
        </div>
    )
}