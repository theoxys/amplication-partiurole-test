/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OrganizationMember, Organization, Role } from "@prisma/client";

export class OrganizationMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationMemberCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationMemberCountArgs>
  ): Promise<number> {
    return this.prisma.organizationMember.count(args);
  }

  async findMany<T extends Prisma.OrganizationMemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationMemberFindManyArgs>
  ): Promise<OrganizationMember[]> {
    return this.prisma.organizationMember.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationMemberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationMemberFindUniqueArgs>
  ): Promise<OrganizationMember | null> {
    return this.prisma.organizationMember.findUnique(args);
  }
  async create<T extends Prisma.OrganizationMemberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationMemberCreateArgs>
  ): Promise<OrganizationMember> {
    return this.prisma.organizationMember.create<T>(args);
  }
  async update<T extends Prisma.OrganizationMemberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationMemberUpdateArgs>
  ): Promise<OrganizationMember> {
    return this.prisma.organizationMember.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationMemberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationMemberDeleteArgs>
  ): Promise<OrganizationMember> {
    return this.prisma.organizationMember.delete(args);
  }

  async getOrganizationId(parentId: string): Promise<Organization | null> {
    return this.prisma.organizationMember
      .findUnique({
        where: { id: parentId },
      })
      .organizationId();
  }

  async getRoleId(parentId: string): Promise<Role | null> {
    return this.prisma.organizationMember
      .findUnique({
        where: { id: parentId },
      })
      .roleId();
  }
}
