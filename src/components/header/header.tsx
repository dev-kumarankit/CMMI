import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
            <h1 className="text-lg font-semibold">My App</h1>
            <div className="space-x-4">
                <button
                    onClick={() => navigate("/size-update")}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm"
                >
                    Go to Size Update
                </button>
                <button
                    onClick={() => navigate("/size-update")}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm"
                >
                    Go to Assign Page
                </button></div>
        </header>
    );
};

export default Header;
