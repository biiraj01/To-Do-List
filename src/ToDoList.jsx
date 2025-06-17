import React, {useState} from "react"

function ToDoList(){
    const[tasks,setTask] = useState(["Wake Up","Have breakfast","Go to college","Code"]);
    const[newTask,setNewTask] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
       if(newTask.trim() !== ""){
         setTask(t=>[...t,newTask]);
        setNewTask("");
       }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=>i!== index);
        setTask(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =[updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] =[updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
        <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="container">
                <input type="text" 
                value={newTask}
                 placeholder="Enter your Task Here"
                 onChange={handleInputChange}/>
                <button className="add-task" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                    <button className="delete-task" onClick={()=>deleteTask(index)}>❌</button>
                    <button className="move-task-up" onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className="move-task-down" onClick={()=>moveTaskDown(index)}>👇</button>
                    </li>   
                )}
            </ol>
        </div>
    </>
    )
}

export default ToDoList