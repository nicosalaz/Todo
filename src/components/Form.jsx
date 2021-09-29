import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });

  const handleClick = (e) => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '' || document.getElementById("todo").value === "") {
      alert('El campo no puede estar vacio');
      return;
    }
    setTodos([...todos, todo]);
    document.getElementById("todo").value="";
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (pos) => {
    const campo = document.getElementById("todo");
    const newTodos = [...todos];
    if (campo.value.length !== 0) {
      newTodos.splice(pos, 1,todo);
      setTodos(newTodos);
      campo.value = "";
    }else{
      alert('El campo no puede estar vacio');
    }
    //console.log(pos);
    //console.log(todos[pos]);
    //campo.value=todos[pos].todo;

  };

  /*const handleUpdate = (e) => {
    const posicion = index;
    const newTodos = [...todos];
    newTodos.splice(posicion, 1,todo);
    setTodos(newTodos);
    document.getElementById("todo").value="";
    console.log(posicion);
    console.log(todos[posicion]);
  };
  <button id='btn-form-update' onClick={handleUpdate}>Modificar</button>
  */

  return (
    <>
      <form id="form" onSubmit={(e) => e.preventDefault()}>
        <label>Agregar tarea</label>
        <br />
        <input type='text' name='todo' id="todo" onChange={handleChange}></input>
        <button id="add" onClick={handleClick}>Agregar</button>
      </form>

      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );
};

export default Form;