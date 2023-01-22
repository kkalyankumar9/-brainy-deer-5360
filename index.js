let image=document.querySelector(".poster");
let translate=0;
setInterval(()=>{
    if(translate>=0 && translate<500){
        translate+=100
    }
    else{
        translate=0
    }

    image.style.transform=`translateX(${~translate}%)`
    
},5000)
 
function right(){
    if(translate<500){
        translate+=100
        image.style.transtion="1s";
        image.style.transform=`translateX(${-translate}%)`

    }
}

function left(){
    if(translate>0){
        translate-=100
        image.style.transtion="1s";
        image.style.transform=`translateX(${-translate}%)`

    }
}

