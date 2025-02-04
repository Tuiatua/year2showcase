var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/PokemonController');

/* GET home page. */
router.get('/', pokemonController.viewAll);

module.exports = router;
