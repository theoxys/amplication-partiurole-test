import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  cpf?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
