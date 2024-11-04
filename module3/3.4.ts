{
  // instance  guard 

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string){
      this.name = name;
      this.species = species;
    }
    makeSound(){
      console.log("Iam making sound")
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string){
      super(name, species);
    }
    makeBark(){
      console.log("I am barking")
    }
  }


  class Cat extends Animal {
    constructor(name: string, species: string){
      super(name, species);
    }
    makeMeou(){
      console.log("I am Meou")
    }
  }

  // smart way te hangle korar jonno chaile amra function use korte pari 

  const isDog = (animal : Animal): animal is Dog => {
    return animal instanceof Dog;
  }

  const isCat = (animal : Animal): animal is Cat => {
    return animal instanceof Cat;
  }

  const getAnimal = (animal: Animal) => {
    if(isDog(animal)){
      animal.makeBark();
    } else if(isCat(animal)){
      animal.makeMeou();
    } else {
      animal.makeSound();
    }
  }

  const dog = new Dog("Dog bhai", "dog");
  const cat = new Cat("Cat bhai", "cat");
  

  getAnimal(cat)


  //
}