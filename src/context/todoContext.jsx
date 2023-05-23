import React, { createContext, useState } from "react";
import  PropTypes from "prop-types";


const Context = createContext(null);

const Provider =  ( { children } ) =>  {


    const [todos, setTodos] = useState([]);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const checkboxRef = React.useRef( false );
    const todoRef = React.useRef(null);

    // const filteredTodos = (todos, type = "all") => {
      
    //   if (type === "completed") {
    //     return todos.filter((item) => item.completed);
    //   } else if (type === "uncompleted") {
    //     return todos.filter((item) => !item.completed);
    //   } else {
    //     return todos;
    //   }
    // };

    const saveTodo = (evt) => {
        evt.preventDefault();

        const todoValue = todoRef.current.value.trim(); 


        const newTodo = {
            id: todos[todos.length - 1]?.id + 1 || 1,
            todo_value: todoValue,
            // completed: checkboxRef,
        };

        if(selectedItem !== null){
            todos[selectedItem] = newTodo;
            setSelectedItem(null);
        }
        else {
            setTodos([...todos, newTodo]);
        }


        todoRef.current.value = "";
        todoRef.current.focus();
    };

    // const handleCheckbox = (id) => {
    //     if( checkboxRef )
    //     {
    //      return   checkboxRef = false;
    //     }
    //     else {
    //      return    checkboxRef = true;
    //     }
    // };

    const handleDelete = (id) => {

        const filteredTodos = todos.filter(
            (todo) => todo.id !== id
        )

        setTodos([...filteredTodos]); 
    }

    const handleEdit = (index) => {

        setSelectedItem(index);
    }






    

    return (
        <Context.Provider
            value={{
                todos,
                setTodos,
                todoRef,
                checkboxRef,
                selectedItem,
                setSelectedItem,
                saveTodo,
                handleDelete,
                handleEdit,
            }}
        >    
              {children}
        </Context.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };