import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
type Task = {
  task: string;
  id?: string;
};
type Tasks = Task[];

let count = 0;
const Tasks = () => {
  const [task, setTaskText] = useState<Task>({ task: "", id: "" });
  const [tasks, setTasks] = useState<Tasks>([]);
  const [completedTasks, setCompletedTasks] = useState<Tasks>([]);

  const updateTaskText = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText({ task: e.target.value, id: uuidv4() });
  };

  const addTask = () => {
    setTasks([...tasks, task]);
  };

  const completeTask = (completedTask: Task) => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  };

  const deleteTask = (task: Task) => {
    console.log(task);
    setCompletedTasks(completedTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={task.task} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {tasks.map((task: Task) => {
          return (
            <div key={task.id} onClick={completeTask(task)}>
              <h3>{task.task}</h3>
            </div>
          );
        })}
      </div>
      <div className="completedTasks">
        <h1>Completed Tasks</h1>
        {completedTasks.map((finishedTask: Task) => {
          return (
            <div key={finishedTask.id}>
              <h3>{finishedTask.task} </h3>
              <span
                onClick={() => deleteTask(finishedTask)}
                className="deleteTask"
              >
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
