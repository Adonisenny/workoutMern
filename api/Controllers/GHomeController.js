import mongoose from "mongoose"
import ghome from "../models/GHomeModel.js"

export const GHomeController = async(req,res, next) => {
 const {story} =req.body
 try {
     const savedGHome = await ghome.create({story})
     res.json(savedGHome)
 } catch (error) {
     console.log(error)
 }
}
// const homepage = new ghome(req.body)
// try {
//     const savedHome = await homepage.save()
//     res.status(200).json(savedHome)
// } catch (error) {
//     console.log(error)
// }


// }
