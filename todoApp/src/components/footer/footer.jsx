import React , {useEffect,useState} from 'react';
export default function Footer(props)
{
    const [display,set] = useState(0);
    useEffect(() =>{
        props.spread(display);
        console.log(display)
    },[display]);
return(
    props.theme === false ?
    <>
    <div className="hidden sm:text-small sm:overflow-hidden sm:relative sm:top-24 sm:bg-light-light_grey sm:flex rounded-b-sm sm:text-black sm:justify-between sm:gap-4  sm:pt-4 sm:pb-4 sm:sm:max-w-xl sm:ml-auto sm:mr-auto">
      <div className="sm:inline sm:pl-5 hover:cursor-pointer">{props.completed()} items left</div>
      <div className="sm:flex sm:gap-6 ">
        <div onClick={() => set(0)} className="hover:text-blue-500 hover:cursor-pointer">All</div>
        <div  onClick={() => set(1)} className="hover:text-blue-500 hover:cursor-pointer">Active</div>
        <div onClick={() => set(2)} className="hover:text-blue-500 hover:cursor-pointer">Completed</div>
      </div>
      <div className="sm:inline sm:pr-5 hover:cursor-pointer" onClick={() => props.clearCompleted()}>clear completed</div>
    </div>
    <div className="sm:hidden text-small relative top-24 bg-light-light_grey flex justify-between text-black gap-4 sm:gap-0  rounded  pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
    <div className="sm:hidden pl-3 ">{props.completed()} items left</div>
    <div className="sm:hidden pr-3 " onClick={() => props.clearCompleted()}>clear completed</div>
    </div>
    <div className="relative top-28 sm:hidden bg-light-light_grey flex justify-normal text-black gap-4 sm:gap-0 rounded-sm pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
    <div className="text-small flex gap-6 sm:hidden ml-auto mr-auto">
    <div onClick={() => set(0)}>All</div>
        <div onClick={() => set(1)}>Active</div>
        <div onClick={() => set(2)}>Completed</div>
    </div>
    </div>
    </>
    :
    <>
    <div className="hidden sm:text-small sm:overflow-hidden sm:relative sm:top-24 sm:bg-dark-very_dark_blue sm:flex rounded-b-sm sm:text-white sm:justify-between sm:gap-4  sm:pt-4 sm:pb-4 sm:sm:max-w-xl sm:ml-auto sm:mr-auto">
      <div className="sm:inline sm:pl-5 hover:cursor-pointer">{props.completed()} items left</div>
      <div className="sm:flex sm:gap-6 ">
        <div onClick={() => set(0)} className="hover:text-blue-500 hover:cursor-pointer">All</div>
        <div  onClick={() => set(1)} className="hover:text-blue-500 hover:cursor-pointer">Active</div>
        <div  onClick={() => set(2)} className="hover:text-blue-500 hover:cursor-pointer">Completed</div>
      </div>
      <div className="sm:inline sm:pr-5 hover:cursor-pointer" onClick={() => props.clearCompleted()}>clear completed</div>
    </div>
    <div className="sm:hidden text-small relative top-24 bg-dark-very_dark_blue flex justify-between text-white gap-4 sm:gap-0  rounded  pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
    <div className="sm:hidden pl-3 ">{props.completed()} items left</div>
    <div className="sm:hidden pr-3 " onClick={() => props.clearCompleted()}>clear completed</div>
    </div>
    <div className="relative top-28 sm:hidden bg-dark-very_dark_blue flex justify-normal text-white gap-4 sm:gap-0 rounded-sm pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
    <div className="text-small flex gap-6 sm:hidden ml-auto mr-auto">
    <div onClick={() => set(0)}>All</div>
        <div onClick={() => set(1)}>Active</div>
        <div onClick={() => set(2)}>Completed</div>
    </div>
    </div>
    </>
)
}