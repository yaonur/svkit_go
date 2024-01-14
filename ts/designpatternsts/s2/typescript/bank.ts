export class BankAccount {
  private _balance: number;
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public get balance():number {
	return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid amount");
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }
    this._balance -= amount;
  }
}



 