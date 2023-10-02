import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationMembersId?: SortOrder;
  permission?: SortOrder;
  updatedAt?: SortOrder;
};
