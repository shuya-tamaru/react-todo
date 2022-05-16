import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完のTODO</p>
      <ul>
        {todos.map((todos, index) => {
          return (
            <div key={todos} className="list-row">
              <li>{todos}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
