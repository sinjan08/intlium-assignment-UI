import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createFolder, getParentFolders } from "../../api/functions/folders";

export const useCreateFolder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createFolder,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['folders'] });
        }
    });
};



export const useGetParents = () => {
    return useQuery({
        queryKey: ['folders'],
        queryFn: async () => await getParentFolders(),
        onError: (error) => {
            console.error(error);
            const message = error?.response?.data?.message || 'Something went wrong';
            toast.error(message);
        }
    });
};



