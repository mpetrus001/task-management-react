import React from "react";
import {
  List,
  Datagrid,
  TextField,
  FunctionField,
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
        <FunctionField
          source="status"
          render={(record) =>
            `${statusFormatMap[record.status] ?? record.status}`
          }
        />
        <EditButton basePath="/tasks" />
        <DeleteButton basePath="/tasks" />
      </Datagrid>
    </List>
  );
};

export default TaskList;

const statusFormatMap = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
