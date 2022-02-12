var no_of_buttons= document.querySelectorAll(".drum").length;

for (var i=0; i<no_of_buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
       var buttoninnerHTML=this.innerHTML;
        makesound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });
    
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){
    switch(key){
            case "f":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "r":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "p":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
            case "l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
            case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
            case "g":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            default:console.log(buttoninnerHTML);
        }
}

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
 }
