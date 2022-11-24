// let level = 6;
// let comturn = true;
// let playturn = false;
// let computerinput = [];
// let userinput = [];
// let on = true;
// let count = 1;
// const blue = document.getElementById("blue");
// const red = document.getElementById("red");
// const yellow = document.getElementById("yellow");
// const green = document.getElementById("green");
// const title = document.getElementById("level-title");
// // computerinput = computerinput + (Math.trunc(Math.random()*100)%4 + 1);
// const one = ()=>{
//     blue.style.backgroundColor = "lightskyblue";
//     count++;
// }
// const two = ()=>{
//     red.style.backgroundColor = "tomato";
//     count++;
// }
// const three = ()=>{
//     yellow.style.backgroundColor = "golden";
//     count++;
// }
// const four = ()=>{
//     green.style.backgroundColor = "lightgreen";
//     count++;
// }

// const clearcolor = ()=>{
//     setTimeout(()=>{
//         blue.style.backgroundColor = "blue";
//         red.style.backgroundColor = "red";
//         yellow.style.backgroundColor = "yellow";
//         green.style.backgroundColor = "green";
//         console.log(userinput)
//     },800)
// }

// const play = ()=>{
//     if(comturn){
//         for(let i=0;i<20;i++){
//             computerinput.push(Math.floor(Math.random()*100)%4 + 1);
//         }
//         console.log(computerinput);
//         const loop = setInterval(()=>{
//             if(loop==level){
//                 clearInterval(loop);
//             }
//             if(computerinput[level]==1) one();
//             if(computerinput[level]==2) two();
//             if(computerinput[level]==3) three();
//             if(computerinput[level]==4) four();
//         },800)
//         comturn = false;
//         playturn = true;
//         clearcolor();
//     } if(playturn){
//         console.log(userinput);
//         blue.addEventListener('click', ()=>{
//             blue.style.background = "lightskyblue";
//             setTimeout(()=>{
//                 clearcolor();
//             },200)
//             userinput.push(1);
//         })
//         red.addEventListener('click', ()=>{
//             red.style.background = "tomato";
//             setTimeout(()=>{
//                 clearcolor();
//             },200)
//             userinput.push(2);
//         })
//         yellow.addEventListener('click', ()=>{
//             yellow.style.background = "golden";
//             setTimeout(()=>{
//                 clearcolor();
//             },200)
//             userinput.push(3);
//         })
//         green.addEventListener('click', ()=>{
//             green.style.background = "lightgreen";
//             setTimeout(()=>{
//                 clearcolor();
//             },200)
//             userinput.push(4);
//         })
//         if(userinput[userinput.length-1] != computerinput[userinput.length-1]){
//             playturn = false;
//             comturn = false;
//             level = 1;
//             title.innerHTML = "Gameover";
//         }
      
//     }
// }
// if(on){
//     console.log("h1");
//     play();
// }

// // while (userinput == computerinput){
// //     level++;
// //     play();
// //     blue.onclick((e)=>{
// //         userinput = userinput + 1;
// //     })
// // }

// document.addEventListener('click',)

var sequenceMade=[];
var sequenceUser=[];
var audio = [new Audio("./sounds/green.mp3"), new Audio("./sounds/blue.mp3"), new Audio("./sounds/red.mp3"), new Audio("./sounds/yellow.mp3"), new Audio("./sounds/wrong.mp3")];
var levelCounter= 0; 
var level=0;

//Press key to start
/* green = 0, red= 1, yellow =2, blue=3 */

$(document).on("keydown", function(e){
    if (e.keyCode === 13){
    nextSequence();
    }
});


//This generates a random number and pushes it to the sequenceMade.
function nextSequence() {
 var randomNumber = Math.floor(Math.random()*4);
 sequenceMade.push(randomNumber); 
 showSequence(sequenceMade[sequenceMade.length - 1]);
 changeLevel();
 sequenceUser=[];
 
};

//This displays the color and sound of each option
function showSequence(element) {
    
    switch (element){
        case 0:
            audio[0].play();
              $("#green").addClass("dissapear");
              setTimeout(function(){
                  $("#green").removeClass("dissapear");
              },250)
              break;
        case 1:
            audio[2].play();
            $("#red").addClass("dissapear");
              setTimeout(function () {
                  $("#red").removeClass("dissapear");
              }, 250)
            break;
        case 2:
            audio[3].play();
              $("#yellow").addClass("dissapear");
              setTimeout(function () {
                $("#yellow").removeClass("dissapear");
              }, 250)
            break;
        case 3:
            audio[1].play();
            $("#blue").addClass("dissapear");
              setTimeout(function () {
                  $("#blue").removeClass("dissapear");
              }, 250)
            break;
    }
 };

function changeLevel() {
    levelCounter++;
    $("#level-title").text(`Level: ${levelCounter}`);
    
};

//This converts the clicks into numbers and pushes it to a new array.
$(".btn").click(function(e){
        var userClicked= $(this).attr("id");
        switch(userClicked){
            case "green":
                sequenceUser.push(0);
                showSequence(0);
                break;

            case "red":
                sequenceUser.push(1);
                showSequence(1);
                break;
            
            case "yellow":
                sequenceUser.push(2);
                showSequence(2);
                break;
            
            case "blue":
                sequenceUser.push(3);
                showSequence(3);
                break;
            }
        checkSequence(sequenceUser.length-1);
              
    });     


       
//This checks if the sequences is correct so far
function checkSequence(indexOfArray) { 

    if(sequenceUser[indexOfArray] === sequenceMade[indexOfArray]){
       
      if(sequenceMade.length === sequenceUser.length) {
           setTimeout(function () {
            nextSequence();
           }, 1000);
        }
    } else {
      launchError();
    }
}
// Launches error sequence
function launchError(){
$("body").css("background-color", "red")
$("h1").text("Game Over");
    setTimeout(function () {
        $("h1").text("Press Enter Key to start");
        $("body").css("background-color", "#011F3F");
    }, 1500)
audio[4].play();
levelCounter=0;
sequenceMade = [];
}