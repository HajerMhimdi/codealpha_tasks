import React from 'react';
import TaskIcon from '@mui/icons-material/Task';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';

import './style.css';


function Task({ task, onDelete, onComplete }) {

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className={`task ${task.isCompleted ? 'task-completed' : ''}`}>
      <div className="task-content">
      <Tooltip title={task.title}>
        <div className="rowDirection">
          <h2 className="titleStyle"> {truncateText(task.title, 50)}</h2>
        </div>
        </Tooltip>
        <Tooltip title={task.description}>
        <div className="rowDirection">
          <h5 className="descriptionStyle">Description: {truncateText(task.description, 50)}</h5>
        </div>
        </Tooltip>
      </div>
      <div className="task-actions">
        {task.isCompleted ? (
          <Tooltip title={'Uncheck Task'}>
            <TaskIcon className='checkedButton' onClick={() => onComplete(task.id)} />
          </Tooltip>
        ) : (
          <Tooltip title={'Check Task'}>
            <TaskIcon className='notCheckedButton' onClick={() => onComplete(task.id)} />
          </Tooltip>
        )}
        <Tooltip title={'Delete Task'}>
          <DeleteForeverIcon className="deleteButton" onClick={() => onDelete(task.id)} />
        </Tooltip>
      </div>
    </div>
  )

}

export default Task
