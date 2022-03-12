export default class GalacticAge {
  constructor (age) {
    this.age = age;
    this.earthLifeExpectancy = 80;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
};

  earthYearsRemaining() {
    return this.earthLifeExpectancy - this.age;
  };

  calculateAgeMercury() {
    return Math.round(this.age/this.mercury); 
  };

  calculateAgeVenus() {
    return Math.round(this.age/this.venus);
  };

  calculateAgeMars() {
    return Math.round(this.age/this.mars);
  };

  calculateAgeJupiter() {
    return Math.round(this.age/this.jupiter);
  };

  mercuryYearsRemaining() {
    let mercuryYearsReamaining = this.calculateAgeMercury();
    return mercuryYearsReamaining -= this.earthLifeExpectancy;
  };

  venusYearsRemaining() {
    let venusYearsRemaining = this.calculateAgeVenus();
    return venusYearsRemaining -= this.earthLifeExpectancy;
  }

  marsYearsRemaining() {
    let marsYearsRemaining = this.calculateAgeMars();
    return Math.abs(marsYearsRemaining -= this.earthLifeExpectancy);
  }

  jupiterYearsRemaining() {
    let jupiterYearsRemaining = this.calculateAgeJupiter();
    return Math.abs(jupiterYearsRemaining -= this.earthLifeExpectancy);
  }
}