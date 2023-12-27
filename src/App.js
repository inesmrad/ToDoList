import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import React, { useState } from 'react';
import AddTask from './Components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css'


const list = [
  { id: "0", text: "Apply for US Visa", done: false, date: new Date() },
  { id: "1", text: "Eat Healthy", done: false, date: new Date() },
  { id: "2", text: "Go to the gym", done: false, date: new Date() },
  ];
  
function App() {
  const [listOfTasks, setList] = useState(list);
  const doneTask = (taskId) => {
    const updatedList = listOfTasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
    });
    setList(updatedList);
  };

  const deleteTask = (taskId) => {
    const filteredList = listOfTasks.filter((task) => task.id !== taskId);
    setList(filteredList);
  };

  const add = (task) => {
    const addedList = [...listOfTasks, task];
    setList(addedList);
  };

  return (
    <div className="app">
       <AddTask add={add} />
     <List tasks= {listOfTasks} deleteTask={deleteTask} doneTask={doneTask}/>
    </div>
  );
}

export default App;
