// console.log('Hello from index.js');
function setTime() {
  const time = new Date();
  const hours = document.querySelector('.hours')
  const minutes = document.querySelector('.minutes')
  const seconds = document.querySelector('.seconds')
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  console.log(hour);
  console.log(minute);
  console.log(second);
  seconds.setAttribute('style', `transform: rotate(${(second + 15) / 60 * 360}deg)`)
}

setInterval(setTime, 1000);
