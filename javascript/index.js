// console.log('Hello from index.js');

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

function setTheDate(time) {
  const header = document.querySelector('h1');
  const whatIsToday = `${nameDay(time)} <span style="font-size: 2em; font-family: 'Orbitron', sans-serif;">${time.getDate()}</span> ${monthDay(time)} ${time.getFullYear()}`;
  if (header.innerHTML === whatIsToday) {
    return;
  } else {
    header.innerHTML = whatIsToday;
  };
};

function moveTheHeads(time) {
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  seconds.setAttribute('style', `transform: rotate(${(second + 15) / 60 * 360}deg)`);
  minutes.setAttribute('style', `transform: rotate(${(minute + 15) / 60 * 360}deg)`);
  hours.setAttribute('style', `transform: rotate(${(hour + 15) / 12 * 360}deg)`);
};

function setAll() {
  const time = new Date();
  setTheDate(time);
  moveTheHeads(time);
};

function removeHidden() {
  const clock = document.querySelector('.clock')
  clock.setAttribute('style', 'visibility: visible');
}

setInterval(setAll, 1000);
setTimeout(removeHidden, 150);
