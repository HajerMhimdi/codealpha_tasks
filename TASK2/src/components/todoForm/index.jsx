import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Tooltip from "@mui/material/Tooltip";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";

import "./style.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Work", "Education", "Hobbies", "Fitness", "Home", "Shopping"];

function getStyles(name, listType, theme) {
  return {
    fontWeight:
      listType.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Index({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const theme = useTheme();
  const [listType, setListType] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = "You should add a title !";
    if (!description) newErrors.description = "You should add a description !";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      handleAddTask(title, description, listType);
      setTitle("");
      setDescription("");
      setListType("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeType(event) {
    const {
      target: { value },
    } = event;
    setListType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  }

  return (
    <>
      <div className="container">
        <div className="form_title">New Task: Plan Your Next Step</div>
        <form onSubmit={handleSubmit} className="addTask">
          <TextField
            required
            id="outlined-required"
            label="Title"
            onChange={onChangeTitle}
            value={title}
            className="task_container"
          />
          <TextField
            required
            id="outlined-required"
            label="Description"
            onChange={onChangeDescription}
            value={description}
            className="task_container"
          />
          {/* {errors.description && <div className="error-message">{errors.description}</div>} */}
          <FormControl className="task_container">
            <InputLabel id="demo-multiple-name-label">Category</InputLabel>
            <Select
              required
              labelId="demo-multiple-name-label"
              id="outlined-required"
              value={listType}
              onChange={onChangeType}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, listType, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Tooltip title={"Add New Task"}>
            <div className="btn-container">
              <Button
                variant="contained"
                type="submit"
                className="submitButton"
              >
                <AddTaskIcon />
              </Button>
            </div>
          </Tooltip>
        </form>
      </div>
    </>
  );
}

export default Index;
