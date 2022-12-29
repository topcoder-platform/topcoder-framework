import _ from "lodash";
import {
  createLogger,
  transports,
  format,
  Logger as WinstonLogger,
} from "winston";

import { LoggerConfig } from "./interfaces/LoggerConfig";

type FunctionConstructorWithJoiSchema = FunctionConstructor & {
  schema: object;
};

interface FunctionObject {
  [key: string]: FunctionConstructorWithJoiSchema;
}

export class Logger {
  private _logger: WinstonLogger;
  private _config: LoggerConfig;

  constructor(config: LoggerConfig) {
    this._logger = createLogger({
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.timestamp(),
            format.align(),
            format.printf(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              (info) => `${info.timestamp} ${info.level}: ${info.message}`
            )
          ),
        }),
      ],
    });

    this._config = config;
  }

  get logger(): WinstonLogger {
    return this._logger;
  }

  private buildService(service: FunctionObject) {
    const shoulDecorateWithValidators = this._config.validators.enabled;
    const shouldDecorateWithLogMethodParams =
      this._config.logMethodParams.enabled;
    const shouldDecorateWithTracing = this._config.tracing.enabled;
    const shouldDecorateWithMetrics = this._config.metrics.enabled;

    _.each(service, (method, name) => {
      if (shoulDecorateWithValidators && method.schema) {
        this.decorateWithValidators(method, name);
      }

      if (shouldDecorateWithLogMethodParams) {
        this.decorateWithLogMethodParams(method, name);
      }

      if (shouldDecorateWithTracing) {
        this.decorateWithTracing(method, name);
      }

      if (shouldDecorateWithMetrics) {
        this.decorateWithMetrics(method, name);
      }
    });
  }

  private decorateWithValidators(
    service: FunctionConstructorWithJoiSchema,
    name: string
  ) {
    console.log(name, "decorate ", service.name, " with validators");
  }

  private decorateWithLogMethodParams(
    service: FunctionConstructorWithJoiSchema,
    name: string
  ) {
    console.log(name, "decorate ", service.name, " with log method params");
  }

  private decorateWithTracing(
    service: FunctionConstructorWithJoiSchema,
    name: string
  ) {
    console.log(name, "decorate ", service.name, " with tracing");
  }

  private decorateWithMetrics(
    service: FunctionConstructorWithJoiSchema,
    name: string
  ) {
    console.log(name, "decorate ", service.name, " with metrics");
  }
}
