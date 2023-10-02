import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cpf" source="cpf" />
        <TextInput label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
