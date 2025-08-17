"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task, Tasks } from "../helpers/types";
let count = 0;

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";
type StoredTasks = {
  tasks: Tasks;
  completedTasks: Tasks;
};

const storeTasks = (tasksMap: StoredTasks) => {
  localStorage?.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

const readStoredTasks = () => {
  if (typeof window !== "undefined") {
    const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)!);
    if (tasksMap?.tasks == undefined) {
      return { tasks: [], completedTasks: [] };
    }
    if (tasksMap.tasks !== undefined) {
      return tasksMap;
    }
  }
};

const Checklist = () => {
  const [task, setTaskText] = useState<Task>({ task: "", id: "" });
  const storedTasks = readStoredTasks();
  const [tasks, setTasks] = useState<Tasks>(storedTasks?.tasks!);
  const [completedTasks, setCompletedTasks] = useState<Tasks>(
    storedTasks?.completedTasks!
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });
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
        {tasks?.map((task: Task) => {
          return (
            <div key={task.id} onClick={completeTask(task)}>
              <h3>{task.task}</h3>
            </div>
          );
        })}
      </div>
      <div className="completedTasks">
        <h1>Completed Tasks</h1>
        {completedTasks?.map((finishedTask: Task) => {
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

export default Checklist;
