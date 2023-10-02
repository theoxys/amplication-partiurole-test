import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ORGANIZATIONMEMBER_TITLE_FIELD } from "../organizationMember/OrganizationMemberTitle";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="Organization Members"
          source="organizationmember.id"
          reference="OrganizationMember"
        >
          <TextField source={ORGANIZATIONMEMBER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Permission" source="permission" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
