import React, { createContext } from "react"
import { UseLocalStorage } from "./UseLocalStorage"

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
    // const [allTodos, setAllTodos] = React.useState(parsedTodos)
    const {
        item: allTodos,
        setItem: setAllTodos,
        updateItem: updateTodos,
        loading,
        error
    } = UseLocalStorage("TODOS_V1", [])

    const [searchValue, setSearchValue] = React.useState('');

    let checkTodo = allTodos.filter(todo => todo.completed).length
    let totalTodo = allTodos.length
    const searchTodos = allTodos.filter(todos => todos.text.toLowerCase().includes(searchValue.toLowerCase()))

    const onComplete = (keyTodo) => {
        let auxAllTodos = [...allTodos]
        // console.log(auxAllTodos)
        let posTodo = auxAllTodos.findIndex(todo => todo.text === keyTodo)
        // console.log(posTodo)
        auxAllTodos[posTodo].completed = !auxAllTodos[posTodo].completed
        updateTodos(auxAllTodos)
        // console.log(auxAllTodos)
    }

    const onDelete = (keyTodo) => {
        let auxAllTodos = allTodos.filter(todo => todo.text !== keyTodo)
        updateTodos(auxAllTodos)
    }

    // console.log(searchValue);
    // console.log(allTodos)
    // console.log(searchTodos)

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            allTodos,
            setAllTodos,
            searchValue,
            setSearchValue,
            checkTodo,
            totalTodo,
            searchTodos,
            onComplete,
            onDelete
        }}>
            {children}

        </TodoContext.Provider>
    );
};


export { TodoContext, TodoProvider }


