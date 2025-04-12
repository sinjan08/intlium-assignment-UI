import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/Forms/LoginForm";


const Home = () => {
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
                    Sign in to your account
                </h2>
            </div>
            <LoginForm />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-lg font-normal text-gray-900">
                    New User? <Link to="/register" className="text-blue-600">Register</Link>
                </h2>
            </div>
        </div>
    )
}

export default Home