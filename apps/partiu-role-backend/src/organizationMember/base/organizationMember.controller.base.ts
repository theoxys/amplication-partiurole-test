/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrganizationMemberService } from "../organizationMember.service";
import { OrganizationMemberCreateInput } from "./OrganizationMemberCreateInput";
import { OrganizationMemberWhereInput } from "./OrganizationMemberWhereInput";
import { OrganizationMemberWhereUniqueInput } from "./OrganizationMemberWhereUniqueInput";
import { OrganizationMemberFindManyArgs } from "./OrganizationMemberFindManyArgs";
import { OrganizationMemberUpdateInput } from "./OrganizationMemberUpdateInput";
import { OrganizationMember } from "./OrganizationMember";

export class OrganizationMemberControllerBase {
  constructor(protected readonly service: OrganizationMemberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrganizationMember })
  async create(
    @common.Body() data: OrganizationMemberCreateInput
  ): Promise<OrganizationMember> {
    return await this.service.create({
      data: {
        ...data,

        organizationId: data.organizationId
          ? {
              connect: data.organizationId,
            }
          : undefined,

        roleId: data.roleId
          ? {
              connect: data.roleId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roleId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OrganizationMember] })
  @ApiNestedQuery(OrganizationMemberFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<OrganizationMember[]> {
    const args = plainToClass(OrganizationMemberFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roleId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrganizationMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: OrganizationMemberWhereUniqueInput
  ): Promise<OrganizationMember | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roleId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OrganizationMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: OrganizationMemberWhereUniqueInput,
    @common.Body() data: OrganizationMemberUpdateInput
  ): Promise<OrganizationMember | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organizationId: data.organizationId
            ? {
                connect: data.organizationId,
              }
            : undefined,

          roleId: data.roleId
            ? {
                connect: data.roleId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          organizationId: {
            select: {
              id: true,
            },
          },

          roleId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OrganizationMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: OrganizationMemberWhereUniqueInput
  ): Promise<OrganizationMember | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          organizationId: {
            select: {
              id: true,
            },
          },

          roleId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
