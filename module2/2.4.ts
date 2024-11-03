{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate : number;
    },
    smartWatch : T;
    bike? : X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper : Developer<EmilabWatch> = {
    name: "mominul",
    computer : {
      brand: "hp",
      model: "h22",
      releaseDate: 2022,

    },
    smartWatch: {
      brand: "modil",
      model: "z55",
      display: "gorila"
    }
  }

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface RoyelBike {
    model : string;
    engineCapacity : string;
  }

  const richDeveloper : Developer<AppleWatch, RoyelBike> = {
    name: "Rich developer mominul",
    computer : {
      brand: "mac",
      model: "22",
      releaseDate: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "kw665",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model : "Royel",
      engineCapacity : "350cc"
    }
  }



  //
}