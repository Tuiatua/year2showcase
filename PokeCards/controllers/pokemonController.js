const {Poke} = require('../models');
module.exports.viewAll = async function(req, res, next) {
    const pokes = await Poke.findAll();
    res.render('index', {pokes});
}