

console.log("JS READY")

var questions = [
    q0 = {
        "text": "question 0",
        "a": [  "answer 0",
                "answer 1",
                "answer 2"],
        "correctA": "0"
    },
    q1 = {
        "text": "question 1",
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
var anySelected = false;

console.log(questions[0].a[0]);

console.log(currentQuestion);

function writeQuestion(){
    $("#q").empty()
    $("#q").text(questions[currentQuestion].text);
    anySelected = false;
};

function writeAnswers(){
    $("#a").empty()
    for(i=0;i<questions[currentQuestion].a.length;i++){
    var answerDiv = $("<div>");
    answerDiv.attr("id",i);
    answerDiv.attr("class","answerDiv");
    answerDiv.text(questions[currentQuestion].a[i]);
    $("#a").append(answerDiv);
    };
};

function score(a){
    (a)++;
    currentQuestion++;
    writeQuestion();
    writeAnswers();
    game();
}


writeQuestion();
writeAnswers();
game();

function game(){

$(".answerDiv").click(function(){
    console.log("click")
    $(".answerDiv").attr("class","answerDiv")
    selectedAnswer = this
    console.log(selectedAnswer)
    $(selectedAnswer).addClass("selected")
    anySelected = true;
    console.log(selectedAnswer.id)
    console.log(questions[currentQuestion].correctA)

});

$("#s").click(function(){
    if(anySelected){
        if(selectedAnswer.id === questions[currentQuestion].correctA){
            console.log("Correct!");
            score(correct);
            console.log(correct)
        }
        else{
            console.log("WRONG")
        }
        
    }

});
};