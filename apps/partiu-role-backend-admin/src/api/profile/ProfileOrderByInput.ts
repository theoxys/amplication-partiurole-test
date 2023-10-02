import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  cpf?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
