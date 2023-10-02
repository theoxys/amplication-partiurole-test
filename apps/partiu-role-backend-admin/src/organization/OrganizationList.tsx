import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATIONMEMBER_TITLE_FIELD } from "../organizationMember/OrganizationMemberTitle";

export const OrganizationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Organizations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
