import { Request, NextFunction, Response } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction) =>{

 const id =  req.params.id

   if (id.length != 24){
        return res.status(404).json({ error: "O filme não existe." });
      }
      next()


}