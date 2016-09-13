(function () {
  'use strict';

  var controllerId = 'GameController';

  angular
    .module('app')
    .controller('GameController', ['loggerService', GameController]);

    /*
      Has a lot of code that should live in services, not structured at all...
    */
    function GameController(loggerService) {
        var ctrl = this;

        ctrl.gameStarted = false;
        ctrl.myNumber = "";
        ctrl.opponentGuessData = [];
        ctrl.processGuess = function(guess){
            if (!isNumberValid(guess)){
                sayRandomMessage(invalidInputMessages);
                ctrl.invalidNumberEntered = true;
                return;
            }
            ctrl.invalidNumberEntered = false;
            var result = getGuessEvaluation(ctrl.myNumber, guess);
            ctrl.opponentGuessData.push({guess: guess, result: result});
            ctrl.clearOpponentGuess();
        };

        ctrl.startGame = function(myNumber){
            if (!isNumberValid(myNumber)){
                sayRandomMessage(invalidInputMessages);
                ctrl.invalidNumberEntered = true;
                return;
            }
            ctrl.invalidNumberEntered = false;
            ctrl.myNumber = myNumber;
            ctrl.myNumberStr = myNumber.toString();
            ctrl.gameStarted = true;
            sayRandomMessage(gameStartMessages);
        };

        function getGuessEvaluation (value, guess){
            var correctLocation = 0;
            var wrongLocation = 0;
            guess = guess.toString();
            value = value.toString();
            for (var i = 0; i < value.length; i++) {
                if (guess[i] == value[i]) {
                    correctLocation++;
                } else if (value.indexOf(guess[i]) >= 0) {
                    wrongLocation++;
                }
            }

            var result;
            if (correctLocation === 0 && wrongLocation === 0) {
                result = "0";
            } else	if (correctLocation > 0 && wrongLocation > 0) {
                result = '+' + correctLocation + ', -' + wrongLocation;
            } else if (correctLocation > 0) {
                result = '+' + correctLocation;
            } else if (wrongLocation > 0) {
                result = '-' + wrongLocation;
            }
            if (result === "+5") {
              sayRandomMessage(correct5_messages);
            } else if (result === "+4") {
              sayRandomMessage(correct_plus_4messages);
            } else {
              if (correctLocation + wrongLocation === 5 && result !== "+5") {
                var message;
                if (correctLocation > 2) {
                  message = result.toString() + getRandomMessage(correct3_4messages);
                  responsiveVoice.speak(message, "Turkish Female");
                } else {
                  message = result.toString() + getRandomMessage(correct1_2messages);
                  responsiveVoice.speak(message, "Turkish Female");
                }
              } else if (result === "0") {
                  sayRandomMessage(zeroMessages);
              } else {
                responsiveVoice.speak(result.toString(), "Turkish Female");
              }
            }

            return result;
        }

        function isNumberValid (value){
            return (value && value > 10000 && value < 99999 && !/(.).*\1/.test(value));
        }

        ctrl.clearOpponentGuess = function() {
            ctrl.opponentGuess = "";
        };

        ctrl.reset = function() {
          ctrl.gameStarted = false;
          ctrl.myNumber = "";
          ctrl.opponentGuessData = [];
          ctrl.opponentGuess = "";
          ctrl.invalidNumberEntered = false;
        };

        function sayRandomMessage(arr) {
          var message = getRandomMessage(arr);
          responsiveVoice.speak(message, "Turkish Female");
        }

        function getRandomMessage(arr) {
            var total = arr.length;
            return arr[getRandomInt(0, total)];
        }

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }

        var gameStartMessages = [
          "Oyun başladı. Sevgiliniz Cemoş size iyi şanslar diler.",
          "İyi olan kazansın, bol şans.",
          "Meşhur sayı oyunu başlamıştır, iyi şanslar.",
          "Aklınıza kuvvet, beyin bedava, bedava yaa, haydi göreyim sizi.",
          "Haydi şapşikim benim, ele vermek senin göbek adın.",
          "Oyun başladı. İçimden bir ses kazanacaksınız diyor."
        ];
        var correct1_2messages = [
          " . Ha siktir, neyse, panik olmayın. Çıkmadık candan umut kesilmez."
        ];
        var correct3_4messages = [
          " . Elinize verilmek üzere, lütfen avcunuzu açınız.",
          " . Cemoş var ya Cemoş, yer sizi yaa, ama maalesef elinize verilmek üzere."
        ];
        var correct_plus_4messages = [
          " +4 . Başınız dertte gibi, bir an önce aradığınız sayıyı bulmanız gerekiyor.",
          " +4 . Zannedersem bu sıçtığınızın resmidir."
        ];
        var correct5_messages = [
          "Elinize verildi, canınız sağolsun. Cemoş sizi çok seviyor, o yüzden ağlamak yok, tamam mı? Gene de ağlamak varsa bilelim",
          "Evet, yenildiniz. Ama rakibiniz sizi sevdiği için yenildiniz.",
          "Size yine hüsran, sevdiğinize yine bayram var, geçmiş olsun.",
          "Bilgisayarınızı koltuğunuzun altına alınız ve gülümseyiniz, yenildiniz.",
          "Geçmiş olsun, sevgiliniz size Ağlama Değmez Hayat Bu Gözyaşlarına şarkısını armağan ediyor.",
          "Kaderde varsa yenilmek, neye yarar üzülmek? O yüzden, üzülmeyiniz.",
          "Maalesef yenildiniz. Bir dost tavsiyesi, yenilginin acısına en iyi gelen şey patates pilav yapmaktır.",
          "üzgünüm şapşikliğiniz yenilmenize engel olamadı.",
          "Allahım ya rabbim, böyle bir şapşiklik olamaz. Ama yenildiniz.",
        ];
        var zeroMessages = [
          "Ooooof, 0, rakibiniz şahane bir tahmin yaptı, galiba sıçtınız.",
          "Aman tanrım, 0.",
          "Allahım, olamaz böyle bir şey, 0.",
          "Ooy ooy ooy, 0, sıkıntı büyük",
          "Hahaha, 0, hihohaha",
          "Vay anasını, 0, rakibinizdeki şans sizde olsa çoktan kazanmıştınız.",
          "0 0 0, inanamıyorum yaa."
        ];
        var invalidInputMessages = [
          "Hatalı sayı girdiniz. Lütfen daha dikkatli olunuz. Cemoş'u öpünüz.",
          "Maalesef şapşikliğiniz hatalı sayı girmenize engel olamıyor.",
          "Gene hatalı sayı girdiniz, rica ederim dikkatli olunuz.",
          "Kurallar açık ve net, lütfen kurallara uygun bir sayı giriniz.",
          "Neyiniz var kuzum? Bu sayı hatalı, görmüyor musunuz?",
          "Cemoş var ya Cemoş, yer sizi yaa, ama bu sayı hatalı.",
        ];
    }
})();
