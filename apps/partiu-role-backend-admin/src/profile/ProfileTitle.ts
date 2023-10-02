import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "cpf";

export const ProfileTitle = (record: TProfile): string => {
  return record.cpf?.toString() || String(record.id);
};
