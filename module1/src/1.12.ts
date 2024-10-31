{
// nullable types / unknown types

  const searchName = (value: string | null) => {
    if(value) {
      console.log("Searching");
    }else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  // unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if(typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`)
    }
    if(typeof value === "string") {
      const  [result, unit] = value.split(" ");
      // console.log(result);
      const convertedSpeed = (parseFloat(result) * 1000)/ 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`)
    }
  };
  getSpeedInMeterPerSecond(`wrong input`)

  // never

  const throwError =(msg: string): never => {
    throw new Error(msg);
  }

  throwError('muskil se error hogaya')
//
}