import { Module } from "@nestjs/common";
import { OrganizationMemberModuleBase } from "./base/organizationMember.module.base";
import { OrganizationMemberService } from "./organizationMember.service";
import { OrganizationMemberController } from "./organizationMember.controller";
import { OrganizationMemberResolver } from "./organizationMember.resolver";

@Module({
  imports: [OrganizationMemberModuleBase],
  controllers: [OrganizationMemberController],
  providers: [OrganizationMemberService, OrganizationMemberResolver],
  exports: [OrganizationMemberService],
})
export class OrganizationMemberModule {}
