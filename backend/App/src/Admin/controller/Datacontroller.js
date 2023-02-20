const express = require("express"); 
const Scoter =require('../Model/DataModel')
const asyncHandler = require("express-async-handler");

// get scotre active 
const getScoter = asyncHandler(async (req, res) => {
    const scoter = await Scoter.find({status: "active"});
    res.json(scoter);
});

// createScoter

const createScoter = asyncHandler(async (req, res) => {
    const scoter = new Scoter({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        status: req.body.status,
        datecreation: req.body.datecreation,
    });
    const createdScoter = await scoter.save();
    res.status(201).json(createdScoter);
});


module.exports = {
    getScoter,
    createScoter,
};