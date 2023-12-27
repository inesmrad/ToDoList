import React from 'react'
import SingleTask from './SingleTask';
import Card from 'react-bootstrap/Card';
 function List({tasks,deleteTask, doneTask}) {
  return (
    <div style={{ display:"flex", flexDirection:"row",gap:"20px",justifyContent:"space-around",alignItems:"center", paddingTop: "130px",}}>
      {tasks.map(task => (
         <Card
           key={task.id}
           style={{
           width: '18rem', 
           height: '327px',
           backgroundColor: 'white',
           margin: '10px',
           border: '1px solid #ddd',
           borderRadius: '10px',
           paddingTop: '10px'
         }}
       >
        
          <Card.Title>
          
            <SingleTask task={task} doneTask={doneTask} handleDelete={deleteTask}/>
            
          </Card.Title>
        </Card>
      ))}
    </div>
  );
}
export default List;