import { BudgetHelperOne } from "./budget-helper-one";

describe("Budget Helper One", () => {
  let mathMock = null,
      instance = null;

  beforeEach(() => {
    instance = new BudgetHelperOne(0);
  });

  afterEach(() => {
    if (instance) {
      instance = null;
    }
  });

  describe("deposit", () => {
    it("should return the correct new balance");
  });

  describe("withdraw", () => {
    it("should return the correct new balance");
  });

  describe("multiply", () => {
    it("should calculate tip correctly");
  });
});
