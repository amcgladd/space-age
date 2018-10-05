import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//back end
export function userInput(age, gender, smoking, exercise) {
  this.age = age;
  this.gender = gender;
  this.smoking = smoking;
  this.exercise = exercise;
}

userInput.prototype.mercuryConvert = function(earthValue) {
  return (earthValue / .24).toFixed(2);
};

userInput.prototype.venusConvert = function(earthValue) {
  return (earthValue / .62).toFixed(2);
};

userInput.prototype.marsConvert = function(earthValue) {
  return (earthValue / 1.88).toFixed(2);
};

userInput.prototype.jupiterConvert = function(earthValue) {
  return (earthValue / 11.86).toFixed(2);
};

userInput.prototype.calculateAges = function() {
  if(typeof this.age == 'number') {
    this.earthAge = this.age;
    this.mercuryAge = this.mercuryConvert(this.earthAge);
    this.venusAge = this.venusConvert(this.earthAge);
    this.marsAge = this.marsConvert(this.earthAge);
    this.jupiterAge = this.jupiterConvert(this.earthAge);
  } else {
    this.age = 'false';
    this.earthAge = 'false';
  }
};

userInput.prototype.calculateExpectancy = function () {
  if(this.gender == 'male') {
    this.earthExpect = 72;
  } else if (this.gender == 'female') {
    this.earthExpect = 79;
  } else {
    alert("please enter male or female for gender");
  }

  if(this.smoking == "true") {
    this.earthExpect -= 5;
  }

  if (this.exercise == "true") {
    this.earthExpect += 5;
  }
};

userInput.prototype.calculateRemaining = function () {
  if (this.earthAge > this.earthExpect) {
    this.earthOver = (this.earthAge - this.earthExpect).toFixed(2);
    this.mercuryOver = this.mercuryConvert(this.earthOver);
    this.venusOver = this.venusConvert(this.earthOver);
    this.marsOver = this.marsConvert(this.earthOver);
    this.jupiterOver = this.jupiterConvert(this.earthOver);
  }
  this.earthRemain = this.earthExpect - this.earthAge;
  this.mercuryRemain = this.mercuryConvert(this.earthRemain);
  this.venusRemain = this.venusConvert(this.earthRemain);
  this.marsRemain = this.marsConvert(this.earthRemain);
  this.jupiterRemain = this.jupiterConvert(this.earthRemain);
};

userInput.prototype.outputMaker = function () {
  this.output = '<p>You can expect to live '+
    this.earthRemain +
    ' more Earth years, ' +
    this.mercuryRemain +
    ' more Mercury years, ' +
    this.venusRemain +
    ' more Venus years, and ' +
    this.jupiterRemain +
    ' more Jupiter years. Good luck!'
  '</p>'
}


//front end
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#userAge").val());
    let userGender = $("#userGender input:radio:checked").val();
    let userSmoke = $("#userSmoke input:radio:checked").val();
    let userExercise = $("#userExercise input:radio:checked").val();
    console.log(userGender);
    let testAge = new userInput(userAge,userGender,userSmoke,userExercise);
    console.log(testAge);
    testAge.calculateAges();
    testAge.calculateExpectancy();
    testAge.calculateRemaining();
    testAge.outputMaker();
    $(".output").toggle();
    $(".output").html(testAge.output);
  });
});
