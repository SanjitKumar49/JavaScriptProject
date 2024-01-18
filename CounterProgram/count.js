let count=0; 
document.getElementById("decr").onclick=function(){
    count--;
    document.getElementById("countl").innerHTML=count;
}
document.getElementById("incr").onclick=function(){
    count++;
    document.getElementById("countl").innerHTML=count;
}

document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("countl").innerHTML=count;
}


