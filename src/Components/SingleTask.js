import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 function SingleTask({ task, doneTask, handleDelete}) {
    const {id, text, done } = task;
    const handleClick = () => {
        doneTask(id);
      };
      const handleDeleteClick = () => {
        handleDelete(id);
      };
      return (
        <Card.Body>
          <div style={{ display: 'flex', marginLeft: '10px'}}>
          <Card.Title
          style={{
            textDecoration: done ? 'line-through' : 'none', cursor: 'pointer',  
          }}
          onClick={handleClick}
        >
          {text}
          </Card.Title>
         
          </div>
         
          <div style={{display: 'flex',gap: '10px',justifyContent: 'flex-start',marginTop: '20px',marginLeft: '10px',fontWeight: 'normal' }}>
          <label>
          <input
            type="checkbox"
            checked={done}
            onChange={handleClick}
            style={{ marginRight: '8px' }}
          />
          done
          </label>
          </div>
           
          <div style={{ display: 'flex',marginTop:'20px', marginLeft: '10px'}}>
              <span style={{ fontWeight: 'normal' }}>{task.date.toLocaleDateString('en-US', { day: 'numeric' })}</span>
            </div>
            <div style={{ display: 'flex',marginTop:'20px', marginLeft: '10px'}}>
              <span style={{ fontWeight: 'normal' }}>{task.date.toLocaleDateString('en-US', { month: 'long' })}</span>
            </div>
            <div style={{ display: 'flex',marginTop:'20px', marginLeft: '10px'}}>
              <span style={{ fontWeight: 'normal' }}>{task.date.toLocaleDateString('en-US', { year: 'numeric' })}</span>
            </div>
            
          
     
      



        <div style={{display: "flex", gap: "10px" ,justifyContent:"flex-start", marginTop:"30px"}}>
        <Button variant="danger" onClick={handleDeleteClick}>
         Delete
        </Button>
        </div>

       
        </Card.Body>
      );
}
export default SingleTask;