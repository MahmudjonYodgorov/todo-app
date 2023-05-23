// import React from 'react'
// import { useContext } from "react";
// import { Context } from "../../context/todoContext";
import Form from "../Form";
import Table from "../Table";

const Todo = () => {

    // const ctx = useContext( Context );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 my-5">
            <Form />
            <h1 className="text-center mt-3">Todo List</h1>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
