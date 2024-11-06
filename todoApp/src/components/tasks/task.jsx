import img from "../../assets/icon-cross.svg";
import check from "../../assets/icon-check.svg";
import "./task.css";
import { useState } from "react";
export default function Task(props) {
  // main state (bool)
  const [status, ok] = useState(false);
  let completed_Light = (
    <div className="relative top-24  flex border-b-2 border-grey text-black justify-between sm:justify-normal gap-3 sm:gap-0  pt-5 pb-5 pl-3 pr-4 ml-4 mr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
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
      <p className="line-through opacity-60 shrink-1 sm:pr-4">
        Lorem ipsum dolor sit, amet consego
      </p>
      <img src={img} className="w-2 h-4 shrink-0 mt-1 sm:absolute sm:right-4" />
    </div>
  );
  let Ncompleted_Light = (
    <div className="relative top-24  flex text-black justify-between sm:justify-normal gap-3 sm:gap-0 border-b-2 border-grey pt-5 pb-5 pl-3 pr-4 ml-4 mr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
      <input
        type="checkbox"
        id="input"
        className="shrink-0 sm:mr-8"
        onChange={() => {
          ok(!status);
          console.log(status);
        }}
      ></input>
      <p className="shrink-1 sm:pr-4">Lorem ipsum dolor sit, amet consego</p>
      <img src={img} className="w-2 h-4 shrink-0 mt-1 sm:absolute sm:right-4" />
    </div>
  );
  let completed_Dark = (
    <div className="relative top-24 bg-dark-very_dark_blue flex border-b-2 border-grey text-white justify-between sm:justify-normal gap-3 sm:gap-0  pt-4 pb-4 pl-3 pr-4 ml-4 mr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
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
      <p className="line-through opacity-60 shrink-1 sm:pr-4">
        Lorem ipsum dolor sit, amet consego
      </p>
      <img src={img} className="w-2 h-4 shrink-0 mt-1 sm:absolute sm:right-4" />
    </div>
  );
  let Ncompleted_Dark = (
    <div className="relative top-24 bg-dark-very_dark_blue flex text-white justify-between sm:justify-normal gap-3 sm:gap-0 border-b-2 border-grey pt-4 pb-4 pl-3 pr-4 ml-4 mr-4 sm:max-w-xl sm:ml-auto sm:mr-auto sm:relative">
      <input
        type="checkbox"
        id="input"
        className="shrink-0 sm:mr-8"
        onChange={() => {
          ok(!status);
          console.log(status);
        }}
      ></input>
      <p className="shrink-1 sm:pr-4">Lorem ipsum dolor sit, amet consego</p>
      <img src={img} className="w-2 h-4 shrink-0 mt-1 sm:absolute sm:right-4" />
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