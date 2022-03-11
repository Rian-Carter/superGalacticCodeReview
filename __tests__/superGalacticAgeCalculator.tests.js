// import { TestScheduler } from 'jest';
import GalacticAge from './../src/js/superGalacticAgeCalculator.js';

describe ('GalacticAge', () => {

    test('should return users age on each planet based on 1 earth year', () => {
      let galacticAge = new GalacticAge(1);
      expect(galacticAge.earth).toEqual(1);
      expect(galacticAge.lifeExpectancy).toEqual(80);
      expect(galacticAge.mercury).toEqual(4.166666666666667);
      expect(galacticAge.venus).toEqual(1.6129032258064517);
      expect(galacticAge.mars).toEqual(0.5319148936170213);
      expect(galacticAge.jupiter).toEqual(0.08431703204047218);
    });

// describe ('doomsDay', () => {

//     test('should return how many years a user has left to live', () => {
//       let yearsLeft = new GalacticAge();
//       let lifeExpectancy = 80;
//       expect(lifeExpectancy).toEqual(80);
//       expect(lifeExpectancy.earth).toEqual(79);
//       expect(lifeExpectancy.mercury).toEqual(333.3333333333333);
//     });
//   });
});