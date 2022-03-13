export default class GalacticAge {
  constructor (age) {
    this.age = age;
    this.earthLifeExpectancy = 80;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
};


// calculate age
calculateAgeMercury() {
  return (Math.round(this.age/this.mercury)); 
};

calculateAgeVenus() {
  return (Math.round(this.age/this.venus));
};

calculateAgeMars() {
  return (Math.round(this.age/this.mars));
};

calculateAgeJupiter() {
  return (Math.round(this.age/this.jupiter));
};




//years left to live
earthYearsRemaining() {
  return this.earthLifeExpectancy - this.age;
};

mercuryYearsRemaining() {
  let mercuryYearsReamaining = this.calculateAgeMercury();
  return Math.abs(mercuryYearsReamaining -= this.earthLifeExpectancy);
};

venusYearsRemaining() {
  let venusYearsRemaining = this.calculateAgeVenus();
  return Math.abs(venusYearsRemaining -= this.earthLifeExpectancy);
}

marsYearsRemaining() {
  let marsYearsRemaining = this.calculateAgeMars();
  return Math.abs(marsYearsRemaining -= this.earthLifeExpectancy);
}

jupiterYearsRemaining() {
  let jupiterYearsRemaining = this.calculateAgeJupiter();
  return Math.abs(jupiterYearsRemaining -= this.earthLifeExpectancy);
}




// //refactoring code
// agePlanets() {
//   this.mercuryAge = parseFloat((this.age / this.mercury).toFixed(1));
//   this.venusAge = (this.age / this.venus);
//   this.marsAge = (this.age / this.mars);
//   this.jupiterAge = (this.age / this.jupiter);
// }
// }
// //life surpassed
// lifeSurpassed() {
//   if (this.age > this.earthLifeExpectancy) {
//     this.mercurySurpassed = parseInt(((this.age - this.earthLifeExpectancy) / this.mercury).toFixed(1));
//   }
}