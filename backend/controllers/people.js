const service = require('../services/service');

async function getAll(req, res) {
    try {
        const results = await service.findAll();
        res.json(results);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

async function getByName(req, res) {
    try {
        const results = await service.findByName(req.params.name);
        res.json(results);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

async function getByFavorite(req, res) {
    try {
        const results = await service.findByFavorite(req.params.favorite);
        res.json(results);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateFavorite(req, res) {
    try {
        const results = await service.updateFavorite(req.params.id, req.params.favorite);
        res.json(results);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAll, getByName, getByFavorite, updateFavorite }