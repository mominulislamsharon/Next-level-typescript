{
 // statics 

 class Counter {
  static count: number = 0;
   
  static increment(){
    return(Counter.count = Counter.count + 1);
  }
  
  static decrement(){
    return(Counter.count = Counter.count - 1);
  }
 }

//  const instance2 = new Counter();
//  console.log(instance2.increment());
//  const instance1 = new Counter();
 console.log(Counter.increment());


//  const instance2 = new Counter();
 console.log(Counter.increment());

//  const instance3 = new Counter();
 console.log(Counter.increment());

 //
}