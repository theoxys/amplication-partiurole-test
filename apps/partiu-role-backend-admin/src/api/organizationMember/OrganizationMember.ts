import { Organization } from "../organization/Organization";
import { Role } from "../role/Role";

export type OrganizationMember = {
  createdAt: Date;
  id: string;
  organizationId?: Organization | null;
  roleId?: Role | null;
  updatedAt: Date;
  userId: string | null;
};
