export default class GalacticAge {
  constructor (age) {
    this.age = age;
    this.earthLifeExpectancy = 80;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
}

  calculateEarth() {
    return this.earthLifeExpectancy - this.age;
  }

  calculateMercury() {
    return Math.round(this.age/this.mercury); 
  }

  calculateVenus() {
    return Math.round(this.age/this.venus);
  }
}