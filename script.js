function countdown(){
    let now = new Date();
    let eventDate = new Date(2020, 12, 25);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remainingTime = eventTime - currentTime;

    let s = Math.floor(remainingTime/1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;

    let second = document.getElementById("hero--countdown-sec");
    let minute = document.getElementById("hero--countdown-min");
    let hour = document.getElementById("hero--countdown-hour");
    let day = document.getElementById("hero--countdown-days");

    // loader variable
    let secondLoader = document.querySelector(".hero--countdown-loaderSec");
    let minuteLoader = document.querySelector(".hero--countdown-loaderMin");
    let hourLoader = document.querySelector(".hero--countdown-loaderHour");
    let dayLoader = document.querySelector(".hero--countdown-loaderDay");

    second.innerText = s;
    minute.innerText = m;
    hour.innerText = h;
    day.innerText = d;

    // loader style
    secondLoader.style.strokeDashoffset = Math.floor((250 - (250 * s) / 60));
    minuteLoader.style.strokeDashoffset = Math.floor((250 - (250 * m) / 60));
    hourLoader.style.strokeDashoffset = Math.floor((250 - (250 * h) / 24));
    dayLoader.style.strokeDashoffset = Math.floor((250 - (250 * d) / 11));

    setTimeout(countdown, 1000);
}

countdown();