import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import UserData from './UserData.js';

//custom function
function outputMaker(earthRemain, mercuryRemain,venusRemain, jupiterRemain) {
  return ('<p>You can expect to live '+
  earthRemain +
  ' more Earth years, ' +
  mercuryRemain +
  ' more Mercury years, ' +
  venusRemain +
  ' more Venus years, and ' +
  jupiterRemain +
  ' more Jupiter years. Good luck!' +
  '</p>'
)
}

//front end
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#userAge").val());
    let userGender = $("#userGender input:radio:checked").val();
    let userSmoke = $("#userSmoke input:radio:checked").val();
    let userExercise = $("#userExercise input:radio:checked").val();
    let testAge = new UserData(userAge,userGender,userSmoke,userExercise);
    testAge.calculateExpectancy();
    testAge.calculateRemaining();
    $(".output").toggle();
    $(".output").html(outputMaker(testAge.earthRemain, testAge.mercuryRemain,testAge.venusRemain, testAge.jupiterRemain));
  });
});
