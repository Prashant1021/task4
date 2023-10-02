import { User } from "../model/userModel.js"

export let createUser=async(req,res)=>{
    try {
        let data=req.body
        let result=await User.create(data)
        console.log(result)
        res.status(200).json({message:"User created successfully",result})
    } catch (error) {
        res.status(404).json({message:"Error creating user",error})

        
    }
}

export let readAll=async(req,res)=>{
    try {
        let result=await User.find({})
        res.status(200).json({message:"user found successfully",result})
    } catch (error) {
        res.json({message:"Error",error})
    }

}
export let readSpecific=async(req,res)=>{
    try {
        let id=req.params.id
        let result=await User.findById(id)
        res.status(200).json({message:"user found successfully",result})
    } catch (error) {
        res.json({message:"Error",error})
    }

}

export let deleteSpecific = async (req, res) => {
    try {
      let id = req.params.id;
      let result = await User.findByIdAndDelete(id);
      if (result) {
        res.status(200).json({ message: "User deleted successfully", result });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  export let updateSpecific = async (req, res) => {
    try {
      let id = req.params.id;
      let updateData = req.body;
      let result = await User.findByIdAndUpdate(id, updateData, { new: true });
  
      if (result) {
        res.status(200).json({ message: "User updated successfully", result });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error });
    }
  }
  