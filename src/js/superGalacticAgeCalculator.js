export default class GalacticAge {
  constructor (age) {
    this.age = age;
    this.earthDays = 365;
    this.earthLifeExpectancy = 80;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
};

  calculateEarth() {
    return this.earthLifeExpectancy - this.age;
  };

  calculateMercury() {
    return Math.round(this.age/this.mercury); 
  };

  calculateVenus() {
    return Math.round(this.age/this.venus);
  };

  calculateMars() {
    return Math.round(this.age/this.mars);
  };

  calculateJupiter() {
    return Math.round(this.age/this.jupiter);
  };

  mercuryYearsRemaining() {
    let mercuryYearsReamaining = this.calculateMercury();
    return mercuryYearsReamaining -= this.earthLifeExpectancy;
  };

  venusYearsRemaining() {
    let venusYearsRemaining = this.calculateVenus();
    return venusYearsRemaining -= this.earthLifeExpectancy;
  }

  marsYearsRemaining() {
    let marsYearsRemaining = this.calculateMars();
    return Math.abs(marsYearsRemaining -= this.earthLifeExpectancy);
  }

  jupiterYearsRemaining() {
    let jupiterYearsRemaining = this.calculateJupiter();
    return Math.abs(jupiterYearsRemaining -= this.earthLifeExpectancy);
  }
}