var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('choices');
});
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choices;
  let pcChoice = getPcChoice(['rock','paper','scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('result', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner
  });
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getPcChoice(options){
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}

function pickWinner(playerChoice, PcChoice){
  if (playerChoice === PcChoice){
    return 'draw';
  }
  if (playerChoice === 'rock'){
    if (PcChoice === 'paper'){
      return 'pc';
    }
    if (PcChoice === 'scissors'){
      return 'player';
    }
  }
  if (playerChoice === 'paper'){
    if (PcChoice === 'scissors'){
      return 'pc';
    }
    if (PcChoice === 'rock'){
      return 'player';
    }
  }
  if (playerChoice === 'scissors'){
    if (PcChoice === 'paper'){
      return 'player';
    }
    if (PcChoice === 'rock'){
      return 'pc';
    }
  }
  return 'invalid';
}

module.exports = router;
