import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { RoleTitle } from "../role/RoleTitle";

export const OrganizationMemberCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationId.id"
          reference="Organization"
          label="OrganizationId"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="roleId.id" reference="Role" label="RoleId">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
