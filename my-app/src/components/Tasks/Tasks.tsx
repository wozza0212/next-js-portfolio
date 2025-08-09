import { useState, ChangeEvent } from "react";
type Task = string;
type Tasks = string[];

const Tasks = () => {
  const [taskText, setTaskText] = useState<Task>("");
  const [tasks, setTasks] = useState<Tasks>([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateTaskText = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, taskText]);
  };

  console.log("tasks", tasks);

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Tasks;
