const { Router } = require('express');
const { getSeeding } = require('../controllers/seeding')

const router = Router();

router.get('/', getSeeding);

module.exports = router