{
  // getter And setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor (id: number, name: string, balance: number){
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter diye 
    set deposit(amount : number){
      this._balance =this.balance + amount;
    }

    // public addDeposit(amount : number){
    //   this._balance = this._balance + amount;
    // }

    // getter diye 
    get balance(){
      return this._balance;
    }

    // public getBalance(){
    //   return this._balance;
    // }
  }

  const goribManuserAccount = new BankAccount(111, "mr. gorib", 100);

  // goribManuserAccount.balance = 111;
  // goribManuserAccount.addDeposit(100);
  goribManuserAccount.deposit = 50;
  // const myBalance = goribManuserAccount.getBalance();

  const myBalance = goribManuserAccount.balance;
  console.log(myBalance);



  //
}