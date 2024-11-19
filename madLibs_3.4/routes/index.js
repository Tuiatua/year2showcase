var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index')
});


router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story',{
    newStory: newStory,
    color: generateRandomHexCode(),
    font: "Agency FB, sans-serif",
    fsize: "35px"
  });
})

module.exports = router;

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getStory(formData){
  if(formData.storyChoice === "4") {
    let num = getRandomInt(3);
    if(num === 1){
      return generateStory1(formData);
    }else if(num === 2){
    return generateStory2(formData);
  }else return generateStory3(formData);
  }else if(formData.storyChoice === "1") {
    return generateStory1(formData);
  }else if(formData.storyChoice === "2") {
    return generateStory2(formData);
  }else if(formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Once upon a time, a ${formData.adjective1} ${formData.noun1} decided to ${formData.verb1} through the ${formData.adjective2} forest. Along the way, 
  they met a ${formData.noun2} that helped them ${formData.verb2} past a dangerous river. Finally, they arrived at the 
  ${formData.adjective3} ${formData.noun3}, 
  where they could rest and ${formData.verb3} peacefully.`
}

function generateStory2(formData){
  return `Once upon a time, a ${formData.adjective1} ${formData.noun1} decided to ${formData.verb1} across the ${formData.adjective2} ${formData.noun2}. Along the way, they encountered a ${formData.noun3} who
   tried to ${formData.verb2} them. But with their ${formData.adjective3} attitude, they managed to ${formData.verb3} and 
   finish their quest.`
}

function generateStory3(formData){
  return `In a ${formData.adjective1} ${formData.noun1}, the ${formData.noun2} decided to ${formData.Verb1} to the 
  ${formData.adjective2} ${formData.noun3}. On the way, they met a troll that needed help ${formData.verb2} through a 
  ${formData.adjective3} river. Together, they managed to ${formData.verb3} across and continue their journey.`
}

function generateRandomHexCode(){
  let hexCode = "#"
  while(hexCode.length < 7){
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}