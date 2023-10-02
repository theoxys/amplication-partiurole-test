import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationMemberService } from "./organizationMember.service";
import { OrganizationMemberControllerBase } from "./base/organizationMember.controller.base";

@swagger.ApiTags("organizationMembers")
@common.Controller("organizationMembers")
export class OrganizationMemberController extends OrganizationMemberControllerBase {
  constructor(protected readonly service: OrganizationMemberService) {
    super(service);
  }
}
