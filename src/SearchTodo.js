import React from "react";

function SearchTodo({searchValue, setSearchValue}) {

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
