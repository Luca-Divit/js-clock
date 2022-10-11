// console.log('Hello from index.js');
function day(date) {
  return date.getDate();
};

function nameDay(date) {
  const dayObj = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const day = date.getDay();
  return dayObj[day];
};

function monthDay(date) {
  const dayObj = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  const day = date.getMonth();
  // console.log(dayObj[day]);
  return dayObj[day];
};

function setTime() {
  const time = new Date();
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const header = document.querySelector('h1');
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const whatIsToday = `${nameDay(time)} <span style="font-size: 2em; font-family: 'Orbitron', sans-serif;">${day(time)}</span> ${monthDay(time)} ${time.getFullYear()}`;
  // console.log(hour);
  // console.log(minute);
  // console.log(second);
  seconds.setAttribute('style', `transform: rotate(${(second + 15) / 60 * 360}deg)`);
  minutes.setAttribute('style', `transform: rotate(${(minute + 15) / 60 * 360}deg)`);
  hours.setAttribute('style', `transform: rotate(${(hour + 15) / 12 * 360}deg)`);
  if (header.innerHTML === whatIsToday) {
    return;
  } else {
    header.innerHTML = whatIsToday;
  };
};

setInterval(setTime, 1000);
