export function BudgetHelperTwo(balance, math) {
  this.balance = balance;
  this.getCurrentBalance = () => this.balance;
  this.deposit = amount => math.add(this.balance, amount);
  this.withdraw = amount => math.subtract(this.balance, amount);
  this.calculateTip = amount => math.multiply(amount, 0.2);
}
