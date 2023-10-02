import { OrganizationMember } from "../organizationMember/OrganizationMember";

export type Role = {
  createdAt: Date;
  id: string;
  name?: Array<"Permission1" | "Permission2">;
  organizationMembers?: OrganizationMember | null;
  permission: string | null;
  updatedAt: Date;
};
