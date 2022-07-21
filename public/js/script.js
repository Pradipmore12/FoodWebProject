function submit(){
    let submit=document.getElementById("sub");
    submit.addEventListener('mousedown',function(){
        submit.style.backgroundColor="red";

    });
    submit.addEventListener('mouseup',function(){
        submit.style.backgroundColor="rgb(255, 91, 27)";

    });
    
    function greet(){
       alert("Ordered Successfully");
    }
    setTimeout(greet,1000);
}

