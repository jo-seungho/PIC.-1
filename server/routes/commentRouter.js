const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("comment ok");
})

module.exports = router;