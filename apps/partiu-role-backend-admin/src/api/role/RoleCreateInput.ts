import { OrganizationMemberWhereUniqueInput } from "../organizationMember/OrganizationMemberWhereUniqueInput";

export type RoleCreateInput = {
  name?: Array<"Permission1" | "Permission2">;
  organizationMembers?: OrganizationMemberWhereUniqueInput | null;
  permission?: string | null;
};
