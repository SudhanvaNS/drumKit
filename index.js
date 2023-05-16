
    function handleClick(key){
        switch (key) {
            case 'a':   var audio=new Audio("resources\\music\\tom-1.mp3");
                        audio.play();
                        break;
            case 's':   var audio=new Audio("resources\\music\\tom-2.mp3");
                        audio.play();
                        break;
            case 'd':   var audio=new Audio("resources\\music\\tom-3.mp3");
                        audio.play();
                        break;
            case 'f':   var audio=new Audio("resources\\music\\tom-4.mp3");
                        audio.play();
                        break;
            case 'g':   var audio=new Audio("resources\\music\\kick-bass.mp3");
                        audio.play();
                        break;
            case 'h':   var audio=new Audio("resources\\music\\crash.mp3");
                        audio.play();
                        break;
            case 'j':   var audio=new Audio("resources\\music\\snare.mp3");
                        audio.play();
                        break;
            default:console.log();
                break;
           }
            
    }
    for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonPressed=this.innerHTML;
        handleClick(buttonPressed)
       
        
       })
    }
document.addEventListener("keydown", function (event){
    handleClick(event.key);
});
