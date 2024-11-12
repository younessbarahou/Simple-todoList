import img from "../../assets/icon-cross.svg"
import check from "../../assets/icon-check.svg"
import React, { useRef , useEffect} from "react"
import "./task.css"
export default function CreateTask(props) {
  const value = useRef({text:''});
  // this function takes the value from the input
  function pullValue(e){
    value.current.text = e.target.value;
    value.current.text = value.current.text.trim();
  }
  function pushValue(){
      //let UpdatedList = props.list.push(value.current);
      props.change(value.current.text);
      console.log(`value "${value.current.text}" added to the array`);
  }
  let Create_Light = (
    <div className="relative top-28 bg-light-light_grey flex gap-4 text-black sm:gap-0 border-b-2 border-grey pt-4 pb-4 pl-3 pr-4  sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative rounded-md">
      <input type="checkbox" id="input" className="shrink-0 sm:mr-8"></input>
      <input
        autoComplete="off"
        className="shrink-1 outline-none bg-light-light_grey"
        ref = {value}
        onChange={pullValue}
        onKeyDown={(e) => {
          if (e.key == "Enter" && e.target.value){
            pushValue();
            e.target.value = null;
          }
        }}
        placeholder="create a new todo"
        id = "full-width"
      ></input>
      
    </div>
  );
  let Create_Dark = (
    <div className="relative top-28 bg-dark-very_dark_blue flex gap-4 text-white sm:gap-0 border-b-2 border-grey pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative rounded-md">
      <input type="checkbox" id="input" className="shrink-0 sm:mr-8"></input>
      <input
        autoComplete="off"
        className="shrink-1 outline-none bg-dark-very_dark_blue"
        placeholder="create a new todo"
        id = "full-width"
        ref = {value}
        onChange={pullValue}
        onKeyDown={(e) => {
          if (e.key == "Enter" && e.target.value){
            pushValue();
            e.target.value = null;
          }
        }}
      ></input>
    </div>
  );
  //final result
  return props.theme == false ? Create_Light : Create_Dark;
}