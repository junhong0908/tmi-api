// src/prisma/prisma.service.ts
import { Inject, Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import type { LoggerService } from "@nestjs/common"; // ★ isolatedModules 대응
import { PrismaClient, Prisma } from "@prisma/client";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { loggers } from "winston";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER)
        private readonly logger: LoggerService,
    ) {
        super()
    }

    async onModuleInit() {
        await this.$connect();
        this.logger.log("Prisma connected successfully");
    }

}
