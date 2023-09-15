export const InfoType = {
  INFO: "INFO",
  WARN: "WARN",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;
export type InfoType = keyof typeof InfoType;
