const {Poke, Element} = require('../models');

module.exports.viewAll = async function(req, res, next) {
    const pokes = await Poke.findAll();
    res.render('index', {pokes});
}

module.exports.renderEditForm = async function(req, res, next) {
    const elements = await Element.findAll();
    const poke = await Poke.findByPk(
        req.params.id
    );

    res.render('edit', {poke, elements});
}

module.exports.updatePokemon = async function(req, res, next) {
    await poke.update(
        {
            name: req.body.name,
            colorone: req.body.colorone,
            colortwo: req.body.colortwo,
            hp: req.body.hp,
            element: req.body.element,
            picture: req.body.picture,
            elementcostone: req.body.elementcostone,
            elementcosttwo: req.body.elementcosttwo,
            movenameone: req.body.name,
            movenametwo: req.body.name,
            dmgone: req.body.name,
            dmgtwo: req.body.name,
            elementw: req.body.name,
            elementr: req.body.name
        },
            {
                where: {
                    id: req.params.id
                }

    });
    res.redirect('/');
}

module.exports.deletePokemon = async function(req, res, next) {
    await poke.destroy(
        {
            where: {
                id: req.params.id
            }

    });
    res.redirect('/');
}