import React, {useState} from "react"

function ToDoList(){
    const[tasks,setTask] = useState(["Eat","take","wake"]);
    const[newTask,setNewTask] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){
        
    }

    return(
        <>
         <h1>To-Do-List</h1>
        <div className="to-do-list">

            <div className="container">
                <input type="text" 
                value={newTask}
                 placeholder="Enter your Task Here"
                 onChange={handleInputChange}/>
                <button className="add-task" onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                    <button className="delete-task" onClick={()=>deleteTask(index)}>❌</button>
                    <button className="move-task-up" onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className="move-task-down" onClick={()=>moveTaskDown(index)}>👇</button>
                    </li>   
                )}
            </ul>
        </div>
    </>
    )
}

export default ToDoList