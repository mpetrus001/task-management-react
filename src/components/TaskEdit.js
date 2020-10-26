import React from "react";
import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";

const TaskEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="description" />
        <SelectInput
          source="status"
          choices={[
            { id: "OPEN", name: "Open" },
            { id: "IN_PROGRESS", name: "In Progress" },
            { id: "DONE", name: "Done" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default TaskEdit;
