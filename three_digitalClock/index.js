const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); // YEHa se time aaega

  clock.innerHTML=date.toLocaleTimeString();
}, 1000);


