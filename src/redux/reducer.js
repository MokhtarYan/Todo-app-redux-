import { ADD, COMPLETE, DELETE, EDIT_TASK, FILTER_TASK } from "./actionTypes";
const init = {
  taskList: [
    { id: Math.random(), task: "Learn HTML", isDone: true },
    { id: Math.random(), task: "Learn CSS", isDone: true },
    { id: Math.random(), task: "Learn Redux", isDone: false },
  ],
  filter: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE:
      return {
        ...state,
        taskList: state.taskList.filter((el) => el.id !== payload),
      };

    case COMPLETE:
      return {
        ...state,
        taskList: state.taskList.map((elt) =>
          elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
        ),
      };
    case ADD:
      return { ...state, taskList: [...state.taskList, payload] };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    case FILTER_TASK:
      return {
        ...state,
        filter: !state.filter,
      };
    default:
      return state;
  }
};
export default reducer;
