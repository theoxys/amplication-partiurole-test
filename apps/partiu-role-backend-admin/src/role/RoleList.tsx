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

export const RoleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Roles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
