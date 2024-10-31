{

// Learning Function 
// Normal Function
// Arrow function 

function add (num1: number, num2: number = 10): number{
  return num1 + num2;
}

add(2, "2");

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object ----> function ---> method 

const poorUser = {
  name: 'mominul', 
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
}

const arr: number [] = [1, 2, 4,20];

const newArray = arr.map((elem : number) : number => elem *elem);


}