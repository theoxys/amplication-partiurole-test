import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationMemberTitle } from "../organizationMember/OrganizationMemberTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="ImageUrl" source="imageUrl" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organizationMembers.id"
          reference="OrganizationMember"
          label="Organization Members"
        >
          <SelectInput optionText={OrganizationMemberTitle} />
        </ReferenceInput>
        <TextInput label="Owner Id" source="ownerId" />
      </SimpleForm>
    </Create>
  );
};
