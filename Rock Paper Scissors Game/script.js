function playGame(param){
    let userChoose = param.id   
    let randomNumber = Math.floor(Math.random()*3)
    let computerChoose = ["rock","paper","scissors"][randomNumber]
    

    console.log(userChoose);
    console.log(randomNumber);
    console.log(computerChoose);

    let gamePoint = {
        "rock" : {"scissors":1,"rock":0.5,"paper":0},
        "paper" : {"scissors":0,"rock":1,"paper":0.5},
        "scissors" : {"scissors":0.5,"rock":0,"paper":1}
    }

    let userPoint = gamePoint[userChoose][computerChoose]

    console.log("ss "+userPoint);

    let recordImage = {
        "rock" : document.getElementById("rock").src,
        "paper" :  document.getElementById("paper").src ,
        "scissors" : document.getElementById("scissors").src ,
    }

    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissors").remove()

    let userImage = document.createElement("img")
    let computerImage = document.createElement("img")
    let resultMessage = document.createElement("div")

    userImage.src = recordImage[userChoose]
    computerImage.src = recordImage[computerChoose]

    document.getElementById("container").appendChild(userImage)
    document.getElementById("container").appendChild(computerImage)
    document.getElementById("result").append(resultMessage)

    if(userPoint == 0){
        resultMessage.innerHTML = "You Have Lost Computer Win"
        resultMessage.style.color = "red"
    }else if(userPoint == 0.5){
        resultMessage.innerHTML = "You Have The Same Score"
        resultMessage.style.color = "blue"
    }else {
        resultMessage.innerHTML = "You Have Win"
        resultMessage.style.color = "green"
    }

}