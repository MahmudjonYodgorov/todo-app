import  { useContext } from 'react'
import { Context } from "../../context/todoContext";

const Table = () => {

    const ctx = useContext( Context ); 
  return (
    <>
      <ul className="list-group">
        {ctx.todos.length > 0 &&
          ctx.todos.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div>
                {index + 1}. &nbsp;
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="todo_check"
                  ref={ctx.checkboxRef}
                //   defaultChecked={item.completed}
                //   onChange={() => ctx.handleCheckbox(item.id)}
                />
                &nbsp;
                <strong className={item.completed ? "line" : ""}>
                  {item.todo_value}
                </strong>
              </div>
              <div>
                <button
                  className="btn btn-success me-3"
                  type="button"
                  onClick={() => ctx.handleEdit(item)}
                >
                  ✎
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => ctx.handleDelete(item.id)}
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Table;
