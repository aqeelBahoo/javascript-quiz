/**
 * Created by Home on 12/21/2017.
 */
angular.module('javascriptApp')
    .controller('quizCtrl', QuizController);

//QuizController.$inject = ['DataService', 'QuizMetrics', '$state', '$stateParams'];

function QuizController(DataService, QuizMetrics, $state, $stateParams) {
    console.log($stateParams);

    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.selectedAnswer = selectedAnswer;
    vm.answeredQuestion = answeredQuestion;
    vm.setActiveQuestion = setActiveQuestion;
    vm.activeResult = activeResult;
    if ($stateParams.id > 0 && $stateParams.id <= DataService.quizQuestions.length) {
        vm.activeQuestion = Number($stateParams.id - 1);
    }
    //vm.activeQuestion = QuizMetrics.activeQuestion;
    // console.log(vm.activeQuestion);
    //$location.path('quiz({id: 10001})');

    // vm.finalize = QuizMetrics.finalize;
    // vm.error = QuizMetrics.error;
    var quizLength = DataService.quizQuestions.length;
    var numAnsweredQuestion = QuizMetrics.numAnsweredQuestion;

    function setActiveQuestion(index) {
        if (index === undefined) {
            var breakout = false;
            while (!breakout) {
                //  QuizMetrics.activeQuestion = vm.activeQuestion < quizLength - 1 ? ++vm.activeQuestion : 0;
                //  QuizMetrics.urlquestionNo =  QuizMetrics.activeQuestion +1;
                vm.activeQuestion = vm.activeQuestion < quizLength - 1 ? ++vm.activeQuestion : 0;

                // console.log('quizMetric ' + QuizMetrics.activeQuestion);
                //for url parameter
                //  $state.go('quiz', ({id: vm.activeQuestion}));

                if (vm.activeQuestion == 0) {
                    QuizMetrics.error = true;
                }
                if (DataService.quizQuestions[vm.activeQuestion].selected == null) {
                    breakout = true;
                }
            }
            // $state.go('quiz', ({id: QuizMetrics.urlquestionNo}));
            $state.go('quiz', ({id: vm.activeQuestion + 1}));
            // console.log('test ' + QuizMetrics.activeQuestion);//not exist
        }
        else {
            vm.activeQuestion = index;
            $state.go('quiz', ({id: index + 1}));
        }
    }

    function selectedAnswer(index) {
        DataService.quizQuestions[vm.activeQuestion].selected = index;
    }

    function answeredQuestion() {
        if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
            numAnsweredQuestion = ++QuizMetrics.numAnsweredQuestion;
            if (numAnsweredQuestion >= quizLength) {
                for (var i = 0; i < quizLength; i++) {
                    if (DataService.quizQuestions[i].selected == null) {
                        setActiveQuestion(i);
                        return;
                    }
                }
                QuizMetrics.finalize = true;
                QuizMetrics.error = false;
                return;
            }
        }
        setActiveQuestion();
    }

    function activeResult() {
        QuizMetrics.activeResult();
    }
}