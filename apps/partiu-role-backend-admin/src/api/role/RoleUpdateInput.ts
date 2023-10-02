import { OrganizationMemberWhereUniqueInput } from "../organizationMember/OrganizationMemberWhereUniqueInput";

export type RoleUpdateInput = {
  name?: Array<"Permission1" | "Permission2">;
  organizationMembers?: OrganizationMemberWhereUniqueInput | null;
  permission?: string | null;
};
