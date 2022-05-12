const express = require('express');
const router = express.Router();

const {createUser, find, update, del} = require('../controller/controller')
//const service = require('../services/re')

router.route('/users').post(createUser);

//router.route('/products').get(getProducts);


router.route("/users").get(find);

router.route("/users/:id").put(update);
//router.delete("/api/users/:id", delete);

router.route("/users/:id").delete(del);

module.exports = router;