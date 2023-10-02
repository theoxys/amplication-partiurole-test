import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type OrganizationMemberUpdateInput = {
  organizationId?: OrganizationWhereUniqueInput | null;
  roleId?: RoleWhereUniqueInput | null;
  userId?: string | null;
};
