import { toast } from "react-toastify";
import { axiosInstance } from "../axios/axiosInstance";
import { folders } from "../endpoints/foldersEndPoints";

export const getParentFolders = async () => {
    try {
        const response = await axiosInstance.get(folders.getParents)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const fetchContent = async (id) => {
    try {
        const response = await axiosInstance.get(folders.fetch(id))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const createFolder = async (data) => {
    try {
        const response = await axiosInstance.post(folders.create, data)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const updateFolder = async (id, data) => {
    try {
        const response = await axiosInstance.put(folders.update(id), data)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const deleteFolder = async (id) => {
    try {
        const response = await axiosInstance.delete(folders.delete(id))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}


export const trashFolder = async (id) => {
    try {
        const response = await axiosInstance.delete(folders.trash(id))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}