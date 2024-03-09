let newgame = document.querySelector(".newgame");
let play = confirm("can you want to play the buble game?");
if (play) {
  function makebubble() {
    var cluter = "";
    for (var i = 0; i <= 70; i++) {
      var rn = Math.floor(Math.random() * 10);
      cluter += `<div class="bubble"> ${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = cluter;
  }

  var timer = 60;
  var score = 0;
  var hit = 0;

  function runtimer() {
    var timerint = setInterval(function () {
      timer--;
      if (timer >= 0) {
        // console.log(timer);
        document.querySelector("#timerval").textContent = timer;
      } else {
        clearInterval(timerint);
        var text = (document.querySelector(
          "#pbtm"
        ).innerHTML = `<h1>your score is ${score}</h1>`);
        newgame.classList.remove("hide");
      }
    }, 1000);
  }
  function hitbubble() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
    // console.log(hit);
  }
  function incscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
  }

  document.querySelector("#pbtm").addEventListener("click", function (event) {
    // console.log(event.target);
    var clicknumber = Number(event.target.textContent);
    if (clicknumber === hit) {
      incscore();
      hitbubble();
      makebubble();
    }
  });

  hitbubble();
  makebubble();
  runtimer();
}

newgame.addEventListener("click", function () {
  hitbubble();
  makebubble();
  score = 0;
  timer = 60;
  var hit = 0;
  document.querySelector("#scoreval").textContent = 0;
  runtimer();
  newgame.classList.add("hide");
});
