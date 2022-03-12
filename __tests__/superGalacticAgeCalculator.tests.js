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

describe ('calculateMercury', () => {
  test('should return number of years reamaining on Mercury', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateMercury()).toEqual(208);
  });
});

describe ('calculateVenus', () => {
  test('should return number of years remaining on Venus', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateVenus()).toEqual(81);
  })
});

describe ('calculateMars', () => {
  test('should return number of years remaining on mars', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateMars()).toEqual(27);
  });
});



