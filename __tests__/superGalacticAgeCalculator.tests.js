import GalacticAge from './../src/js/superGalacticAgeCalculator.js';

describe ('GalacticAge', () => {

  test('should return GalacticAge function', () => {
    let galacticAge = new GalacticAge(50, 80);
    expect(galacticAge.age).toEqual(50);
    expect(galacticAge.earthLifeExpectancy).toEqual(80);
    expect(galacticAge.mercury).toEqual(0.24);
    expect(galacticAge.venus).toEqual(0.62);
    expect(galacticAge.mars).toEqual(1.88);
    expect(galacticAge.jupiter).toEqual(11.86);
  });
});

describe ('calculateEarth', () => {
  test('should return number of years remaining on Earth', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateEarth()).toEqual(30);
  });
});





