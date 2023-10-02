import { OrganizationMember } from "../organizationMember/OrganizationMember";

export type Organization = {
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  organizationMembers?: OrganizationMember | null;
  ownerId: string;
  updatedAt: Date;
};
