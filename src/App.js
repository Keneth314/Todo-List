import './App.css';
import React from 'react';
import "./style.css";
import { TodoList } from './TodoList';
import { SearchTodo } from './SearchTodo';
import { CreateTodoButton } from './CreateTodoButton';
import { CountTodo } from './CountTodo';
import { TodoItem } from './TodoItem';


// const todos = [
//   { text: "Hacer la compra", completed: false },
//   { text: "Hacer la presentación", completed: true },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Leer un libro", completed: false },
//   { text: "Enviar correos electrónicos", completed: true },
//   { text: "Aprender un nuevo lenguaje de programación", completed: false },
//   { text: "Organizar el escritorio", completed: true },
//   { text: "Realizar llamadas telefónicas", completed: false },
//   { text: "Ver una película", completed: false },
//   { text: "Planificar las vacaciones", completed: true }
// ];
// const todos = []

// Creamos un Custom Hook llamado (useLocalStorage)
// Todo Custoom Hook tiene el prefijo "use"

function useLocalStorage(itemName, itemInitialValue) {

  // VALIDAR SI TENEMOS DATOS DEL ITEM EN EL LOCAL STORAGE
  const localStorageItem = localStorage.getItem(itemName) // Retorna un string

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(itemInitialValue)) // Convierto a un string y lo seteo
    parsedItem = itemInitialValue
  }
  else {
    parsedItem = JSON.parse(localStorageItem) // Retorna un JSON
  }

  // CREAMOS EL ESTADO DEL LOCAL STORAGE
  const [item, setItem] = React.useState(parsedItem)

  // FUNCION QUE ACTUALIZA EL LOCALSTORAGE Y EL ESTADO 
  const updateItem = (newItem) => { 
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, setItem, updateItem]
}


function App() {



  // const [allTodos, setAllTodos] = React.useState(parsedTodos)
  const [allTodos, setAllTodos, updateTodos] = useLocalStorage("TODOS_V1", [])

  const [searchValue, setSearchValue] = React.useState('');

  let checkTodo = allTodos.filter(todo => todo.completed).length
  let totalTodo = allTodos.length
  const searchTodos = allTodos.filter(todos => todos.text.toLowerCase().includes(searchValue.toLowerCase()))


 

  const onComplete = (keyTodo) => {
    let auxAllTodos = [...allTodos]
    // console.log(auxAllTodos)
    let posTodo = auxAllTodos.findIndex(todo => todo.text == keyTodo)
    // console.log(posTodo)
    auxAllTodos[posTodo].completed = !auxAllTodos[posTodo].completed
    updateTodos(auxAllTodos)
    // console.log(auxAllTodos)
  }

  const onDelete = (keyTodo) => {
    let auxAllTodos = allTodos.filter(todo => todo.text != keyTodo)
    updateTodos(auxAllTodos)
  }

  // console.log(searchValue);
  // console.log(allTodos)
  // console.log(searchTodos)




  return (
    <>
      <p id="allTodoComplete"></p>
      <CountTodo checkTodo={checkTodo} totalTodo={totalTodo} />
      {/* <form> */}
      <SearchTodo searchValue={searchValue} setSearchValue={setSearchValue} />
      <CreateTodoButton
        allTodos={allTodos} setAllTodos={setAllTodos}
        searchValue={searchValue} setSearchValue={setSearchValue}
      />
      {/* </form> */}

      {/* <CreateTodo/> */}
      <TodoList>
        {searchTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)} />
        ))}
      </TodoList>

    </>

  );
}

export default App;
