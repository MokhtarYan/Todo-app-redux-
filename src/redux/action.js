import { ADD, COMPLETE, DELETE, EDIT_TASK, FILTER_TASK } from "./actionTypes";

export const Delete = (taskID) => {
  return {
    type: DELETE,
    payload: taskID,
  };
};
export const Complete = (idTask) => {
  return {
    type: COMPLETE,
    payload: idTask,
  };
};
export const Add = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo,
  };
};
export const Edit = (editedTodo) => {
  return {
    type: EDIT_TASK,
    payload: editedTodo,
  };
};
export const Filter = () => {
  return {
    type: FILTER_TASK,
  };
};
