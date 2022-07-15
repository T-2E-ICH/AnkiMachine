function ShowAnswer(number){
    document.getElementById("a"+number).style.visibility="visible";
    document.getElementById("b"+number).onclick="HideAnswer("+number+")";
    
}
function HideAnswer(number){
    document.getElementById("a"+number).style.visibility="hidden";
    document.getElementById("b"+number).onclick="ShowAnswer("+number+")";
    
}
function Set(num){
    if(document.getElementById("a"+num).style.visibility=="visible")
    {
        document.getElementById("a"+num).style.visibility="hidden";
    }
    else
    {
        document.getElementById("a"+num).style.visibility="visible";
    }
}

function AllHide(){
    var i=0;
    for(i=0;i<200;i++){
        let num=i+1;
        document.getElementById("a"+num).style.visibility="hidden";
    }
    
}
function AllShow(){
    var i=0;
    for(i=0;i<200;i++){
        let num=i+1;
        document.getElementById("a"+num).style.visibility="visible";
    }
    
}