import img from "../../assets/icon-cross.svg";
import check from "../../assets/icon-check.svg";
import "./task.css";
import { useState } from "react";
export default function Task(props) {
  // main state (bool)
  const [status, ok] = useState(false);
  let completed_Light = (
      <div className="relative top-24 bg-light-light_grey flex text-black rounded-t justify-normal gap-4 sm:gap-0 border-b-sm border-grey pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
        <input
          type="checkbox"
          id="input"
          className="gradient shrink-0 sm:mr-8"
          onChange={() => {
            ok(!status);
            console.log(status);
          }}
        ></input>
        <img
          src={check}
          className="check_mark"
          onClick={() => {
            ok(!status);
            console.log(status);
          }}
        />
        <p className="line-through opacity-60 shrink-1 pr-5 -left-4">
        {props.value}
        </p>
        <img src={img} className="w-2 h-4 shrink-0 mt-1 w-2 absolute right-4"/>
      </div>
    );
  let Ncompleted_Light = (
    <div className="relative top-24 bg-light-light_grey flex text-black justify-normal gap-4 sm:gap-0 border-b-sm rounded-t border-grey pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
      <input
        type="checkbox"
        id="input"
        className="shrink-0 sm:mr-8"
        onChange={() => {
          ok(!status);
          console.log(status);
        }}
      >
      </input>
      <p className="shrink-1 pr-5 -left-4">{props.value}</p>
      <img 
      src={img} 
      className="w-2 h-4 shrink-0 mt-1 absolute right-4"
      //
      />
    </div>
    )
  let completed_Dark = (
    <div className="relative top-24 bg-dark-very_dark_blue flex text-white justify-normal rounded-t gap-4 sm:gap-0 border-b-sm border-grey pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
      <input
        type="checkbox"
        id="input"
        className="gradient shrink-0 sm:mr-8"
        onChange={() => {
          ok(!status);
          console.log(status);
        }}
      ></input>
      <img
        src={check}
        className="check_mark"
        onClick={() => {
          ok(!status);
          console.log(status);
        }}
      />
      <p className="line-through opacity-60 shrink-1 pr-5 -left-4">
      {props.value}
      </p>
      <img src={img} className="w-2 h-4 shrink-0 mt-1 w-2 absolute right-4 "/>
    </div>
  );
  let Ncompleted_Dark = (
    <div className="relative top-24 bg-dark-very_dark_blue flex text-white justify-normal rounded-t gap-4 sm:gap-0 border-b-sm border-grey pt-4 pb-4 pl-3 pr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
      <input
        type="checkbox"
        id="input"
        className="shrink-0 sm:mr-8"
        onChange={() => {
          ok(!status);
          console.log(status);
        }}
      >
      </input>
      <p className="shrink-1 pr-5 -left-4">{props.value} </p>
      <img src={img} className="w-2 h-4 shrink-0 mt-1 absolute right-4" />
    </div>
  );
  //final result
  return(
 status == false? 
 props.theme == false ?
  Ncompleted_Light:
  Ncompleted_Dark
  :
  props.theme == false ?
  completed_Light:
  completed_Dark
)
}