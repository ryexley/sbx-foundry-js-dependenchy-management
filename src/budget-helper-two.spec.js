import { BudgetHelperTwo } from "./budget-helper-two";
import * as math from "./util/math";

describe("Budget Helper Two", () => {
  describe("deposit", () => {
    it("should return the correct new balance", () => {
      const addSpy = jest.spyOn(math, "add");
      const instance = new BudgetHelperTwo(100, math);
      const newBalance = instance.deposit(20);
      expect(addSpy).toHaveBeenCalledTimes(1);
      expect(addSpy).toHaveBeenCalledWith(100, 20);
      expect(newBalance).toEqual(120);
    });
  });

  describe("withdraw", () => {
    it("should return the correct new balance", () => {
      const subtractSpy = jest.spyOn(math, "subtract");
      const instance = new BudgetHelperTwo(100, math);
      const newBalance = instance.withdraw(20);
      expect(subtractSpy).toHaveBeenCalledTimes(1);
      expect(subtractSpy).toHaveBeenCalledWith(100, 20);
      expect(newBalance).toEqual(80);
    });
  });

  describe("multiply", () => {
    it("should calculate tip correctly", () => {
      const multiplySpy = jest.spyOn(math, "multiply");
      const instance = new BudgetHelperTwo(100, math);
      const tip = instance.calculateTip(50);
      expect(multiplySpy).toHaveBeenCalledTimes(1);
      expect(multiplySpy).toHaveBeenLastCalledWith(50, 0.2);
      expect(tip).toEqual(10);
    });
  });
});
