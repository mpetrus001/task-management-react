import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const TaskCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="title" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
};

export default TaskCreate;
