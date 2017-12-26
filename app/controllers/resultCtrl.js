angular
    .module('javascriptApp')
    .controller('resultCtrl', ResultController);

ResultController.$inject = ['DataService', 'QuizMetrics'];

function ResultController(DataService, QuizMetrics) {
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.setActiveQuestion = setActiveQuestion;
   // vm.setAnswerClass = setAnswerClass;
    vm.correctAnswers = DataService.correctAnswer;
    vm.startQuiz = startQuiz;
    vm.activeQuestion = 0;
    //var selectedAnswer = DataService.quizQuestions[vm.activeQuestion].selected;

    function startQuiz() {
        QuizMetrics.resetQuiz();
    }

    /*function setAnswerClass(index) {
        if (index === correctAnswers[vm.activeQuestion]) {
            return 'bg-success';
        }
        else if (index === selectedAnswer) {
            return 'bg-danger';
        }
    }*/

    function setActiveQuestion(index) {
        vm.activeQuestion = index;
    }
}