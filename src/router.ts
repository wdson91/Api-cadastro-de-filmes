
import { movieCreateValidation } from './middleware/movieValidations';
import { Router, Request,Response } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers";
import {validate} from "./middleware/handleValidators"
import { validateId } from './middleware/idValidator';

const router = Router()

export default router
.get('/test',(req:Request,res:Response)=>{res.status(200).send("API working")})
.post("/movie",movieCreateValidation(),validate,createMovie)
.get("/movie", getAllMovies)
.delete("/movie/:id",validateId, removeMovie)
.patch("/movie/:id",validateId, movieCreateValidation(), validate, updateMovie)
.get("/movie/:id",validateId,findMovieById);