import { StringFilter } from "../../util/StringFilter";
import { OrganizationMemberWhereUniqueInput } from "../organizationMember/OrganizationMemberWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  organizationMembers?: OrganizationMemberWhereUniqueInput;
  permission?: StringNullableFilter;
};
