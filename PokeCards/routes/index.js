var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/PokemonController');

/* GET home page. */
router.get('/', pokemonController.viewAll);
router.get('/edit/:id', pokemonController.renderEditForm)
router.post('/edit/:id', pokemonController.updatePokemon)
router.get('/delete/:id', pokemonController.deletePokemon)

module.exports = router;
