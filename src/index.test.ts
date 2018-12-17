import * as configs from "./index";

describe("index", () => {
  it("husky", () => {
    expect(configs.husky).toBeDefined();
  });

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
});
