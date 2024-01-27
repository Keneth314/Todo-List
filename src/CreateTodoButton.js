import React from "react";
import { TodoContext } from './TodoContext'

function CreateTodoButton() {
  const {
    allTodos,
    setAllTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  const addTodo = () => {

    // let nameTask = document.querySelector("#tarea").value
    // console.log(nameTask)

    if (searchValue === "") { return }
    if (allTodos.some(todo => todo.text === searchValue)) { alert("Ya existe un todo"); setSearchValue(""); return; }

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

export { CreateTodoButton }