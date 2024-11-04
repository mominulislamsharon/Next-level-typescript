{
  // encapsultaion
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor (id: number, name: string, balance: number){
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount : number){
      this._balance = this._balance + amount;
    }

    private getBalance(){
      return this._balance;
    }

    getHiddenMethod(){
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount{
    test(){
      this.
    }
  }

  const goribManuserAccount = new BankAccount(111, "mr. gorib", 20);
  // goribManuserAccount.balance = 111;
  goribManuserAccount.addDeposit(100);
  const myBalance = goribManuserAccount.getBalance();
  console.log(myBalance);



  //
}