import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
function AddTask({ add }) {
    const [newTask, setNewTask] = useState({
      id: "", 
      text: "",
      done: false,
      date: new Date(),
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewTask({
        ...newTask,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      add(newTask);
      setNewTask({
        id: "", 
        text: "",
        done: false,
        date: new Date(),
      });
    };
  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '400px', paddingTop: '90px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <input
              type="text"
              name="text"
              value={newTask.text}
              onChange={handleChange}
              placeholder="Enter Your Task"
              style={{ width: '600px', height: '35px', fontSize: '15px', paddingLeft: '10px' }}
            />
          </div>
          <div>
            <Button type="submit" variant="primary" style={{ width: '60px', height: '30px', fontSize: '10px' }}>ADD</Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default AddTask;
  