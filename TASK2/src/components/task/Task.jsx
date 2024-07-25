import React from "react";
import TaskIcon from "@mui/icons-material/Task";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Tooltip from "@mui/material/Tooltip";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

import "./style.css";

function Task({ task, onDelete, onComplete }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div className={`task ${task.isCompleted ? "task-completed" : ""}`}>
      <div className="task-content">
        <div className="type_container">
      {task.listType == 'Home' ?
        <HomeRoundedIcon className="iconType"/>
          :
          task.listType == 'Education' ?
        <AutoStoriesRoundedIcon className="iconType"/>
          :
          task.listType == 'Hobbies' ?
          <ColorLensRoundedIcon className="iconType"/>
          :
          task.listType == 'Fitness' ?
          <FitnessCenterRoundedIcon className="iconType"/>
          :
          task.listType == 'Work' ?
          <EngineeringRoundedIcon className="iconType"/>
          :
          task.listType == 'Shopping' ?
          <LocalGroceryStoreRoundedIcon className="iconType"/>
          :
          <DashboardRoundedIcon className="iconType"/>
          }
          <h5 className="listType">{task.listType}</h5>
        </div>


        <Tooltip title={task.title}>
          <div className="rowDirection">
            <h2 className="titleStyle"> {truncateText(task.title, 50)}</h2>
          </div>
        </Tooltip>
        <Tooltip title={task.description}>
          <div className="rowDirection">
            <h5 className="descriptionStyle">
              Description: {truncateText(task.description, 50)}
            </h5>
          </div>
        </Tooltip>
      </div>
      <div className="task-actions">
        {task.isCompleted ? (
          <Tooltip title={"Uncheck Task"}>
            <TaskIcon
              className="checkedButton"
              onClick={() => onComplete(task.id)}
            />
          </Tooltip>
        ) : (
          <Tooltip title={"Check Task"}>
            <TaskIcon
              className="notCheckedButton"
              onClick={() => onComplete(task.id)}
            />
          </Tooltip>
        )}
        <Tooltip title={"Delete Task"}>
          <DeleteForeverIcon
            className="deleteButton"
            onClick={() => onDelete(task.id)}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default Task;
