{
  // access modifiers 
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor (id: number, name: string, balance: number){
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount : number){
      this._balance = this._balance + amount;
    }

    public getBalance(){
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount{
    test(){
      this._balance
    }
  }

  const goribManuserAccount = new BankAccount(111, "mr. gorib", 20);
  // goribManuserAccount.balance = 111;
  goribManuserAccount.addDeposit(100);
  const myBalance = goribManuserAccount.getBalance();
  console.log(myBalance);



  //
}