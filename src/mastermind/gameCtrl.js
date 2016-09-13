(function () {
  'use strict';

  var controllerId = 'GameController';

      angular
    .module('app')
    .controller('GameController', ['loggerService', GameController]);

    function GameController(loggerService) {
        var ctrl = this;

        ctrl.gameStarted = false;
        ctrl.myNumber = "";
        ctrl.opponentGuessData = [];
        ctrl.processGuess = function(guess){
            if (!isNumberValid(guess)){
                ctrl.invalidNumberEntered = true;
                return;
            }
            ctrl.invalidNumberEntered = false;
            var result = getGuessEvaluation(ctrl.myNumber, guess);
            if (result === "+5"){
                responsiveVoice.speak("Elinize verildi, canınız sağolsun. Ağlamak yok, tamam mı? Ağlamak varsa bilelim", "Turkish Female");
            } else {
                responsiveVoice.speak(result.toString(), "Turkish Female");
            }
            ctrl.opponentGuessData.push({guess: guess, result: result});
            ctrl.clearOpponentGuess();
        };

        ctrl.startGame = function(myNumber){
            if (!isNumberValid(myNumber)){
                ctrl.invalidNumberEntered = true;
                return;
            }
            ctrl.invalidNumberEntered = false;
            ctrl.myNumber = myNumber;
            ctrl.myNumberStr = myNumber.toString();
            ctrl.gameStarted = true;
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
    }
})();
