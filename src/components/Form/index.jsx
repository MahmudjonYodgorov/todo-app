// import React from 'react'
import { useContext } from "react";
import { Context } from "../../context/todoContext";


const Form  = () => {

    const ctx = useContext( Context );

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={(evt) => ctx.saveTodo(evt)}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="todo"
                ref={ctx.todoRef}
                defaultValue={ctx.selectedItem?.todo_value}
                placeholder="Add todo"
              />
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => ctx.filteredTodos(ctx.todos, "all")}
          >
            All
          </button>
          <button
            className="btn btn-primary mx-3"
            type="button"
            onClick={() => ctx.filteredTodos(ctx.todos, "completed")}
          >
            Completed
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => ctx.filteredTodos(ctx.todos, "uncompleted")}
          >
            Uncompleted
          </button>
        </div>
      </div>
    </>
  );
}

export default Form; 
