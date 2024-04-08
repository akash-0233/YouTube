import { Router } from "express";
import { asynchandler } from "../utils/asyncHandler.js";

const registerUser = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
  console.log("Name is : ", req.body);
});

export { registerUser };
