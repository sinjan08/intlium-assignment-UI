import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Forms/RegisterForm';

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/drive');
        }
    }, [navigate]);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex justify-center text-4xl font-extrabold text-blue-600">
                    Welcome to Drive
                </div>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Register Yourself
                </h2>
            </div>
            <RegisterForm />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-lg font-normal  text-gray-900">
                    Existing User? <Link to="/register" className="text-blue-600">Login</Link>
                </h2>
            </div>
        </div>
    )
}

export default Register