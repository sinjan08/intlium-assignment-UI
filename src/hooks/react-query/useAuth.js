import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, register } from "../../api/functions/auth";

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log(data);
            const { data: userData } = data
            const { token } = userData;
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(userData));
            navigate('/drive');
        },
        onError: (error) => {
            console.log(error);
            toast.error(error.response.data.message);
        }
    })
}


export const useRegister = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            console.log(data);
            const { data: userData } = data
            const { token } = userData;
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(userData));
            navigate('/drive');
        },
        onError: (error) => {
            console.log(error);
            toast.error(error.response.data.message);
        }
    });
}