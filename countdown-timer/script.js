const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newBegg = '10 OCt 2023';

function countdown(){
    const newBeggDate = new Date(newBegg);
    const currentDate = new Date();

    const totalseconds = (newBeggDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hrs = Math.floor(totalseconds/3600) % 24;
    const min = Math.floor(totalseconds/60) % 60;
    const sec = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hrs;
    minsEl.innerHTML = min;
    secondsEl.innerHTML = sec;



}

countdown();

setInterval(countdown, 1000);