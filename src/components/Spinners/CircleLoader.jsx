const CircleLoader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div role="status">
                <svg
                    className="w-20 h-20 text-blue-500 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default CircleLoader;
