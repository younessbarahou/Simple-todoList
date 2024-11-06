import Task from '../tasks/task.jsx'
import CreateTask from '../tasks/createTask.jsx'
export default function TC(props){
    // list of tasks
    let todos = ['one','two','three','four'];
    // this variable spread the tasks into the tasks container
    let spreadTasks = todos.map((x,index) => <li key = {index}><Task theme={props.theme} value={x} /></li>);
    return(
        <>
        <CreateTask theme={props.theme}/>
    <ul className="mt-5">
    {spreadTasks}
    </ul>
    </>
    )
}