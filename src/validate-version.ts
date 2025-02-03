import { execSync } from "node:child_process";

export function throwIfVersionNotInRange(packageName: string, minimumMajorVersion: number): void {
  const result = verifyMajorVersion(packageName, minimumMajorVersion);
  if (result === false) {
    throw new Error(
      `Installed version of package does not meet expecations. Expected ${packageName} to be atleast ${minimumMajorVersion}.x.x`,
    );
  }
}

/**
 *
 * @param packageName
 * @param minimumMajorVersion
 * @returns null if failure of package doesn't exist, true if minimumMajorVersion <= current, false otherwise
 */
export function verifyMajorVersion(packageName: string, minimumMajorVersion: number): null | boolean {
  try {
    const npmInfoString = execSync(`npm explain ${packageName} --json`).toString();
    const npmInfo = JSON.parse(npmInfoString) as Array<{ name?: string; version?: string }>;
    const packageInfo = npmInfo.find((value) => {
      return value.name === packageName && value.version != null;
    });
    if (packageInfo == null || packageInfo.version == null) {
      return null;
    }
    const parts = packageInfo.version.split(".");
    const majorVersionString = parts[0];
    const majorVersion = parseInt(majorVersionString);
    return minimumMajorVersion <= majorVersion;
  } catch (e) {
    return null;
  }
}
