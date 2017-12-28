angular
    .module('javascriptApp')
    .controller('resultCtrl', ResultController);

ResultController.$inject = ['DataService', 'QuizMetrics'];

function ResultController(DataService, QuizMetrics) {
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.setActiveQuestion = setActiveQuestion;
    vm.correctAnswers = DataService.correctAnswer;
    vm.startQuiz = startQuiz;
    vm.activeQuestion = 0;

    function startQuiz() {
        QuizMetrics.resetQuiz();
    }
    function setActiveQuestion(index) {
        vm.activeQuestion = index;
    }
}