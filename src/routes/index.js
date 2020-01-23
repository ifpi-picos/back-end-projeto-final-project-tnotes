const express = require('express');
const usuariosRoute = require('./users');

const router = express.Router();

router.use('/http://tnotes.surge.sh/', usuariosRoute);
router.get('/http://tnotes.surge.sh/', (req, res) => res.send('App Online!'));

module.exports = router;
