
window.setInterval(() => {
  if (!document.URL.startsWith('https://nekto.me/audiochat')) {
    return
  }
  var Unit = document.getElementsByClassName("buttons-panel")
  if (!Unit) {
    return
  }
  var panelButton = Unit[0];
  
  if (!panelButton) {
    return
  }
  var startButton = Unit[0].children[0];
  if (startButton.innerHTML != "Завершить") {
    startButton.click();
  }
  console.log("Плагин работает!");
}, 2500);
