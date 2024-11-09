import Task from '../tasks/task.jsx'
import CreateTask from '../tasks/createTask.jsx'
import React , { useState , useEffect} from 'react'
localStorage.clear()
export default function TC(props){
    // check if the storage is void
    const [tasks,setTask] = useState(() => {
        const data = localStorage.getItem("Update");
        return data ? JSON.parse(data) : [];
    });
    // this variable spread the tasks into the tasks container
    let spreadTasks = tasks.map((x,index) => <li key = {index}><Task theme={props.theme} list ={tasks} remove={UpdateList} value={x} /></li>);
    // this hook waits for the final value of the state (asynchronus)
    useEffect( () =>{
      localStorage.setItem("Update", JSON.stringify(tasks));
      console.log(tasks)
    } , [tasks])
    // this function updates the state directly
    function UpdateList(l){
        setTask([...tasks,l]);
    }
    function RemoveTask(k){
        setTask([tasks.slice(0,tasks.indexOf(k) - 1) , tasks.slice(tasks.indexOf(k) + 1)]);
    }
    return(
    <>
        <CreateTask theme={props.theme} list={tasks} change={UpdateList}/>
        <ul className="mt-8">
            {spreadTasks}
        </ul>
    </>
    )
}