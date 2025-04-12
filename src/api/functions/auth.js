import { toast } from "react-toastify";
import { axiosInstance } from "../axios/axiosInstance";
import { auth } from "../endpoints/authEndPoints";

export const register = async (userData) => {
    try {    
        const response = await axiosInstance.post(auth.register, userData)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}

export const login = async (userData) => {
    try {
        console.log("user at login: ", userData);
        const response = await axiosInstance.post(auth.login, userData)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}

