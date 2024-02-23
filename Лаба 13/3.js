let startTime, endTime;

document.getElementById('startButton').addEventListener('click', function() {
  startTime = new Date();
});

document.getElementById('endButton').addEventListener('click', function() {
  if (startTime) {
    endTime = new Date();
    let timeDiff = endTime - startTime; 
    let secondsDiff = Math.round(timeDiff / 1000); 
    document.getElementById('timeElapsed').textContent = `Прошло ${secondsDiff} секунд`;
  } else {
    document.getElementById('timeElapsed').textContent = "Старт нажми 'Start'";
  }
});