

console.log("JS READY")

var questions = [
    q0 = {
        "text": "question 0",
        "a": [  "answer 0",
                "answer 1",
                "answer 2"],
        "correctA": "0"
    }
]

var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timeOut = 0;
var selectedAnswer;

console.log(questions[0].a[0]);

console.log(currentQuestion);

function writeQuestion(){
    $("#q").text(questions[currentQuestion].text);
};

function writeAnswers(x){
    var answerDiv = $("<div>");
    answerDiv.attr("id",x);
    answerDiv.attr("selected",false);
    answerDiv.attr("class","answerDiv");
    answerDiv.text(questions[currentQuestion].a[x]);
    $("#a").append(questions[currentQuestion].a[x]);
};

writeQuestion();
writeAnswers(0);
    