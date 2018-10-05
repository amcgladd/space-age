import {userInput} from "./../src/main.js";


describe('userInput', function() {

  it('should test if userInput is an integer', function() {
    var test = new userInput("apple");
    test.calculateAges("apple");
    expect(test.age).toEqual('false');
  });

  it('should return Earth age', function() {
    var test = new userInput(33);
    test.calculateAges(33);
    expect(test.earthAge).toEqual(33);
  });

  it('should return Mercury age', function() {
    var test = new userInput(33);
    test.calculateAges(33);
    expect(test.mercuryAge).toEqual(137.5);
  });

});




// expect(triangle.side1).toEqual(3);
// expect(triangle.side2).toEqual(4);
// expect(triangle.side3).not.toEqual(6);
// expect(typeof test.earthAge).toEqual('number');
