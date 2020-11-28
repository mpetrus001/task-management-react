import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const TaskList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <StatusField source="status" />
        <EditButton basePath="/tasks" />
        <DeleteButton basePath="/tasks" />
      </Datagrid>
    </List>
  );
};

export default TaskList;

const StatusField = ({ record = {} }) => {
  const statusFormatMap = {
    OPEN: "Open",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
  };
  // display the raw prop in case the status hasn't been mapped to a format
  return <span>{statusFormatMap[record.status] ?? record.status}</span>;
};
