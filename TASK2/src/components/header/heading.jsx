import React from 'react';

import UnpublishedRoundedIcon from '@mui/icons-material/UnpublishedRounded';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';import RuleFolderRoundedIcon from '@mui/icons-material/RuleFolderRounded';
import FlakyRoundedIcon from '@mui/icons-material/FlakyRounded';
import Tooltip from '@mui/material/Tooltip';

import './style.css';

function Heading({ tasks }) {
  const NumberOfTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const uncompletedTasks = tasks.filter(task => !task.isCompleted).length;

  return (
    <>
      <section className="header">
        <div className="toDoTitle">
          To Do List
        </div>
        <div className="completedTasks">
          <Tooltip title={'Created task'}>
            <div className="iconWrapper">
              <FlakyRoundedIcon className="createTasks" />
              <span className="notification">{NumberOfTasks}</span>
            </div>
          </Tooltip>
          <Tooltip title={'Uncompleted task'}>
            <div className="iconWrapper" >
              <UnpublishedRoundedIcon className="completeTask" />
              <span className="completedText">{uncompletedTasks} </span>
            </div>
          </Tooltip>
          <Tooltip title={'Completed task'}>
            <div className="iconWrapper" >
              <OfflinePinRoundedIcon className="completeTask" />
              <span className="completedText">{completedTasks} </span>
            </div>
          </Tooltip>
        </div>
      </section>
    </>
  );
}


export default Heading
