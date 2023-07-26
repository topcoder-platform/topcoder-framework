export const AuthMethods = ["Bearer"] as const;
export type AuthMethod = (typeof AuthMethods)[number];
