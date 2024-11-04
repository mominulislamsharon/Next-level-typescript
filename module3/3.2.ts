{
  // oop - inheritance

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number){
      console.log(`${this.name} will sleep for ${numOfHours}`)
    }
  }

  class Student extends Parent {

    constructor(name: string, age: number, address: string){
      super(name, age, address)
  }
}

  const Student1 = new Student("mominul", 20, "ng");
  Student1.



  class Teacher extends Parent {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
      // this.name = name;
      // this.age = age;
      // this.address = address;
      super(name, age, address);
      this.designation = designation;
    }
    getSleep(numOfHours: number){
      console.log(`${this.name} will sleep for ${numOfHours}`)
    }
    takeClass(numOfClass: number){
      console.log(`${this.name} will take ${numOfClass}`)
    }
  }

  const EnglishTeacher = new Teacher("mam", 25, "chasra", "English")

  //
}