import { utilities as nestWinston } from "nest-winston";
import { format, transports } from "winston";

export function buildWinstonOptions() {
    const isProd = (process.env.NODE_ENV ?? "dev") === "production";
    return {
        level: isProd ? "info" : "debug",
        transports: [
            new transports.Console({
                format: format.combine(
                    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                    nestWinston.format.nestLike("TMI", {
                        colors: !isProd,
                        prettyPrint: !isProd,
                    }),
                ),
            }),
        ],
    };
}
