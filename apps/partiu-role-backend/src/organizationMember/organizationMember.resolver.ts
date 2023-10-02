import * as graphql from "@nestjs/graphql";
import { OrganizationMemberResolverBase } from "./base/organizationMember.resolver.base";
import { OrganizationMember } from "./base/OrganizationMember";
import { OrganizationMemberService } from "./organizationMember.service";

@graphql.Resolver(() => OrganizationMember)
export class OrganizationMemberResolver extends OrganizationMemberResolverBase {
  constructor(protected readonly service: OrganizationMemberService) {
    super(service);
  }
}
