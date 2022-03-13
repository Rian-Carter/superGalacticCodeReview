import GalacticAge from './../src/js/superGalacticAgeCalculator.js';
//test1
describe ('GalacticAge', () => {

  test('should return GalacticAge function', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.age).toEqual(50);
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
describe ('calculateAgeMercury', () => {
  
  test('should return age on Mercury', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeMercury()).toEqual(208);
  });
});

// test4
describe ('calculateAgeVenus', () => {
  
  test('should return age on Venus', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeVenus()).toEqual(81);
  });
});

// test5
describe ('calculateAgeMars', () => {
  
  test('should return age on mars', () => {
    let galacticAge = new GalacticAge(50);
    expect(galacticAge.calculateAgeMars()).toEqual(27);
  });
});

// // test6
describe ('calculateAgeJupiter', () => {
  
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



// describe ('lifeSurpassed', () => {
//   test('should determine how many years a person has lived past their life expectancy on Mercury', () => {
//     let userBeyondAge = new GalacticAge(50, 80);
//     userBeyondAge.lifeSurpassed();
//     expect(userBeyondAge.mercurySurpassed).toEqual(10);
//   })
// })


// test11 refactoring code
// describe ('agePlanets', () => {
//   test('should return age on different planets', () => {
//     // let galacticAge = new GalacticAge(50);
//     let userAge = new GalacticAge(50);
//     expect(userAge.agePlanets()).toEqual();
//   })
// })