import { OrganizationMember as TOrganizationMember } from "../api/organizationMember/OrganizationMember";

export const ORGANIZATIONMEMBER_TITLE_FIELD = "userId";

export const OrganizationMemberTitle = (
  record: TOrganizationMember
): string => {
  return record.userId?.toString() || String(record.id);
};
