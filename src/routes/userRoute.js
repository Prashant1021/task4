import { Router } from "express";
import { createUser, deleteSpecific, readAll, readSpecific, updateSpecific } from "../controller/userController.js";

let userRouter=Router();
userRouter.route("/create-user").post(createUser)

userRouter.route("/get-user").get(readAll)
userRouter.route("/get-user/:id").get(readSpecific)
userRouter.route("/delete-user/:id"). delete(deleteSpecific)
userRouter.route("/update-user/:id"). patch(updateSpecific)



export default userRouter