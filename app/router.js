angular.module('javascriptApp')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('home')
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: function ($scope, $location, $state) {

                    //  $state.go('quiz')
                    /*$state.go('quiz', ({
                     id: 1010,
                     ads: "sdas",
                     quixData: {}}
                     ));*/
                }
            })
            .state('quiz', {
               /* params: {
                    te: {},
                    ads: ""
                },*/
                url: '/quiz/:id',
                templateUrl: 'views/quiz.html',
                controller: 'quizCtrl',
                controllerAs: 'quiz',
                /*resolve: {
                    ttr: function () {
                        //
                        var quizData = {};
                        if ($stateParams.quixData) {
                            quizData = $stateParams.queie;
                        }
                        else {
                            //Call http request
                            return "asds";
                        }

                        return quizData;

                    },
                    asssd: function () {

                    }
                }*/
            })
            .state('result', {
                url: '/result',
                templateUrl: 'views/result.html',
                controller: 'resultCtrl',
                controllerAs: 'result'
            })
        /*.state('partyDetail', {
         url: '/party/:id/:location',
         template : ' this is party detail',
         controller: function($stateParams){
         console.log($stateParams);
         }
         })*/

        //$locationProvider.html5Mode(true);
    })