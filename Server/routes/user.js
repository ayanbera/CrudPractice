const express = require('express');
const router = express.Router();

const {createUser, find, update} = require('../controller/controller')
//const service = require('../services/re')

router.route('/users').post(createUser);

//router.route('/products').get(getProducts);


router.route("/user").get(find);


router.put("/users/:id", update);
//router.delete("/api/users/:id", delete);

module.exports = router;