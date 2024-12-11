var x = document.getElementById('btn'); 

function functionScroll(){ 
    if(document.body.scrollTop > 20|| document.documentElement.scrollTop > 20){ 
        x.style.display = 'block' 
    } 
    else{ 
        x.style.display = 'none' 
    } 
} 

window.onscroll = function(){ 
    functionScroll() 
} 

function topFunc(){ 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0 
}
