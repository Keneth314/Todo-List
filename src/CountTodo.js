function CountTodo({ checkTodo, totalTodo }) {

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