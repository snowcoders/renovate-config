import { throwIfVersionNotInRange } from "./validate-version.js";

throwIfVersionNotInRange("prettier", 2);

export const prettier = {
  printWidth: 120,
};
