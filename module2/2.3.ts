{
  // generics type

  type GenericArray <T> = Array<T>

  // const rollNumbers: number[] = [3, 4, 6];
  // const rollNumbers: Array <number> = [3, 4, 6];
  const rollNumbers: GenericArray <number> = [3, 4, 6];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray <string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray <boolean> = [true, false, true];

  const user : GenericArray<{name: string, age: number,}> = [
    {
      name: 'Mominul',
      age: 100
    },
    {
      name: "sharon",
      age: 20
    }
  ];

  const add = (x: number, y: number) => x + y

  add(30,20);

  // generic tuple

  type GenericTuple <X,Y> = [X, Y];

  const mauns : GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID : GenericTuple<number, {name: string, email: string}> = [123, {name: 'mominul', email: "m@gmail.com"}]

  //
}