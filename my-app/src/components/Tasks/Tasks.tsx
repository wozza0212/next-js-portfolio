import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
type Task = {
  task: string;
  id?: string;
};
type Tasks = Task[];

let count = 0;
const Tasks = () => {
  const [taskText, setTaskText] = useState<Task>({ task: "", id: "" });
  const [tasks, setTasks] = useState<Tasks>([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateTaskText = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText({ task: e.target.value, id: uuidv4() });
  };

  const addTask = () => {
    setTasks([...tasks, taskText]);
  };

  console.log("tasks", tasks);

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText.task} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {tasks.map((task: Task) => {
          return (
            <div key={task.id}>
              <h3>{task.task}</h3>
              <h3>{task.id}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
