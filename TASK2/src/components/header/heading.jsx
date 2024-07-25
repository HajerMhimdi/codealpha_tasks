import React from "react";

import UnpublishedRoundedIcon from "@mui/icons-material/UnpublishedRounded";
import OfflinePinRoundedIcon from "@mui/icons-material/OfflinePinRounded";
import FlakyRoundedIcon from "@mui/icons-material/FlakyRounded";
import Tooltip from "@mui/material/Tooltip";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import "./style.css";

function Heading({ tasks, onSearch }) {
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const uncompletedTasks = tasks.filter((task) => !task.isCompleted).length;

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <section className="header">
        <div className="toDoTitle">To Do List</div>
        <div className="completedTasks">
          <FormControl variant="standard">
            <TextField
              className="search_field"
              type="search"
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </FormControl>
          <Tooltip title={"Uncompleted task"}>
            <div className="iconWrapper">
              <UnpublishedRoundedIcon className="completeTask" />
              <span className="completedText">{uncompletedTasks} </span>
            </div>
          </Tooltip>
          <Tooltip title={"Completed task"}>
            <div className="iconWrapper">
              <OfflinePinRoundedIcon className="completeTask" />
              <span className="completedText">{completedTasks} </span>
            </div>
          </Tooltip>
        </div>
      </section>
    </>
  );
}

export default Heading;
