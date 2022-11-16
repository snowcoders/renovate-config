import { describe, expect, it } from "@jest/globals";
import * as configs from "./index.js";

describe("index", () => {
  it("jest", () => {
    expect(configs.jest).toBeDefined();
  });

  it("lintStaged", () => {
    expect(configs.lintStaged).toBeDefined();
  });

  it("prettier", () => {
    expect(configs.prettier).toBeDefined();
  });

  it("sortier", () => {
    expect(configs.sortier).toBeDefined();
  });

  it("eslint", () => {
    expect(configs.buildEslintConfig).toBeDefined();
  });
});
