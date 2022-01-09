import React from "react";

export default function Todo({ todos, onDelete }) {
  return (
    <>
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc} </p>
      <button
        className="btn btn-snm btn-danger"
        onClick={() => {
          onDelete(todos);
        }}
      >
        Delete
      </button>
      
      
      
    </div>
    <hr/>
    </>
  );
}
