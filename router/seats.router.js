const express = require('express');
const router = express.Router();
const db = require('./../db.seats');


router.route('/seats').get((req, res) => {
    res.json(seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(seats);
});

router.route('/seats').post((req, res) => {
    res.json({ massage: 'ok' });
});

router.route('/seats/:id').put((req, res) => {
    res.json({ massage: 'ok' });
});

router.route('/seats/:id').delete((req, res) => {
    res.json({ massage: 'ok' });
});

module.exports = router;