// import { TestScheduler } from 'jest';
import GalacticAge from './../src/js/superGalacticAgeCalculator.js';

describe ('GalacticAge', () => {

    test('should return galacticAge function', () => {
      let galacticAge = new GalacticAge();
      expect(galacticAge.earth).toEqual(1);
      expect(galacticAge.mercury).toEqual(.24);
      expect(galacticAge.venus).toEqual(.62);
      expect(galacticAge.mars).toEqual(1.88);
      expect(galacticAge.jupiter).toEqual(11.86);
      expect(galacticAge.lifeExpectancy).toEqual(80);
    });
});