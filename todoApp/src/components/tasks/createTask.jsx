import img from "../../assets/icon-cross.svg"
import check from "../../assets/icon-check.svg"
import React, { useState } from "react"
import "./task.css"
export default function CreateTask(props) {
  const [value, changeValue] = useState('');
  // this function takes the value from the input and changes the state
  function pullValue(event) {
    changeValue(event.target.value);
  }
  let Ncompleted_Light = (
    <div className="relative top-24 bg-light-light_grey flex gap-4 text-black sm:gap-0 border-b-2 border-grey pt-4 pb-4 pl-3 pr-4  sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative rounded-md">
      <input type="checkbox" id="input" className="shrink-0 sm:mr-8"></input>
      <input
        className="shrink-1 outline-none bg-light-light_grey"
        value={value}
        onChange={pullValue}
        placeholder="create a new todo"
        id = "full-width"
      ></input>
    </div>
  );
  let Ncompleted_Dark = (
    <div className="relative top-24 bg-dark-very_dark_blue flex gap-4 text-white sm:gap-0 border-b-2 border-grey pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative rounded-md">
      <input type="checkbox" id="input" className="shrink-0 sm:mr-8"></input>
      <input
        className="shrink-1 outline-none bg-dark-very_dark_blue"
        value={value}
        onChange={pullValue}
        placeholder="create a new todo"
        id = "full-width"
      ></input>
    </div>
  );
  //final result
  return props.theme == false ? Ncompleted_Light : Ncompleted_Dark;
}