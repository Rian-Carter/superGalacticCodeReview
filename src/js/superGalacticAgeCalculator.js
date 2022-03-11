export default class GalacticAge {
  constructor (earth) {
    this.earth = earth;
    this.mercury = this.earth / .24;
    this.venus = this.earth / .62;
    this.mars = this.earth / 1.88;
    this.jupiter = this.earth / 11.86;
}

  leftToLive () {
    this.earthLifeExpectancy = 80;
    this.earthEndTime = this.earthLifeExpectancy - this.earth;
    this.mercuryEndTime = this.earthLifeExpectancy / .24 - this.mercury;
    this.venusEndTime = this.earthLifeExpectancy / .62 - this.venus;
    this.marsEndTime = this.earthLifeExpectancy / 1.88 - this.mars;
    this.jupiterEndTime = this.earthLifeExpectancy / 11.86 - this.jupiter;
  }
}