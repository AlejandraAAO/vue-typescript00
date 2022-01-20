import { Router } from "express";
import Task from "../models/task";

const router = Router()

/* LISTAR TODO */
router.get("/tasks", async (req,res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

/* CREAR 1 */
router.post("/tasks", async (req,res) => {
    const {title, description} = req.body

    //se genera una tarea
    const task = new Task({title, description});
    //se guarda en la bd la tarea
    await task.save()
    
    res.json(task);
});

/* CONSULTAR 1 */
router.get("/tasks/:id", async(req,res) => {
  try {
    const task = await Task.findById(req.params.id)
    if(!task) return res.status(404).json({message:"Task not found"})
    res.send(task);
  } catch(error){
      return res.status(500).send(error)
  }
   
});

/* ELIMINAR */
router.delete("/tasks/:id", async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        
        if(!task) return res.status(404).json({message:"Task not found"})
        return res.json(task)
    } catch(error){
        return res.status(500).send(error)
    }
   
});
/* UPDATE */
router.put("/tasks/:id", async(req,res) => {
  const updtedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updtedTask);
});
export default router