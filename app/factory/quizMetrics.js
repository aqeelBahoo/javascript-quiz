angular.module('javascriptApp')
    .factory('QuizMetrics', QuizMetrics)

QuizMetrics.$inject = ['DataService'];

function QuizMetrics(DataService) {
    var quizObj = {
        result: result,
        DataService: DataService,
        resetQuiz: resetQuiz,
        percentage: percentage,
        userCorrectAnswer: 0
    };
    //   var correctAnswer = DataService.correctAnswer;
    //   var quizQuestions = quizObj.DataService.quizQuestions;
    return quizObj;

    function resetQuiz() {
        DataService.quizQuestions.forEach(function (quizQuestion) {
            quizQuestion.selected = null;
            quizQuestion.correct = null;
        })
        quizObj.userCorrectAnswer = 0;
    }

    function result() {
        for (var i = 0; i < quizObj.DataService.quizQuestions.length; i++) {
            var quizQuestion = quizObj.DataService.quizQuestions[i];
            if (quizQuestion.selected == DataService.correctAnswer[i]) {
                quizObj.userCorrectAnswer++;
                quizQuestion.correct = true;
            }
            else {
                quizQuestion.correct = false;
            }
        }
    }

    function percentage() {
        return quizObj.userCorrectAnswer / quizObj.DataService.quizQuestions.length * 100;
    }


}

