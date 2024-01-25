import React from "react";

function CreateTodoButton({allTodos, setAllTodos, searchValue, setSearchValue}){
  
  const addTodo = () => {

    // let nameTask = document.querySelector("#tarea").value
    // console.log(nameTask)

    if(searchValue === ""){return}
    if(allTodos.some(todo => todo.text === searchValue)){alert("Ya existe un todo"); setSearchValue(""); return;}

    const nuevaActividad = { text: searchValue, completed: false };
    const newTodos = [...allTodos, nuevaActividad]
    setAllTodos(newTodos)
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos))
    setSearchValue("")
  }

  // console.log(allTodos)

  return (
    <button type="button" onClick={addTodo}>Agregar tarea</button>
  );
}

export {CreateTodoButton}



// Solo puedes setear un string, 

const taskList = [
  { text: "Hacer la compra", completed: false },
  { text: "Hacer la presentación", completed: true },
  { text: "Hacer ejercicio", completed: false }
];

const stringTaskList = JSON.stringify(taskList) // '[{"text":"Hacer la compra","completed":false},{"text":"Hacer la presentación","completed":true},{"text":"Hacer ejercicio","completed":false}]'

// Solo puedes setear strings
localStorage.setItem("TaskList", stringTaskList) 

const parseTaskList = localStorage.getItem("TaskList") // '[{"text":"Hacer la compra","completed":false},{"text":"Hacer la presentación","completed":true},{"text":"Hacer ejercicio","completed":false}]'

JSON.parse(parseTaskList) 
// [
//   {
//       "text": "Hacer la compra",
//       "completed": false
//   },
//   {
//       "text": "Hacer la presentación",
//       "completed": true
//   },
//   {
//       "text": "Hacer ejercicio",
//       "completed": false
//   }
// ]

// Eliminas el elemento del localStorage
localStorage.removeItem("TaskList")