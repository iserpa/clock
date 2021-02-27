setInterval(showTime, 1000);

function showTime(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let am_pm = "AM";

  //set PM or AM
  if(h > 12){
    h -= 12;
    am_pm = "PM";
  }

  if(h == 0){
    h = 12;
    am_pm = "AM";
  }

  //Insert a 0 before the hour number if its < 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s; 

  let time = `${h}:${m}:${s}`;

  document.getElementById("clock").innerHTML = time;
  document.getElementById("am-pm").innerHTML = am_pm;
}

showTime();

//Define the background color

function setBlue(){
    document.getElementById("body").style.background = "radial-gradient(circle, rgba(33,180,222,1) 0%, rgba(13,37,153,1) 100%)"
}

function setBrown(){
    document.getElementById("body").style.background = "radial-gradient(circle, rgba(255,180,130,1) 0%, rgba(158,102,57,1) 100%)"
}

function setPurple(){
    document.getElementById("body").style.background = "radial-gradient(circle, rgba(227,29,193,1) 0%, rgba(130,29,232,1) 100%)"
}

function setOrange(){
  document.getElementById("body").style.background = "radial-gradient(circle, rgba(255,159,99,1) 20%, rgba(244,125,67,1) 100%)"
}