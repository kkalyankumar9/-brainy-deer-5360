let image=document.querySelector(".poster");
let translate=0;
setInterval(()=>{
    if(translate>=0 && translate<400){
        translate+=100
    }
    else{
        translate=0
    }

    image.style.transform="translateX(${-translate}%)"
    
},2000)