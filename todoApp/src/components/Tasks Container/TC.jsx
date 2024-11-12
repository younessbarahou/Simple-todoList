import Task from '../tasks/task.jsx'
import CreateTask from '../tasks/createTask.jsx'
import React , { useState , useEffect} from 'react'
//localStorage.clear()
export default function TC(props){
    // check if the storage is void
    const [tasks,setTask] = useState(() => {
        const data = localStorage.getItem("Update");
        return data ? JSON.parse(data) : [];
    });
    // this variable spread the tasks into the tasks container
    // here we send the li index as a props to the task
    let spreadTasks = tasks.map((x) => 
    <li key = {x.id}> <Task theme={props.theme} list ={tasks} id={x.id} setStatus ={SetStatus} remove={RemoveTask} status={x.status} value={x.text}/> </li>);
    // this hook waits for the final value of the state (asynchronus)
    
    // this function updates the state directly
    function UpdateList(t){
        setTask([...tasks,{id:Date.now(),text:t,status:false}]);
    }
    function RemoveTask(k){
        setTask(tasks.filter((x) => x.id != k));
        console.log(JSON.parse(localStorage.getItem("Update")))
    }
    function SetStatus(i,s){
        setTask(tasks.map((task) => task.id == i ? {...task,status:s}: task));
        console.log(JSON.parse(localStorage.getItem("Update")))
    }
    useEffect( () =>{
        localStorage.setItem("Update", JSON.stringify(tasks));
        console.log(localStorage.getItem("Update"));
      } , [tasks])
    return(
    <>
        <CreateTask theme={props.theme} list={tasks} change={UpdateList}/>
        <ul className="mt-8">
            {spreadTasks}
        </ul>
    </>
    )
}