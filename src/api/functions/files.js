import { toast } from "react-toastify";
import { axiosInstance } from "../axios/axiosInstance";
import { files } from "../endpoints/filesEndpoints";

export const createFile = async (data) => {
    try {
        const response = await axiosInstance.post(files.create, data)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const updateFile = async (id, data) => {
    try {
        const response = await axiosInstance.put(files.update(id), data)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const deleteFile = async (id) => {
    try {
        const response = await axiosInstance.delete(files.delete(id))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const trashFile = async (id) => {
    try {
        const response = await axiosInstance.delete(files.trash(id))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}   