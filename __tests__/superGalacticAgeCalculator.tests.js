import GalacticAge from './../src/js/superGalacticAgeCalculator.js';

describe ('GalacticAge', () => {

  test('should return GalacticAge function', () => {
    let galacticAge = new GalacticAge();
    expect(galacticAge.age).toEqual(20);
    expect(galacticAge.earthLifeExpectancy).toEqual(80);
    expect(galacticAge.mercury).toEqual(0.24);
    expect(galacticAge.venus).toEqual(0.62);
    expect(galacticAge.mars).toEqual(1.88);
    expect(galacticAge.jupiter).toEqual(11.86);
  });
});

// describe ('ageOnPlanet', () => {

//   test('should return age on each planet', () => {
//     let ageOnPlanet = new GalacticAge();
//     expect(ageOnPlanet.earth).toEqual(20);
//     expect(ageOnPlanet.mercury).toEqual();
//   });
// });