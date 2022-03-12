import GalacticAge from './../src/js/superGalacticAgeCalculator.js';
//test1
describe ('GalacticAge', () => {

  test('should return GalacticAge function', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.age).toEqual(50);
    // expect(galacticAge.earthDays).toEqual(365);
    expect(galacticAge.earthLifeExpectancy).toEqual(80);
    expect(galacticAge.mercury).toEqual(0.24);
    expect(galacticAge.venus).toEqual(0.62);
    expect(galacticAge.mars).toEqual(1.88);
    expect(galacticAge.jupiter).toEqual(11.86);
  });
});

// test2
describe ('earthYearsRemaining', () => {
  
  test('should return years remaining on Earth', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.earthYearsRemaining()).toEqual(30);
  });
});

// test3
describe ('calculateMercury', () => {
  
  test('should return age on Mercury', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeMercury()).toEqual(208);
  });
});

// test4
describe ('calculateVenus', () => {
  
  test('should return age on Venus', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeVenus()).toEqual(81);
  });
});

// test5
describe ('calculateMars', () => {
  
  test('should return age on mars', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeMars()).toEqual(27);
  });
});

// test6
describe ('calculateJupiter', () => {
  
  test('should return age on jupiter', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeJupiter()).toEqual(4);
  });
});

//test7
describe ('mercuryYearsReaming', () => {
  test('should return years remaining on mercury', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.mercuryYearsRemaining()).toEqual(128);
  });
});

//test8
describe ('venusYearsReaming', () => {
  test('should return years remaining on venus', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.venusYearsRemaining()).toEqual(1);
  });
});

//test9
describe ('marsYearsReaming', () => {
  test('should return years remaining on mars', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.marsYearsRemaining()).toEqual(53);
  });
});

//test10
describe ('jupiterYearsReaming', () => {
  test('should return years remaining on mars', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.jupiterYearsRemaining()).toEqual(76);
  });
});