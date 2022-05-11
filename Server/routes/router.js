const express = require('express');
const router = express.Router();

const {create, find, update} = require('../controller/controller')
//const service = require('../services/re')

router.post("users", create);
router.get("/users", find);
router.put("/users/:id", update);
//router.delete("/api/users/:id", delete);

module.exports = router;