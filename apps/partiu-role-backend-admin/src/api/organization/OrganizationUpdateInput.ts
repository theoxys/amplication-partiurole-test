import { OrganizationMemberWhereUniqueInput } from "../organizationMember/OrganizationMemberWhereUniqueInput";

export type OrganizationUpdateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  organizationMembers?: OrganizationMemberWhereUniqueInput | null;
  ownerId?: string;
};
