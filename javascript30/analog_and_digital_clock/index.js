const secondhand = document.querySelector('.seconds');
const minshand = document.querySelector('.minutes');
const hourhand = document.querySelector('.hour');


function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondhand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minshand.style.transform = `rotate(${minsDegrees}deg)`;

  let hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourhand.style.transform = `rotate(${hourDegrees}deg)`;
  let x;
  if(hour>=13){
    hour=hour-12;
    x="PM";
  }else{
    x="AM";
  }
  const a= hour + " : "+ mins + " : "+ seconds+ " : "+x;
  document.getElementsByTagName('h1')[0].innerText=a;
}


setInterval(setDate, 1000);
