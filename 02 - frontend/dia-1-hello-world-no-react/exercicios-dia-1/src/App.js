import './App.css';

const tasks = ['tarefa 1', 'tarefa 2', 'tarefa 3', 'tarefa 4'];

const Task = (value) => {
  return (
    <li> {value} </li>
  );
};

function App() {
  return (
    <div>
      {tasks.map((task) => Task(task))}
    </div>
  );
}

export default App;
