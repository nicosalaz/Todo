import React from 'react';

const Todo = ({ todo, index, deleteTodo, updateTodo }) => {
  return (
    <>
      <div className='list'>
        <table>
          <tr>
            <td>
              <input type="checkbox" name="check" id="check" />
            </td>
            <td>
              <h3>{todo}</h3>
            </td>
            <td>
              <button className='btn-delete' onClick={() => deleteTodo(index)}>
              x
              </button>
            </td>
            <td>
              <button className='btn-update' onClick={() => updateTodo(index)}>
              update
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Todo;