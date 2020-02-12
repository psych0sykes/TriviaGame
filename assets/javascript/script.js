

console.log("JS READY")

var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timeOut = 0;
var selectedAnswer;
var anySelected = false;
var intervalID = "null";
var clockRunning = true;
var clockTime = 11;
var questions = [
    q0 = {
        "text": "What color is lettuce?",
        "a": [  "Green",
                "Brown",
                "Black"],
        "correctA": "0"
    },
    q1 = {
        "text": "What should you put lettuce on?",
        "a": [  "A burger",
                "A peanut butter sandwitch",
                "Spaghetti and Meatballz"],
        "correctA": "0"
    },
    q3 = {
        "text": "Why do we eat lettuce?",
        "a": [  "For fat",
                "For muscle",
                "For mustache"],
        "correctA": "2"
    },
    q4 = {
        "text": "Where should I store my lettuce?",
        "a": [  "In a basket",
                "On your head",
                "In the fridge"],
        "correctA": "0"
    },
    q5 = {
        "text": "Why lettuce?",
        "a": [  "Because green",
                "Because leaf",
                "No more lettuce"],
        "correctA": "2"
    },
    last = {
        "text": "this is the end",
        a: [  "correct " + correct,
            "incorrect " + incorrect,
            "unanswered " + timeOut]}
];

// console.log(questions[0].a[0]);

// console.log(currentQuestion);

function writeQuestion(){
    $("#q").empty()
    $("#q").text(questions[currentQuestion].text);
    anySelected = false;
};

function writeAnswers(){
    questions[5].a = [  "correct " + correct,
    "incorrect " + incorrect,
    "unanswered " + timeOut]
    $("#a").empty()
    for(i=0;i<questions[currentQuestion].a.length;i++){
    var answerDiv = $("<div>");
    answerDiv.attr("id",i);
    answerDiv.attr("class","answerDiv");
    answerDiv.text(questions[currentQuestion].a[i]);
    $("#a").append(answerDiv);
    };
};

function count(){
    if(clockRunning === true){
    clockTime = clockTime - 1;
    $("#timer").text(clockTime);
    if(clockTime === 0){
        alert("time is up!")
        submit()
        stopTime()
    }
    }else{
        console.log("clock should be off")
    }

}

function stopTime(){
    clockTime = 11;
    console.log("clear")
    clearInterval(intervalID);
    clockRunning = false;
}

function score(x){
    switch(x){
        case 0:
            correct++;
        break;
        case 1:
            incorrect++;
        break;
        case 2:
            timeOut++;
        break;
    };
    currentQuestion++;
    console.log(currentQuestion)
    if(currentQuestion >= questions.length){
        console.log("END");
        stopTime();
    }
    else {
    writeQuestion();
    writeAnswers();
    game();
    };
}

function submit (){
    stopTime()
    if(anySelected){
        if(selectedAnswer.id === questions[currentQuestion].correctA){
            // console.log("Correct!");
            console.log(correct)
            score(0);
        }
        else{
            // console.log("WRONG")
            console.log(incorrect)
            score(1);
        };
        
    }
    else {
        // console.log("unanswered");
        console.log(timeOut);
        score(2)
    };
};

function clock(){
    if(clockRunning === true){
    intervalId = setInterval(count, 1000);
    console.log("START")
    }
};

$("#s").click(function(){
    submit();
    // console.log("click")
});

function game(){
    console.log(clockRunning)
    clockRunning = true
$(".answerDiv").click(function(){
    // console.log("click")
    $(".answerDiv").attr("class","answerDiv")
    selectedAnswer = this
    // console.log(selectedAnswer)
    $(selectedAnswer).addClass("selected")
    anySelected = true;
    // console.log(selectedAnswer.id)
    // console.log(questions[currentQuestion].correctA)
});
};

writeQuestion();
writeAnswers();
game();
clock();