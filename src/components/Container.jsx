// useState se utiliza para actualizar el estado, lo primero que se 
// hace es importar este hook desde react. 

import React, { useState } from "react";

// importamos los demás componentes de react que necesitamos en este componente. 

import TaskList from "../components/TaskList";
import FormTodo from "../components/FormTodo";

// useState recibe un estado inicial (list) y 
// devuelve el estado actual y la funcion que actualiza el 
// estado(setList) En este caso el valor inicial es un array vacío 

const Container = () => {
const [list, setList] = useState([]);

// llamamos a handleAddItem y a este objeto le pasamos como parámetro 
// addItem el cual recibe como argumento las propiedades del objeto ya 
// definida en FormTodo  


const handleAddItem = addItem => {
setList([...list, addItem]); 
};

// En esta sección se escribe el código que se va a renderizar en el html 

return (
<div>

<FormTodo handleAddItem={handleAddItem} />

<TaskList list={list} setList={setList} />
</div>
);
};

// al final se exporta a container 

export default Container;