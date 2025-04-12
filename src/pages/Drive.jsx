import { FileManager } from 'devextreme-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircleLoader from '../components/Spinners/CircleLoader';
import { useGetParents } from '../hooks/react-query/useFolder';


const Drive = () => {
    const [folders, setFolders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const { data, isLoading } = useGetParents();

    useEffect(() => {
        if (data?.data) {
            setFolders(data.data);
        }
    }, [data]);


    if (isLoading) return <CircleLoader />

    const saveFolder = () => {
        console.log('clicked');

    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mb-8 flex justify-center text-xs font-extrabold text-blue-600 mt-auto sm:mx-auto sm:w-full sm:max-w-sm">
                    <button className='px-4 py-2 bg-blue-500 text-white rounded'>
                        Add Folder
                    </button>
                </div>
                <div className="mb-8 flex justify-center text-xs font-extrabold text-blue-600 mt-auto sm:mx-auto sm:w-full sm:max-w-sm">
                    <input
                        name="folderName"
                        type="name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        placeholder='Folder Name'
                    />
                    <button onClick={saveFolder} className='ml-8 px-4 py-2 bg-blue-500 text-white rounded'>
                        Save
                    </button>
                </div>
            </div>
            <FileManager fileSystemProvider={folders}>
            </FileManager>
        </div>

    )
}

export default Drive