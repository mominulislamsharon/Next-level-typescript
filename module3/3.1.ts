{
  // oop - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties

    constructor(public name: string, public species: string, public sound: string){
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    makeSound(){
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  

  const dog = new Animal("Germani dog", "parsial", "Baby");
  const cat = new Animal("Cat", "Feline", "Meow");
  cat.makeSound();


  //
}