export default class UserData {
  constructor(age, gender, smoking, exercise) {
    this.age = age;
    this.gender = gender;
    this.smoking = smoking;
    this.exercise = exercise;
    this.earthAge = this.age;
    this.mercuryAge = this.mercuryConvert(this.earthAge);
    this.venusAge = this.venusConvert(this.earthAge);
    this.marsAge = this.marsConvert(this.earthAge);
    this.jupiterAge = this.jupiterConvert(this.earthAge);
    this.earthOver = (this.earthAge - this.earthExpect).toFixed(2);
    this.mercuryOver = this.mercuryConvert(this.earthOver);
    this.venusOver = this.venusConvert(this.earthOver);
    this.marsOver = this.marsConvert(this.earthOver);
    this.jupiterOver = this.jupiterConvert(this.earthOver);
    this.earthRemain = this.earthExpect - this.earthAge;
    this.mercuryRemain = this.mercuryConvert(this.earthRemain);
    this.venusRemain = this.venusConvert(this.earthRemain);
    this.marsRemain = this.marsConvert(this.earthRemain);
    this.jupiterRemain = this.jupiterConvert(this.earthRemain);
  }

  mercuryConvert(earthValue) {
    return (earthValue / .24).toFixed(2);
  }

  venusConvert(earthValue) {
    return (earthValue / .62).toFixed(2);
  }

  marsConvert(earthValue) {
    return (earthValue / 1.88).toFixed(2);
  }

  jupiterConvert(earthValue) {
    return (earthValue / 11.86).toFixed(2);
  }

  calculateAges() {
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
  }

  calculateExpectancy() {
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
  }

  calculateRemaining() {
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
  }
}
