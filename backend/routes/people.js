const { Router } = require('express');
const { getAll, getByName, getByFavorite, updateFavorite } = require('../controllers/people')

const router = Router();

router.get('/', getAll);

router.get('/:name', getByName);

router.get('/favorite/:favorite', getByFavorite);

router.patch('/:id/favorite/:favorite', updateFavorite);

module.exports = router