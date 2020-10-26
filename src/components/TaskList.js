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
        <TextField source="status" />
        <EditButton basePath="/tasks" />
        <DeleteButton basePath="/tasks" />
      </Datagrid>
    </List>
  );
};

export default TaskList;
