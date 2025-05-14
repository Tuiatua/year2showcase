var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "tacocat",
    entered: "tacocat",
    message: "tacocat is a palindrome."
  })
});

router.post('/', function(req, res, next) {
  res.render('index', {
    phrase: req.body.userText,
    message: getResultPalindrome(req.body.userText),
    entered: sendPalindrome(req.body.userText)
  })
})

module.exports = router;

function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  if(phrase.toLowerCase().replace(" ","") === temp.toLowerCase().replace(" ","")){
    return true;
  }else{
    return false;
  }
}

function getResultPalindrome(phrase){
  if(checkPalindrome(phrase)){
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}

function sendPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  temp = temp.replace(" ","")
  return temp;
}