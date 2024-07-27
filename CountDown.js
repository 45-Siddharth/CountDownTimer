let hoursEle = document.getElementById("hours");
let minuteEle = document.getElementById("minutes");
let secondEle = document.getElementById("seconds");

let restartEle = document.getElementById("Restart");
let stopEle = document.getElementById("Stop");
let resetEle = document.getElementById("Reset");

let uniqueId;
let sec=0,min=0,hour=0;

function start()
{
    if(sec===59)
    {
        sec=-1;
        if(min===59)
        {
            min=-1;
            hour = hour +1;
            if(hour<10)
            hoursEle.textContent = "0"+hour;
            else
            hoursEle.textContent = hour;
        }
        min = min +1;
        if(min<10)
        minuteEle.textContent = "0"+min;
        else
        minuteEle.textContent = min;
    }
    sec = sec+1;
    if(sec<10)
    secondEle.textContent = "0"+sec;
    else
    secondEle.textContent = sec;
}
uniqueId = setInterval(start,1000);

restartEle.addEventListener("click",function(event){
    clearInterval(uniqueId);
    sec=0;
    min=0;
    hour=0;
    secondEle.textContent = "00";
    minuteEle.textContent = "00";
    hoursEle.textContent = "00";
    uniqueId = setInterval(start,1000)
});

stopEle.addEventListener("click",function(event)
{
    clearInterval(uniqueId);
});

resetEle.addEventListener("click",function(event)
{
    clearInterval(uniqueId);
    sec=0;
    min=0;
    hour=0;
    secondEle.textContent = "00";
    minuteEle.textContent = "00";
    hoursEle.textContent = "00";
});

