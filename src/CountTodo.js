import React from "react";
import { TodoContext } from './TodoContext'

function CountTodo() {
    const {
        checkTodo,
        totalTodo,
    } = React.useContext(TodoContext)
    return (

        checkTodo === totalTodo && checkTodo !== 0
            ? <>
                <p>¡Complentaste todas tus actividades! 🥳🎉</p>
                <p>Realizaste <b>{checkTodo}</b> tareas de <b>{totalTodo}</b> </p>
            </>

            : <p>Realizaste <b>{checkTodo}</b> tareas de <b>{totalTodo}</b> </p>

    );

}


export { CountTodo }