let slowMin = new Date().getMinutes();

function updateClock() {
    const now = new Date();
    const h = now.getHours() % 12;

    document.querySelector('.hour').style.transform = `rotate(${h * 30}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${slowMin * 6}deg)`;
}

function tick() {
    slowMin++;
    if (slowMin >= 60) slowMin = 0;
    updateClock();
}

updateClock();
setInterval(tick, 300000);