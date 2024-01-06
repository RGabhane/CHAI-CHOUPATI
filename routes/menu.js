const express = require('express');
const menuController = require('../controller/menuController');

const router = express.Router();

router.post("/create_menu_item", menuController.menu_create);


module.exports = router;