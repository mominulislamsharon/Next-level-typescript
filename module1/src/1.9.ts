{
// type Alias

type student = {
    name: string;
    age: number;
    contactNo: string;
    gender: string;
    address: string
  }

const student1: student = {
  name: 'mominul',
  age: 20,
  gender: 'male',
  contactNo: '01245445',
  address: 'dhaka, narayanganj'
};

const student2: student = {
  name: 'rakib',
  age: 22,
  gender: 'male',
  address: 'ng '

};

const student3: student = {
  name: 'rakib',
  age: 22,
  gender: 'male',
  address: 'ng '
};


type userName = string
type isAdmin = boolean
const userName : userName = 'mominul'
const isAdmin : isAdmin = true

type Add = (num1 : number	, num2: number) => number;
const add : Add  = (num1 , num2) => num1 + num2;


}