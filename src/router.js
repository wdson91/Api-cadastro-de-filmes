"use strict";
exports.__esModule = true;
var movieValidations_1 = require("./middleware/movieValidations");
var express_1 = require("express");
var movieControllers_1 = require("./controllers/movieControllers");
var handleValidators_1 = require("./middleware/handleValidators");
var idValidator_1 = require("./middleware/idValidator");
var router = (0, express_1.Router)();
exports["default"] = router
    .get('/test', function (req, res) { res.status(200).send("API working"); })
    .post("/movie", (0, movieValidations_1.movieCreateValidation)(), handleValidators_1.validate, movieControllers_1.createMovie)
    .get("/movie", movieControllers_1.getAllMovies)["delete"]("/movie/:id", idValidator_1.validateId, movieControllers_1.removeMovie)
    .patch("/movie/:id", idValidator_1.validateId, (0, movieValidations_1.movieCreateValidation)(), handleValidators_1.validate, movieControllers_1.updateMovie)
    .get("/movie/:id", idValidator_1.validateId, movieControllers_1.findMovieById);
