import { useState } from 'react';



function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const[tasks, setTasks ] = useState([]);


function handleSubmit(e){
   e.preventDefault();globalThis(tasks);
   setTasks([...tasks, inputValue]);
}
console.log(tasks);

  return (
   <>
   <h1>Todo List</h1>
   
     <form action="" onSubmit={handleSubmit}>
      <input type="text"
           value={inputValue}
           onChange={(e)=> setInputValue(e.target.value)}
      />
      <button type='submit'>Add Task</button>
     </form>

   <ul>
    {tasks.map((tasks, index) =>{
      return(
        <li key={index}>
          {tasks}
          
        </li>
      )
    })}
   </ul>

   </>
  );
  
     
}

export default Todolist;
