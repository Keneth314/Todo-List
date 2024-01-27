import React from "react"


function UseLocalStorage(itemName, itemInitialValue) {

  // CREAMOS EL ESTADO DEL LOCAL STORAGE
  const [item, setItem] = React.useState(itemInitialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)


  React.useEffect(() => {
    setTimeout(() => {
      try {
        // VALIDAR SI TENEMOS DATOS DEL ITEM EN EL LOCAL STORAGE
        const localStorageItem = localStorage.getItem(itemName) // Retorna un string

        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(itemInitialValue)) // Convierto a un string y lo seteo
          parsedItem = itemInitialValue
        }
        else {
          parsedItem = JSON.parse(localStorageItem) // Retorna un JSON
          setItem(parsedItem)
        }
        setLoading(false)

      }
      catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 100)
  }, [itemName, itemInitialValue])



  // FUNCION QUE ACTUALIZA EL LOCALSTORAGE Y EL ESTADO 
  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, setItem, updateItem, loading, error }
}

export {UseLocalStorage}



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
