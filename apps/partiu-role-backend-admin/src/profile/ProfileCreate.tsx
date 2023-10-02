import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cpf" source="cpf" />
        <TextInput label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
