export interface LoggerConfig {
  validators: {
    enabled: boolean;
  };
  logMethodParams: {
    enabled: boolean;
  };
  tracing: {
    enabled: boolean;
    annotations: string[];
    metadata: string[];
  };
  metrics: {
    enabled: boolean;
  };
}
