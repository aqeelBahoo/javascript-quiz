angular
    .module('javascriptApp')
    .factory('DataService', DataService)

function DataService() {
    var dataObj = {
        'quizQuestions': quizQuestions,
        'correctAnswer': correctAnswer
    };
    return dataObj;
};

var quizQuestions = [
    {
        'text': 'Inside which HTML element do we put the JavaScript?',
        'possibilities': [
            {
                answer: '<scripting>'
            },
            {
                answer: '<js>'
            },
            {
                answer: '<script>'
            },
            {
                answer: '<javascript>'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'Where is the correct place to insert a JavaScript?',
        'possibilities': [
            {
                answer: 'The <head> section'
            },
            {
                answer: 'The <body> section'
            },
            {
                answer: 'Both the <head> section and the <body> section are correct'
            },
            /*{
                answer: ' '
            }*/
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'What is the correct syntax for referring to an external script called "xxx.js"?',
        'possibilities': [
            {
                answer: '<script href="xxx.js">'
            },
            {
                answer: '<script name="xxx.js">'
            },
            {
                answer: '<script src="xxx.js">'
            },
            /*{
                answer: ' '
            }*/
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'The external JavaScript file must contain the <script> tag.',
        'possibilities': [
            {
                answer: 'True'
            },
            {
                answer: 'False'
            },
            /*{
                answer: ' '
            },
            {
                answer: ' '
            }*/
        ],
        selected: null,
        correct: null
    }
    , {
        'text': 'How do you write "Hello World" in an alert box?',
        'possibilities': [
            {
                answer: 'msg("Hello World")'
            },
            {
                answer: 'alertBox("Hello World")'
            },
            {
                answer: 'msgBox("Hello World")'
            },
            {
                answer: 'alert("Hello World")'
            }
        ],
        selected: null,
        correct: null
    },
    /*{
        'text': 'How do you create a function in JavaScript?',
        'possibilities': [
            {
                answer: 'function:myFunction()'
            },
            {
                answer: 'function = myFunction()'
            },
            {
                answer: 'function myFunction()'
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': ' How do you call a function named "myFunction"?',
        'possibilities': [
            {
                answer: 'myFunction()'
            },
            {
                answer: 'call function myFunction()'
            },
            {
                answer: 'call myFunction()'
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How to write an IF statement in JavaScript?',
        'possibilities': [
            {
                answer: ' if i = 5 then'
            },
            {
                answer: 'if (i == 5)'
            },
            {
                answer: 'if i == 5 then'
            },
            {
                answer: 'if i = 5'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'possibilities': [
            {
                answer: 'if i <> 5'
            },
            {
                answer: 'if i =! 5 then'
            },
            {
                answer: 'if (i != 5)'
            },
            {
                answer: 'if (i <> 5)'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How does a WHILE loop start?',
        'possibilities': [
            {
                answer: 'while (i <= 10)'
            },
            {
                answer: 'while i = 1 to 10'
            },
            {
                answer: 'while (i <= 10; i++)'
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How does a FOR loop start?',
        'possibilities': [
            {
                answer: 'for (i = 0; i <= 5; i++)'
            },
            {
                answer: 'for (i <= 5; i++)'
            },
            {
                answer: 'for i = 1 to 5'
            },
            {
                answer: 'for (i = 0; i <= 5)'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How can you add a comment in a JavaScript?',
        'possibilities': [
            {
                answer: '//This is a comment'
            },
            {
                answer: '<!--This is a comment-->'
            },
            {
                answer: "'This is a comment"
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'What is the correct way to write a JavaScript array?',
        'possibilities': [
            {
                answer: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
            },
            {
                answer: 'var colors = ["red", "green", "blue"]'
            },
            {
                answer: 'var colors = "red", "green", "blue"'
            },
            {
                answer: 'var colors = (1:"red", 2:"green", 3:"blue")'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How do you round the number 7.25, to the nearest integer?',
        'possibilities': [
            {
                answer: 'round(7.25)'
            },
            {
                answer: 'Math.round(7.25)'
            },
            {
                answer: 'Math.rnd(7.25)'
            },
            {
                answer: 'rnd(7.25)'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How do you find the number with the highest value of x and y?',
        'possibilities': [
            {
                answer: 'Math.max(x, y)'
            },
            {
                answer: 'Math.ceil(x, y)'
            },
            {
                answer: 'ceil(x, y)'
            },
            {
                answer: 'top(x, y)'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        'possibilities': [
            {
                answer: 'w2 = window.new("http://www.w3schools.com")'
            },
            {
                answer: 'w2 = window.open("http://www.w3schools.com")'
            },
            {
                answer: ' '
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'Which event occurs when the user clicks on an HTML element?',
        'possibilities': [
            {
                answer: 'onmouseover'
            },
            {
                answer: 'onclick'
            },
            {
                answer: 'onmouseclick'
            },
            {
                answer: 'onchange'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'How do you declare a JavaScript variable?',
        'possibilities': [
            {
                answer: 'var carName'
            },
            {
                answer: 'v carName'
            },
            {
                answer: 'variable carName'
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'Which operator is used to assign a value to a variable?',
        'possibilities': [
            {
                answer: '*'
            },
            {
                answer: '='
            },
            {
                answer: 'x'
            },
            {
                answer: '-'
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'What will the following code return: Boolean(10 > 9)',
        'possibilities': [
            {
                answer: 'NaN'
            },
            {
                answer: 'true'
            },
            {
                answer: 'false'
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    },
    {
        'text': 'Is JavaScript case-sensitive?',
        'possibilities': [
            {
                answer: 'Yes'
            },
            {
                answer: 'No'
            },
            {
                answer: ' '
            },
            {
                answer: ' '
            }
        ],
        selected: null,
        correct: null
    }*/
];
var correctAnswer = [2, 2, 2, 1, 3, 2, 0, 1, 2, 0, 0, 0, 1, 1, 0, 1, 2, 0, 1, 1, 0];