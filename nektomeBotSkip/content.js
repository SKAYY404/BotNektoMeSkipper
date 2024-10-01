




document.addEventListener('keydown', function(event) {
  // Проверяем, какая клавиша была нажата
  if (event.key === 'a' ) {
    if (document.URL.startsWith('https://nekto.me/audiochat')) {

      let startBtn = document.querySelector("#searchCompanyBtn")
       if (startBtn != null) {
         startBtn.click()
       }
    }

    if (document.URL.startsWith('https://nekto.me/audiochat#/searching')) {

      let startBtn = document.querySelector(".btn.btn-lg.stop-scan-button")
      if (startBtn != null) {
        startBtn.click()
      }
    }









    try {


      let selectCloseWindow = document.querySelector(".btn.btn-lg.stop-talk-button")
         if (selectCloseWindow != null ) {
           selectCloseWindow?.click();
         }

      let closeDialog = document.querySelector(".swal2-confirm.swal2-styled")
      if (closeDialog!=  null ) {
        closeDialog?.click();
      }

    }
    catch (e) {
      console.log('чат не определился')
    }

  }

});





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
  if (startButton.innerHTML != "Завершить" && startButton.innerHTML != "Остановить поиск") {
    startButton.click();
;
  }
  console.log("Плагин работает отлично!");
}, 1900);










window.setInterval(()=>{
  if (!document.URL.startsWith('https://nekto.me/audiochat')) {

    return
  }
  let headerHyperText = document.querySelector('.float_right.nav.navbar-nav');
  let header = document.querySelector('.header.header_chat');
  let headerText = document.querySelector(".hidden-xs.hidden-sm.hidden-md.pritch");
  let descriptionText = document.querySelector(".description");
  let s_age = document.querySelector(".s-age");
  let s_age_two = document.querySelector(".peer-age")?.children[1];
  let advertisement = document.querySelector(".chat-step.idle")?.children[1]?.children[2];
  let peer_age_hint = document.querySelector(".peer-age-hint");
  let navbar_brand = document.querySelector(".navbar-brand");
  let searchCompanyBtn = document.querySelector("#searchCompanyBtn");
  let join_div =  document.querySelector(".join");
  if(headerHyperText != null) {
    headerHyperText.textContent= 'Расширение работает';
  }
  if(header != null) {
    header.textContent='Чат некто ми (Расширение работает)';
  }
  if(headerText != null) {
    headerText.remove();
  }
  if(descriptionText != null) {
    descriptionText.remove();
  }

  if(s_age?.children[0].textContent === 'до 17 лет') {
    s_age.children[0].remove();
  }
  if(s_age_two?.children[0].textContent === 'до 17 лет') {
    s_age_two.children[0].remove();
  }
  if(advertisement!= null) {
    advertisement.remove();
  }
  if(advertisement!= null) {
    peer_age_hint.remove();
  }
  if(navbar_brand!= null) {
    navbar_brand.remove();
  }
  if(searchCompanyBtn!= null) {
    searchCompanyBtn.textContent = "го";
  }
  if(join_div != null) {
    join_div.remove();
  }


  if(document.URL.startsWith('https://nekto.me/audiochat#/peer'))
  {
    let mainVoice = document.querySelector(".companion-label");
    let mainVoiceLogo = document.querySelector(".nekto");

    let mainVoiceLabel = document.querySelector(".talk-label");
    if(mainVoice!= null) {
      mainVoice.remove();
      mainVoiceLogo.remove();
      mainVoiceLabel.remove();
    }





  }

},5)









