const express = require('express');
const router = express.Router();
const db = require('./../db.concerts');


router.route('/concerts').get((req, res) => {
    res.json(concerts);
});

router.route('/concerts/:id').get((req, res) => {
    res.json(concerts);
});

router.route('/concerts').post((req, res) => {
    res.json({ massage: 'ok' });
});

router.route('/concerts/:id').put((req, res) => {
    res.json({ massage: 'ok' });
});

router.route('/concerts/:id').delete((req, res) => {
    res.json({ massage: 'ok' });
});

module.exports = router;