import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../todoCard/TodoCard";

const TodoList = () => {
  const { taskList, filter } = useSelector((store) => store);
  return (
    <div>
      {filter
        ? taskList.map((el) =>
            el.isDone ? null : (
              <div key={el.id}>
                <TodoCard task={el} />{" "}
              </div>
            )
          )
        : taskList.map((el) => (
            <div key={el.id}>
              <TodoCard task={el} />
            </div>
          ))}
    </div>
  );
};

export default TodoList;
