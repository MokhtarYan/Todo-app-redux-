import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/addTask/AddTask";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="todos">
        <h1 className="title">Today's Plan!</h1>
        <AddTask />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
