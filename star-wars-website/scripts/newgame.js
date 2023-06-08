const ship = document.getElementById("ship");
const board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(ship).getPropertyValue("left"));
  
    

 
  if (e.key == "ArrowLeft" && left > 0) {
    ship.style.left = left - 10 + "px";
  }
  
  else if (e.key == "ArrowRight" && left <= 450) {
    ship.style.left = left + 10 + "px";
  }
  
  if (e.key == "ArrowUp") {
    var laser = document.createElement("div");
    laser.classList.add("bullets");

    board.appendChild(laser);

    var movebullet = setInterval(() => {
      var enemies = document.getElementsByClassName("enemies");

      for (enemy of enemies) {
        if (enemy != undefined) {
          var enemypositions = enemy.getBoundingClientRect();
          var laserpositions = laser.getBoundingClientRect();
          if (
            laserpositions.left >= enemypositions.left &&
            laserpositions.right <= enemypositions.right &&
            laserpositions.top <= enemypositions.top &&
            laserpositions.bottom <= enemypositions.bottom
          ) {
            enemy.parentElement.removeChild(enemy); 
            document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1;
          }
        }
      }
      var laserBottom = parseInt(
        window.getComputedStyle(laser).getPropertyValue("bottom")
      );

      
      if (laserBottom >= 500) {
        clearInterval(movebullet);
      }

      laser.style.left = left + 11 + "px";
      laser.style.bottom = laserBottom + 3 + "px";
    });

}

});


        var createEnemy = setInterval(() => {
        var enemy = document.createElement("div");
        enemy.classList.add("enemies");
        
        var enemyleft = parseInt(
            window.getComputedStyle(enemy).getPropertyValue("left")
        );
        enemy.style.left = Math.floor(Math.random() * 450) + "px";
            enemy.style.top=Math.floor(Math.random() * 200) + "px";

        board.appendChild(enemy);
        }, 1000);
    


var moveEnemies = setInterval(() => {
    let isFinished=false;
  var enemies = document.getElementsByClassName("enemies");

  
    for (enemy of enemies) {
        if (enemy != undefined) {
      
      var enemytop = parseInt(
        window.getComputedStyle(enemy).getPropertyValue("top")
      );
      if (enemytop >= 345) {
        $(".endScreen").css("visibility","visible");
        clearInterval(moveEnemies);
        clearInterval(createEnemy);
        clearInterval(createSpeed);
      }

      enemy.style.top = enemytop + Math.floor(Math.random() * 30) + "px";
    }
  }
}, 450);