import { useFormik } from "formik";
import * as Yup from 'yup';
import { useLogin } from "../../hooks/react-query/useAuth";

const LoginForm = () => {

    const loginMutation = useLogin();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Email is required')
                .email('Invalid email address'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters'),
        }),
        onSubmit: (values) => {
            loginMutation.mutate(values);
            console.log(values);
        },
    });

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={formik.handleSubmit} method="POST" className="space-y-6" >
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-sm text-red-600">{formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            {...formik.getFieldProps('password')}
                        />

                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-sm text-red-600">{formik.errors.password}</div>
                        ) : null}
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Log in
                    </button>
                </div>
            </form>
        </div >
    )
}

export default LoginForm