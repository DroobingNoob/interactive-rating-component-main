var num1=0;
var num2=0;
var num3=0;
var num4=0;
var num5=0;
var but=0;

document.getElementById('1').addEventListener("click",function eventResp(){
    if(num1==0){
        document.getElementById('1').classList.add("num-chosen");
        num1=1;
    }
    else{
        document.getElementById('1').classList.remove("num-chosen");
        num1=0;
    }
 
});
document.getElementById('2').addEventListener("click",function eventResp(){
    if(num2==0){
        document.getElementById('2').classList.add("num-chosen");
        num2=1;
    }
    else{
        document.getElementById('2').classList.remove("num-chosen");
        num2=0;
    }
 
});
document.getElementById('3').addEventListener("click",function eventResp(){
    if(num3==0){
        document.getElementById('3').classList.add("num-chosen");
        num3=1;
    }
    else{
        document.getElementById('3').classList.remove("num-chosen");
        num3=0;
    }
 
});
document.getElementById('4').addEventListener("click",function eventResp(){
    if(num4==0){
        document.getElementById('4').classList.add("num-chosen");
        num4=1;
    }
    else{
        document.getElementById('4').classList.remove("num-chosen");
        num4=0;
    }
 
});
document.getElementById('5').addEventListener("click",function eventResp(){
    if(num5==0){
        document.getElementById('5').classList.add("num-chosen");
        num5=1;
    }
    else{
        document.getElementById('5').classList.remove("num-chosen");
        num5=0;
    }
 
});

document.getElementById("butt").onclick= function nextPage()
{
console.log("1");
document.getElementById("conti").classList.add("cont0");
document.getElementById('conti1').classList.remove("cont1");

if(num1==1){
    but++;
}
if(num2==1){
    but++;
}
if(num3==1){
    but++;
}
if(num4==1){
    but++;
}
if(num5==1){
    but++;
}

console.log(but);

document.getElementById("rate").innerHTML="You selected " + but + " out of 5"

};


