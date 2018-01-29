$(document).ready(function() {
  // Question 1
  $("#quiz .question1-div .q1-text").text(questions.question1.questionNumber + questions.question1.question);
  $("#quiz .question1-div .q1-a1").text(questions.question1.answer1);
  $("#quiz .question1-div .q1-a2").text(questions.question1.answer2);
  $("#quiz .question1-div .q1-a3").text(questions.question1.answer3);
  $("#quiz .question1-div .q1-a4").text(questions.question1.answer4);
  // Question 2
  $("#quiz .question2-div .q2-text").text(questions.question2.questionNumber + questions.question2.question);
  $("#quiz .question2-div .q2-a1").text(questions.question2.answer1);
  $("#quiz .question2-div .q2-a2").text(questions.question2.answer2);
  $("#quiz .question2-div .q2-a3").text(questions.question2.answer3);
  $("#quiz .question2-div .q2-a4").text(questions.question2.answer4);
  // Question 3
  $("#quiz .question3-div .q3-text").text(questions.question3.questionNumber + questions.question3.question);
  $("#quiz .question3-div .q3-a1").text(questions.question3.answer1);
  $("#quiz .question3-div .q3-a2").text(questions.question3.answer2);
  $("#quiz .question3-div .q3-a3").text(questions.question3.answer3);
  $("#quiz .question3-div .q3-a4").text(questions.question3.answer4);
  // Question 4
  $("#quiz .question4-div .q4-text").text(questions.question4.questionNumber + questions.question4.question);
  $("#quiz .question4-div .q4-a1").text(questions.question4.answer1);
  $("#quiz .question4-div .q4-a2").text(questions.question4.answer2);
  $("#quiz .question4-div .q4-a3").text(questions.question4.answer3);
  $("#quiz .question4-div .q4-a4").text(questions.question4.answer4);
  // Question 5
  $("#quiz .question5-div .q5-text").text(questions.question5.questionNumber + questions.question5.question);
  $("#quiz .question5-div .q5-a1").text(questions.question5.answer1);
  $("#quiz .question5-div .q5-a2").text(questions.question5.answer2);
  $("#quiz .question5-div .q5-a3").text(questions.question5.answer3);
  $("#quiz .question5-div .q5-a4").text(questions.question5.answer4);


// End The Game early

$("#end-game").click(function(){
  game.endGame();
});

});

// function makeQuestion(question){
//   var qText = this.questionNumber + this.question;
//   var answer1 = this.answer1;
//   var answer2 = this.answer2;
//   var answer3 = this.answer3;
//   var answer4 = this.answer4;
//
// }



// Objects for correct answers = keys
//
// var cMajor = {
//       tonicChord: "C Major",
//       preDominant: ["F Major", "d Minor"],
//       Dominant: ["G Major, Bdim7"],
//       relativeMinor: ["a Minor"],
//       mediant: ["e minor"],
//       third: "E",
//       fifth: "G",
//       flatSeven: "Bb"
// },
//   gMajor = {
//       tonicChord: "G Major",
//       preDominant: ["C Major", "a Minor"],
//       Dominant: ["D Major, F#dim7"],
//       relativeMinor: ["e Minor"],
//       mediant: ["b minor"],
//       third: "B",
//       fifth: "D",
//       flatSeven: "F"
//   },
//   bFlatMajor = {
//       tonicChord: "Bb Major",
//       preDominant: ["Eb Major", "c Minor"],
//       Dominant: ["F Major, Adim7"],
//       relativeMinor: ["g Minor"],
//       mediant: ["d minor"],
//       third: "D",
//       fifth: "F",
//       flatSeven: "Ab"
//     };

// Objects for wrong answers

// var cMajorWrong = {
//       tonicChord: "G Major"
//       preDominant: ["C Major", "a Minor"],
//       Dominant: ["D Major, F#dim7"],
//       relativeMinor: ["e Minor"],
//       mediant: ["b minor"],
//       third: "B",
//       fifth: "D",
//       flatSeven: "F"
//     },
//     bFlatMajorWrong = {
//       tonicChord: "G Major"
//       preDominant: ["C Major", "a Minor"],
//       Dominant: ["D Major, F#dim7"],
//       relativeMinor: ["e Minor"],
//       mediant: ["b minor"],
//       third: "B",
//       fifth: "D",
//       flatSeven: "F"
//     },
//     GMajorWrong = {
//       tonicChord:
//       preDominant: ["Eb Major", "c Minor"],
//       Dominant: ["F Major, Adim7"],
//       relativeMinor: ["g Minor"],
//       mediant: ["d minor"],
//       third: "D",
//       fifth: "F",
//       flatSeven: "Ab"
//     };



