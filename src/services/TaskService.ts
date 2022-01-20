import axios from "./axios";
//interfaz de dato propia de axios, la forma d ela respuesta
import { AxiosResponse } from "axios";
import {Task} from "@/interfaces/task"

//la peticion es una promesa q devolvera un string
export const getTasks = async (): Promise<AxiosResponse<Task[]>> => await axios.get('/tasks')

export const getTask = async (id:string): Promise<AxiosResponse<Task>> => await axios.get('/tasks/'+id)

export const createTask = async (task:Task) => 
    await axios.post('/tasks',task)
   
export const updateTask = async (id:string, task:Task) => 
    await axios.put('/tasks/'+id, task)

export const deleteTask = async (id:string): Promise<AxiosResponse<Task>> => await axios.delete('/tasks/'+id)
