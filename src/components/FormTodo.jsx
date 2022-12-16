import React, { useState } from "react";

// FomTodo es un componente que acepta un solo argumento que sera props
// es decir unas propiedaddes 

const FormTodo = props => {
  const { handleAddItem } = props; 

// nuevamente tenemos el useState para actualizar el estado description
//creamos el evento dentro del cual defimosmos el objeto handAddItem y sus propiedades 

  const [description, setDescription] = useState(""); 
//   handleAddItem es la clase que maneja el evento. preventdefault evita que la pagina se recargue cuando el evento se ejecuta 

  const handleSubmit = e => {
    e.preventDefault(); 
    handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
    });
    // setdescripcioin es la función que actualiza el estado. En este 
    //caso lo ejecuta luego del  veneto para obtener un string vacío 

    setDescription(""); 
};

// Ahora vamos a retornar el código html que es lo que se le retorna a la página. 
// dentro del html se llama a la funcionalidad que definimos en el componente.


return (
    // se le asigna el evento onSubmit al manejador de eventos handlSubmit 
    // que ya habíamos definido anteriormente en la funcionalidad del componente 

    <form onSubmit={handleSubmit}>
    
        <div className="todo-list">
        <div className="file-input">
        {/* Creamos en input para ingresar la información de las lista.  */}
            <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            {/* se añade el botón el cual mientras el input está en blanco,
            es decir sin description el botón no agrega nada a la lista,
            está desactivado.  */}

            <button
            className="button pink"
            disabled={description ? "" : "disabled"}
            >
            Add
            </button>
        </div>
        </div>
    </form>
);
};

export default FormTodo