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
    expect(test.mercuryAge).toEqual('137.50');
  });

  it('should return Venus age', function() {
    var test = new userInput(33);
    test.calculateAges();
    expect(test.venusAge).toEqual('53.23');
  });

  it('should return Mars age', function() {
    var test = new userInput(33);
    test.calculateAges();
    expect(test.marsAge).toEqual('17.55');
  });

  it('should return Jupiter age', function() {
    var test = new userInput(33);
    test.calculateAges();
    expect(test.jupiterAge).toEqual('2.78');
  });

  it('should return life expectancy in earth years', function() {
    var test = new userInput(33, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.earthRemain).toEqual(51);
  });

  it('should return life expectancy in mercury years', function() {
    var test = new userInput(33, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.mercuryRemain).toEqual('212.50');
  });

  it('should return life expectancy in venus years', function() {
    var test = new userInput(33, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.venusRemain).toEqual('82.26');
  });

  it('should return life expectancy in mars years', function() {
    var test = new userInput(33, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.marsRemain).toEqual('27.13');
  });

  it('should return life expectancy in jupiter years', function() {
    var test = new userInput(33, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.jupiterRemain).toEqual('4.30');
  });

  it('if user age exceeds expectancy, program returns number of Earth years they have lived past life expectancy', function() {
    var test = new userInput(100, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.earthOver).toEqual('16.00');
  });

  it('if user age exceeds expectancy, program returns number of mercury years they have lived past life expectancy', function() {
    var test = new userInput(100, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.mercuryOver).toEqual('66.67');
  });

  it('if user age exceeds expectancy, program returns number of Venus years they have lived past life expectancy', function() {
    var test = new userInput(100, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.venusOver).toEqual('25.81');
  });

  it('if user age exceeds expectancy, program returns number of mars years they have lived past life expectancy', function() {
    var test = new userInput(100, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.marsOver).toEqual('8.51');
  });

  it('if user age exceeds expectancy, program returns number of jupiter years they have lived past life expectancy', function() {
    var test = new userInput(100, 'female', false, true);
    test.calculateAges();
    test.calculateExpectancy();
    test.calculateRemaining();
    expect(test.jupiterOver).toEqual('1.35');
  });

});




// expect(triangle.side1).toEqual(3);
// expect(triangle.side2).toEqual(4);
// expect(triangle.side3).not.toEqual(6);
// expect(typeof test.earthAge).toEqual('number');
