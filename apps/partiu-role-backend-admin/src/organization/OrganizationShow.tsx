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

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="ImageUrl" source="imageUrl" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Organization Members"
          source="organizationmember.id"
          reference="OrganizationMember"
        >
          <TextField source={ORGANIZATIONMEMBER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Owner Id" source="ownerId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
