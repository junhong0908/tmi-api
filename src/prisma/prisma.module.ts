import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { WinstonModule } from "nest-winston";
import { buildWinstonOptions } from "src/common/logger/winston.config";

@Global()
@Module({
    imports: [WinstonModule.forRoot(buildWinstonOptions())],
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule { }