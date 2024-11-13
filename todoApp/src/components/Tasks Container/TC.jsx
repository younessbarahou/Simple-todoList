import Task from '../tasks/task.jsx'
import CreateTask from '../tasks/createTask.jsx'
import React , { useState , useEffect} from 'react'
import Footer from '../footer/footer.jsx'
import Swal from 'sweetalert2'
export default function TC(props){
    const [tasks,setTask] = useState(() => {
        const data = localStorage.getItem("Update");
        return data ? JSON.parse(data) : [];
    });
    // !!
    const [spread,setSpread] = useState(0);
    let spreadTasksAll = tasks.map((x) => 
    <li key = {x.id}> <Task theme={props.theme}  id={x.id} setStatus ={SetStatus} remove={RemoveTask} status={x.status} value={x.text}/> </li>);
    let spreadTasksActive = tasks.filter((s) => s.status == false).map((x) => 
        <li key = {x.id}> <Task theme={props.theme}  id={x.id} setStatus ={SetStatus} remove={RemoveTask} status={x.status} value={x.text}/></li>);    
    let spreadTasksCompleted = tasks.filter((z) => z.status == true).map((x) => 
        <li key = {x.id}> <Task theme={props.theme}  id={x.id} setStatus ={SetStatus} remove={RemoveTask} status={x.status} value={x.text}/></li>);        
    // this function add tasks
    function UpdateList(t){
        setTask([...tasks,{id:Date.now(),text:t,status:false}]);
    }
    // remove
    function RemoveTask(k){
        setTask(tasks.filter((x) => x.id != k));
    }
    // !! 
    function SetStatus(i,s){
        setTask(tasks.map((task) => task.id == i ? {...task,status:s}: task));
    }
    // change in the tasks list = change in the local storage
    useEffect(() =>{
        localStorage.setItem("Update", JSON.stringify(tasks));
        console.log(localStorage.getItem("Update"));
      } , [tasks])
      // number of non-checked tasks
    function NbrComp(){
        let cte = 0;
        tasks.map((x) => x.status == false ? cte++ : cte);
        return cte;
      }
      // remove all checked tasks
    function ClearComp(){
        Swal.fire({
            title: 'Remove All Completed Tasks ?',
            text: 'Can Not Undo This Step',
            icon: 'question',
            color: 'white',
            background:'#25273c',
            confirmButtonText: 'ok',
            cancelButtonText : 'cancel',
            showCancelButton: true
          }).then((result) => {
            if (result.isConfirmed) {
                setTask(tasks.filter((task) => task.status == false));
            }
          });
    }
    function EditSpread(v){
        setSpread(v);
    }  
    return(
    <>
        <CreateTask theme={props.theme} list={tasks} change={UpdateList}/>
        <ul className="mt-8 shadow-xl">
            {spread == 2 ? spreadTasksCompleted : spread == 1 ?spreadTasksActive : spreadTasksAll}
        </ul>
       <Footer completed={NbrComp} clearCompleted={ClearComp} theme={props.theme} spread={EditSpread}/>
    </>
    )
}