var score = {
  totalQuestions: 5,
  correct: 0,
  wrong: 0
};

var answerMessages = {
  correct: "You got it!",
  question1Wrong: 'Sorry, the correct answer was "F"',
  question2Wrong: 'Sorry, the correct answer was "C, E, and G"',
  question3Wrong: 'Sorry, the correct answer was "e minor"',
  question4Wrong: 'Sorry, the correct answer was "F Major and G Major"',
  question5Wrong: 'Sorry, the correct answer was "C#"'
};

var questions = {
  question1: {
    questionNumber: "Question 1: ",
    question: "What is the 5th note in a Bb major scale?",
    answer1: "Eb",
    answer2: "F#",
    answer3: "D",
    answer4: "F",
    correctAnswer: "answer4",
    selectedAnswer: '',
    isCorrect: false,
    feedback: ''
  },
  question2: {
    questionNumber: "Question 2: ",
    question: "What three notes make up a C Major chord?",
    answer1: "C, E, and G",
    answer2: "C, G, and A",
    answer3: "C, F, and A",
    answer4: "C, Eb, and G",
    correctAnswer: "answer1",
    selectedAnswer: '',
    isCorrect: false,
    feedback: ''
  },
  question3: {
    questionNumber: "Quesiton 3: ",
    question: "What is the relative minor of the G Major chord?",
    answer1: "a minor",
    answer2: "d minor",
    answer3: "g minor",
    answer4: "e minor",
    correctAnswer: "answer4",
    selectedAnswer: '',
    isCorrect: false,
    feedback: ''
  },
  question4: {
    questionNumber: "Question 4: ",
    question: "If C Major is your tonic, what are " + "the fourth, the fifth?",
    answer1: "the minor fall and the major lift",
    answer2: "the baffled king composing hallelujah",
    answer3: "A minor and F Major",
    answer4: "F Major and G Major",
    correctAnswer: "answer4",
    selectedAnswer: '',
    isCorrect: false,
    feedback: ''
  },
  question5: {
    questionNumber: "Question 5: ",
    question: "Which of the following is NOT in a G Major Scale?",
    answer1: "F#",
    answer2: "C#",
    answer3: "A",
    answer4: "C",
    correctAnswer: "answer2",
    selectedAnswer: '',
    isCorrect: false,
    feedback: ''
  }
};

// Game Logic

var game = {
  // Submit the answers selected
  submitAnswers: function(){
    questions.question1.selectedAnswer = $('input[name=question1]:checked').val();
    questions.question2.selectedAnswer = $('input[name=question2]:checked').val();
    questions.question3.selectedAnswer = $('input[name=question3]:checked').val();
    questions.question4.selectedAnswer = $('input[name=question4]:checked').val();
    questions.question5.selectedAnswer = $('input[name=question5]:checked').val();
    return questions
  },
  // check if an individual answer is right
  checkAnswer: function(questionNum){
      var questionNum = "question" + questionNum;
      var answerNum = questionNum + "Wrong";
    var guess = questions[questionNum]["selectedAnswer"];
    var answer = questions[questionNum]["correctAnswer"];

    if(guess === answer){
      questions[questionNum]["isCorrect"] =  true;
      questions[questionNum]["feedback"] = answerMessages.correct
      score.correct += 1;
    } else {
      questions[questionNum]["feedback"] = answerMessages[answerNum];
      score.wrong += 1;
    };
  },
  // check if all answers are right
  checkAllAnswers: function(){
    for (var i = 1; i < 6; i++) {
      game.checkAnswer(i);
    };
    return questions
  },
  updateText: function(){
      $("#q1-message").text(questions.question1.feedback);
      $("#q2-message").text(questions.question2.feedback);
      $("#q3-message").text(questions.question3.feedback);
      $("#q4-message").text(questions.question4.feedback);
      $("#q5-message").text(questions.question5.feedback);
      $("#right-answers").text(score.correct);
    },


  endGame: function(){
    $("input[type=radio]").attr('disabled', true);
      game.submitAnswers();
      game.checkAllAnswers();
      game.updateText();
    },
    startGame: function(){
      $("#quiz").show();
    },
    init: function(){
      game.startGame();
    }
  };
