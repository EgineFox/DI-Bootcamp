/*
// Wait 5 seconds, then show the banner
    setTimeout(() => {
      const banner = document.getElementById('banner');
      banner.style.display = 'block';
    }, 5000);
*/

  let timerElement = document.getElementById("timer");
  let countdown = Number(timerElement.innerText);

  let timer = setInterval(() => {
    if (countdown <= 0) {
      clearInterval(timer);
      timerElement.innerText = "0";
      document.getElementById("banner").innerHTML = "The sale has ended!";
    } else {
      countdown--;
      timerElement.innerText = countdown;
    }
  }, 1000); // 



