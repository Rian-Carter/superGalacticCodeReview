export default class GalacticAge {
  constructor (earth) {
    this.earth = earth;
    this.lifeExpectancy = 80;
    this.mercury = this.earth / .24;
    this.venus = this.earth / .62;
    this.mars = this.earth / 1.88;
    this.jupiter = this.earth /11.86;
}

//   doomsDay () {
//     // this.earth = this.lifeExpectancy - this.earth;
//     this.earth = this.earth - this.lifeExpectancy;
//     this.mercury = this.lifeExpectancy - (this.earth / this.mercury);
//   }
}