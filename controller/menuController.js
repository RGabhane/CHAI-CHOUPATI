const express = require('express');

const Menu = require("../models/menu_model");



const menu_create = async (req, res) => {
    try {
        console.log("printing body");
        console.log(req.body);
        const newMenu = await Menu.create(req.body);

        res.status(201).json({
            status: 'success',
            data: { menu: newMenu }
        });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};




module.exports = {
    menu_create
}
