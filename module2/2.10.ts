{
  // mapped types

  const arrOfNumber : number[] = [1, 2, 3, 5];

  // const arrOfStrings : string[] = ['1', '2', '3']

  const arrOfStrings : string[] = arrOfNumber.map((number) => number.toString());
  console.log(arrOfNumber);

  type AreaNumber = {
    height: number;
    widht: number;
  };

  type Height = AreaNumber["height"] // look up type

  // type AreaString = {
  //   height: string;
  //   widht: string;
  // }

  // keyOf AreaNumber => "height" : "widht"

  // T => {height: string; width: number}
  // key => T ["height"]
  type AreaString<T> = {
    [key in keyof T] : T[key];
  }

  const are1 : AreaString<{height: string; width: number}>={
    height: "5.6",
    width: 5
  }



  //
}