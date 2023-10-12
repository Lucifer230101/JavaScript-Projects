let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let hDisplay = document.getElementById('hrs');
let mDisplay = document.getElementById('m');
let sDisplay = document.getElementById('s');

function displayTime(){
    let date = new Date();

    //Getting houers, min and sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hDisplay.innerText = hh;
    mDisplay.innerText = mm;
    sDisplay.innerText = ss;

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);