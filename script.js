// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDate = new Date("jun 25, 2022 23:59:59").getTime()
const newLocal = "#time";
let counter = setInterval(() => {
    //get date for now
    let nowDay = new Date().getTime()

    // Find The Date Difference Between Now And Countdown Date
    let Diff = countDate - nowDay;

    // Get Time Units
    let days = Math.floor(Diff / (1000 * 60 * 60 * 24));
    console.log(days)

    let hours = Math.floor((Diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours)

    let minutes = Math.floor((Diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes)

    let seconds = Math.floor((Diff % (1000 * 60)) / 1000);
    console.log(seconds)

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".min").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (Diff < 0) {
    clearInterval(counter);
    console.log("counter done")
  }
},1000)