import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { RoleTitle } from "../role/RoleTitle";

export const OrganizationMemberEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
