let deadline = '2022-12-14';

function getDate(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    sec = Math.floor((t / 1000) % 60),
    min = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'days': days,
        'sec': sec,
        'min': min,
        'hours': hours
    }
};
function setZero(num) {
    if(num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
function setClock(selectorTimer, endtime) {
    const timer = document.querySelector(selectorTimer),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds =  timer.querySelector('#seconds'),
          intervalFunction = setInterval(updateTimer,1000);
          updateTimer();
          function updateTimer() {
              const t = getDate(endtime);

              days.innerHTML =  setZero(t.days);
              hours.innerHTML =  setZero(t.hours);
              minutes.innerHTML = setZero(t.min);
              seconds.innerHTML =  setZero(t.sec);
            if(t.total < 0) {
                clearInterval(intervalFunction);
                days.innerHTML =  '00';
                hours.innerHTML =  '00';
                minutes.innerHTML = '00';
                seconds.innerHTML =  '00';
            }
          }
    
}
setClock('.timer', deadline)