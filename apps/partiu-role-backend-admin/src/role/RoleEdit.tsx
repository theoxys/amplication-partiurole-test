import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { OrganizationMemberTitle } from "../organizationMember/OrganizationMemberTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="name"
          source="name"
          choices={[
            { label: "Permission1", value: "Permission1" },
            { label: "Permission2", value: "Permission2" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="organizationMembers.id"
          reference="OrganizationMember"
          label="Organization Members"
        >
          <SelectInput optionText={OrganizationMemberTitle} />
        </ReferenceInput>
        <TextInput label="Permission" source="permission" />
      </SimpleForm>
    </Edit>
  );
};
