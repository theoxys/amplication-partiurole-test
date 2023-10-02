import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganizationMemberWhereInput = {
  id?: StringFilter;
  organizationId?: OrganizationWhereUniqueInput;
  roleId?: RoleWhereUniqueInput;
  userId?: StringNullableFilter;
};
