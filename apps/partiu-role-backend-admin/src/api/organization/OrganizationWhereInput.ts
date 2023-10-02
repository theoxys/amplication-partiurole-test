import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationMemberWhereUniqueInput } from "../organizationMember/OrganizationMemberWhereUniqueInput";

export type OrganizationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  organizationMembers?: OrganizationMemberWhereUniqueInput;
  ownerId?: StringFilter;
};
