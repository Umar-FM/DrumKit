for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var sound = getComputedStyle(this).getPropertyValue('background-image').toString().split('\\').pop().split('/').pop().split('.')[0];
        
        playSound(sound);
        buttonAnimation(this.innerHTML)
    })
    
}

document.addEventListener('keydown',function(e){
    
    var sound = getComputedStyle(document.getElementsByClassName(e.key)[0]).getPropertyValue('background-image').toString().split('\\').pop().split('/').pop().split('.')[0];
    
    playSound(sound);
    buttonAnimation(e.key)
})

function playSound(sound){
    var audio = new Audio('./sounds/'+sound+'.mp3')
    audio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}