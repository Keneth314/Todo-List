import React from "react";
import { TodoContext } from './TodoContext'

function SearchTodo() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)
    // console.log(searchValue);

    const searchText = event => {
        setSearchValue(event.target.value);
        // console.log(event.target.value)
    }

    return (
        <>
            <input
                type="text"
                id="tarea"
                name="tarea"
                placeholder="Nombre de la tarea"
                value={searchValue}
                onChange={searchText}
            />
            {/* <button type="button" onClick={searchTodo}>Buscar</button> */}
        </>
    );
}

export { SearchTodo };
