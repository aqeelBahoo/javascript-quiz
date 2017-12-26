/**
 * Created by Home on 12/21/2017.
 */
angular.module('javascriptApp')
    .controller('quizCtrl', QuizController);

//QuizController.$inject = ['DataService', 'QuizMetrics', '$state', '$stateParams'];

function QuizController(DataService, QuizMetrics, $state, $stateParams) {
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.selectedAnswer = selectedAnswer;
    vm.answeredQuestion = answeredQuestion;
    vm.setActiveQuestion = setActiveQuestion;
    vm.resultActive = resultActive;
    vm.activeQuestion = 0;
    //$location.path('quiz({id: 10001})');

    vm.finalize = false;
    vm.error = false;
    var quizLength = DataService.quizQuestions.length;
    var numAnsweredQuestion = 0;

    function setActiveQuestion(index) {
        if (index === undefined) {
            var breakout = false;
            while (!breakout) {
                vm.activeQuestion = vm.activeQuestion < quizLength - 1 ? ++vm.activeQuestion : 0;

                //for url parameter
              //  $state.go('quiz', ({id: vm.activeQuestion}));

                if (vm.activeQuestion == 0) {
                    vm.error = true;
                }
                if (DataService.quizQuestions[vm.activeQuestion].selected == null) {
                    breakout = true;
                }
            }
        }
        else {
            vm.activeQuestion = index;
        }
    }

    function selectedAnswer(index) {
        DataService.quizQuestions[vm.activeQuestion].selected = index;
    }

    function answeredQuestion() {
        if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
            numAnsweredQuestion++;
            if (numAnsweredQuestion >= quizLength) {
                for (var i = 0; i < quizLength; i++) {
                    if (DataService.quizQuestions[i].selected == null) {
                        setActiveQuestion(i);
                        return;
                    }
                }
                vm.finalize = true;
                vm.error = false;
                return;
            }
        }
        setActiveQuestion();
    }

    function resultActive() {
        QuizMetrics.result();
    }
}