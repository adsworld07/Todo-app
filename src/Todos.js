import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container"style={mystyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0?"No Todos to display":
    props.todos.map((todos) => {
        return (<Todo todos={todos} key={todos.sno} onDelete={props.onDelete} />
          
        )
           })
      }
    </div>
  )

}
