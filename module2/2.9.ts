{
  //conditional types

  type a1 = number; 
  type b1 = string;


  type x = a1 extends null ? true : false; // conditonal types

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  }

  // keyOf Sheikh "bike" | "car" | "ship" 

  // car ache kina / bike ache kina / ship ache kina /tractor ache kina
  type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

  type HasBike = CheckVehicle<'tractor'>



  //
}