/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoleWhereUniqueInput } from "./RoleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RoleUpdateInput } from "./RoleUpdateInput";

@ArgsType()
class UpdateRoleArgs {
  @ApiProperty({
    required: true,
    type: () => RoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoleWhereUniqueInput)
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  where!: RoleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RoleUpdateInput,
  })
  @ValidateNested()
  @Type(() => RoleUpdateInput)
  @Field(() => RoleUpdateInput, { nullable: false })
  data!: RoleUpdateInput;
}

export { UpdateRoleArgs as UpdateRoleArgs };
