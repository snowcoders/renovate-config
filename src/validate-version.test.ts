import { expect, it } from "@jest/globals";
import { verifyMajorVersion } from "./validate-version.js";

it.each<{
  expectedResult: ReturnType<typeof verifyMajorVersion>;
  minVersion: Parameters<typeof verifyMajorVersion>[1];
  packageName: Parameters<typeof verifyMajorVersion>[0];
}>`
  packageName                      | minVersion | expectedResult | notes
  ${"prettier"}                    | ${77}      | ${false}       | ${"returns false if minVersion is greater than current"}
  ${"prettier"}                    | ${2}       | ${true}        | ${"returns true if minVersion is same as current"}
  ${"prettier"}                    | ${1}       | ${true}        | ${"returns true if minVersion is less than current"}
  ${"@snowcoders/renovate-config"} | ${1}       | ${null}        | ${"returns null if running on current package"}
  ${"@snowcoders/does-not-exist"}  | ${4}       | ${null}        | ${"returns null if package doesn't exist at all in registry"}
  ${"webpack"}                     | ${3}       | ${null}        | ${"returns null if package is not installed"}
`(
  "returns $expectedResult for $packageName when expecting $minVersion",
  ({ expectedResult, minVersion, packageName }) => {
    const result = verifyMajorVersion(packageName, minVersion);
    expect(result).toBe(expectedResult);
  }
);
