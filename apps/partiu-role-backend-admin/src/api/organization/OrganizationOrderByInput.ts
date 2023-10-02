import { SortOrder } from "../../util/SortOrder";

export type OrganizationOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  organizationMembersId?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
