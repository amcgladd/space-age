# Space Age calculator

#### Space Age calculator, 5 October, 2018

#### By By AJ Mcgladdery

## Description

This program calculates a user's age on various neighboring planets. It also returns a user's remaining life expectancy based on gender, current age, smoking habits, and exercise. This value is returned for earth years as well as years of neighboring planets. Finally, if user's age exceeds their life expectancy, program returns how much years they have exceed their life expectancy in earth years as well as years of neighboring planets.

## Specs

* 1) The program returns false to non-date input.
  * Example input: apple
  * Example output: apple

* 2) The program returns age in earth years based on input.
  * Example input: 33
  * Example output: 33 earth years

*  3) The program returns age in Mercury years.
    * Example input: 33
    * Example output: 137.50 Mercury years

* 4) The program returns age in Venus years.
  * Example input: 33
  * Example output: 53.23 Venus years

* 5) The program returns age in Mars years.
    * Example input: 33
    * Example output: 17.55 Mars years

* 6) The program returns age in Jupiter years.
  * Example input: 33
  * Example output: 2.78 Jupiter years

* 7) The program returns how many years a user has to live in earth years.
  * Example input: 33 earth years old / female / no smoke / exercise
  * Example output: 51 earth years remaining

* 8) The program returns how many years a user has to live in mercury years.
  * Example input: 33 earth years old / female / no smoke / exercise
  * Example output: 212.5 Mercury years

* 9) The program returns how many years a user has to live in Venus years.
  * Example input: 33 earth years old / female / no smoke / exercise
  * Example output: 82.26 Venus years

* 10) The program returns how many years a user has to live in Mars years.
  * Example input: 33 earth years old / female / no smoke / exercise
  * Example output: 27.13 Mars years

* 11) The program returns how many years a user has to live in Jupiter years.
  * Example input: 33 earth years old / female / no smoke / exercise
  * Example output: 4.30 Jupiter years

* 12) If user age exceeds life expectancy, program returns number of Earth years they have lived past life expectancy.
  * Example input: 100 Earth years old / female / no smoke / exercise
  * Example output: 16.00 Earth years past expectancy

* 13) If user age exceeds life expectancy, program returns number of Mercury years they have lived past life expectancy.
  * Example input: 100 Earth years old  / female / no smoke / exercise
  * Example output: 66.67 Mercury years past expectancy

* 14) If user age exceeds life expectancy, program returns number of Venus years they have lived past life expectancy.
  * Example input: 100 Earth years old  / female / no smoke / exercise
  * Example output: 25.81 Venus years past expectancy

* 15) If user age exceeds life expectancy, program returns number of Mars years they have lived past life expectancy.
  * Example input: 100 Earth years old  / female / no smoke / exercise
  * Example output: 8.51 Mars years past expectancy

* 16) If user age exceeds life expectancy, program returns number of Jupiter years they have lived past life expectancy.
  * Example input: 100 Earth years old / female / no smoke / exercise
  * Example output: 1.35 Jupiter years past expectancy

* 17) Additional user story
  * Example input: 33 year old / male / smoke / no exercise
  * Example output: 34 earth years remaining


## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **AJ Mcgladdery**
