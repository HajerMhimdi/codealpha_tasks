import { useEffect, useState } from "react";

import Heading from "./components/header/heading.jsx";
import Index from "./components/todoForm/index.jsx";
import TaskList from "./components/todoList/TasksList.jsx";

const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getTasks() {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  function setSavedTasks(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(newTitle, newDescription, newType) {
    setSavedTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: newTitle,
        description: newDescription,
        listType: newType,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setSavedTasks(newTasks);
  }

  function CompleteTasksById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleSearch(text) {
    setSearchText(text);
  }

  const filteredTasks = tasks.filter(
    (task) => task.title.toLowerCase().includes(searchText.toLowerCase())
    // task.listType.some(type => type.toLowerCase().includes(searchText.toLowerCase()))
  );

  return (
    <>
      <Heading tasks={tasks} onSearch={handleSearch} />

      <Index handleAddTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTaskById}
        onComplete={CompleteTasksById}
      />
    </>
  );
}

export default App;
