let returnJsonData 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        returnJsonData = JSON.parse(xhttp.responseText)
        console.log(returnJsonData);
        bringQuestion()
    }

    return returnJsonData
};
xhttp.open("GET", "./data.json", true);
xhttp.send();


let questionArea = document.getElementById("questionArea")
let question = document.getElementById("question")
let choose = document.getElementsByName("choose")
let quiz = document.getElementById("quiz")

let expA = document.getElementById("expA")
let expB = document.getElementById("expB")
let expC = document.getElementById("expC")
let expD = document.getElementById("expD")

let sent = document.getElementById("sent")

let point = 0
let questionOrder = 0

function clearChoose(){
    choose.forEach((chs) => chs.checked = false)
}

function bringQuestion(){
    clearChoose()

    let nextQuestion = returnJsonData.questions[questionOrder]

    question.innerHTML = nextQuestion.question

    expA.innerText = nextQuestion.A
    expB.innerText = nextQuestion.B
    expC.innerText = nextQuestion.C
    expD.innerText = nextQuestion.D

}


function getAnswer(){
    let choosed 

    choose.forEach(chs => {
        if(chs.checked){
            choosed = chs.id
        }
    })
    return choosed
}

sent.addEventListener("click",() => {
    let choosed = getAnswer()
    console.log(choosed);

    if(choosed){
        if(choosed == returnJsonData.questions[questionOrder].correctAnswer){
            point++
        }
    }
    questionOrder++

    console.log(questionOrder);
    console.log(point);

    if(questionOrder < returnJsonData.questions.length){
        bringQuestion()
    }else{
        quiz.innerHTML = `
            Your point is ${point} out of ${returnJsonData.questions.length}
            <button onclick="location.reload()">Play Again</button>
        `
    }
})

