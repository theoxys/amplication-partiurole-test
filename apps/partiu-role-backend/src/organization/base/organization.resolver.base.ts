/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateOrganizationArgs } from "./CreateOrganizationArgs";
import { UpdateOrganizationArgs } from "./UpdateOrganizationArgs";
import { DeleteOrganizationArgs } from "./DeleteOrganizationArgs";
import { OrganizationCountArgs } from "./OrganizationCountArgs";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationFindUniqueArgs } from "./OrganizationFindUniqueArgs";
import { Organization } from "./Organization";
import { OrganizationMember } from "../../organizationMember/base/OrganizationMember";
import { OrganizationService } from "../organization.service";
@graphql.Resolver(() => Organization)
export class OrganizationResolverBase {
  constructor(protected readonly service: OrganizationService) {}

  async _organizationsMeta(
    @graphql.Args() args: OrganizationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Organization])
  async organizations(
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Organization, { nullable: true })
  async organization(
    @graphql.Args() args: OrganizationFindUniqueArgs
  ): Promise<Organization | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Organization)
  async createOrganization(
    @graphql.Args() args: CreateOrganizationArgs
  ): Promise<Organization> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organizationMembers: args.data.organizationMembers
          ? {
              connect: args.data.organizationMembers,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Organization)
  async updateOrganization(
    @graphql.Args() args: UpdateOrganizationArgs
  ): Promise<Organization | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organizationMembers: args.data.organizationMembers
            ? {
                connect: args.data.organizationMembers,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Organization)
  async deleteOrganization(
    @graphql.Args() args: DeleteOrganizationArgs
  ): Promise<Organization | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => OrganizationMember, {
    nullable: true,
    name: "organizationMembers",
  })
  async resolveFieldOrganizationMembers(
    @graphql.Parent() parent: Organization
  ): Promise<OrganizationMember | null> {
    const result = await this.service.getOrganizationMembers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}